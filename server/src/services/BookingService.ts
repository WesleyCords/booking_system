import { Service, Booking } from "../models/index.js"
import { AppError } from "../errors/AppError.js"
import { CreateBookingDTO } from "../types.js"
import sequelize from "../db/index.js"
import { Op } from "sequelize"
class BookingService {
  public getServiceById = async (idService: number) => {
    const service = await Service.findByPk(idService)
    if (!service) {
      throw new AppError("Não existe/encontrado esse Serviço.", 404)
    }
    return service
  }

  public createBooking = async ({
    idService,
    clientName,
    clientEmail,
    clientPhone,
    date,
    time,
  }: CreateBookingDTO) => {
    const result = await sequelize.transaction(async (t) => {
      const service = await this.getServiceById(idService)

      const startTime = new Date(`${date}T${time}:00.000Z`)
      const endTime = new Date(startTime.getTime() + service.duration * 60000)

      const conflict = await Booking.findOne({
        where: {
          startTime: {
            [Op.lt]: endTime,
          },
          endTime: {
            [Op.gt]: startTime,
          },
        },
        transaction: t,
        lock: t.LOCK.UPDATE,
      })
      if (conflict) {
        throw new AppError("Horário indisponível para agendamento.", 409)
      }

      const newBooking = await Booking.create(
        {
          clientName,
          clientEmail,
          clientPhone,
          idService: service.id,
          startTime,
          endTime,
        },
        { transaction: t },
      )
      return newBooking
    })
    return result
  }

  public getBookings = async (date: string, idService: number) => {
    const service = await this.getServiceById(idService)

    const timeServiceMs = service.duration * 60000

    const dayStart = new Date(`${date}T08:00:00.000Z`)
    const dayEnd = new Date(`${date}T17:00:00.000Z`)

    const busySlots = await Booking.findAll({
      attributes: ["startTime", "endTime"],
      where: {
        startTime: {
          [Op.between]: [
            new Date(`${date}T00:00:00.000Z`),
            new Date(`${date}T23:59:59.999Z`),
          ],
        },
      },
    })
    const freeSlots: String[] = []

    let potentialStart = dayStart.getTime()

    const jumptInterval = 15 * 60000

    while (potentialStart + timeServiceMs <= dayEnd.getTime()) {
      let potentialEnd = potentialStart + timeServiceMs

      const conflictTime = busySlots.some((booking) => {
        const busyStart = booking.startTime.getTime()
        const busyEnd = booking.endTime.getTime()
        return potentialStart < busyEnd && potentialEnd > busyStart
      })

      if (!conflictTime) {
        const timeString = new Date(potentialStart)
          .toISOString()
          .substring(11, 16)
        freeSlots.push(timeString)
      }
      potentialStart += jumptInterval
    }
    return freeSlots
  }

  public deleteBooking = async (id: number) => {
    const booking = await Booking.findByPk(id)
    if (!booking) {
      throw new AppError("Reserva não encontrada.", 404)
    }
    const now = new Date()
    const previesMs = 60 * 60 * 1000

    if (booking.startTime.getTime() < now.getTime()) {
      throw new AppError("Não é possível cancelar uma reserva passada.", 400)
    }

    if (booking.startTime.getTime() - now.getTime() < previesMs) {
      throw new AppError(
        "Reservas só podem ser canceladas com pelo menos 1 hora de antecedência.",
        400,
      )
    }

    await booking.destroy()
    return { message: "Reserva deletada com sucesso." }
  }
}

export default new BookingService()
