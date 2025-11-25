import { Service, Booking } from "../models/index.js"
import { AppError } from "../errors/AppError.js"

class BookingService {
  public getServiceById = async (idService: number) => {
    const service = await Service.findByPk(idService)
    if (!service) {
      throw new AppError("Não existe/encontrado esse Serviço.", 404)
    }
    return service
  }
  public createBooking = async () => {
    const newBooking = await Booking.create({})
    return newBooking
  }
}

export default new BookingService()
