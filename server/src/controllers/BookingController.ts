import { Request, Response, NextFunction } from "express"
import BookingService from "../services/BookingService.js"
import { z } from "zod"
import { AppError } from "../errors/AppError.js"

class BookingController {
  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookingSchema = z.object({
        clientName: z
          .string()
          .min(3, "O nome do cliente deve ter pelo menos 3 caracteres."),
        clientEmail: z.string().email("Email inválido."),
        clientPhone: z
          .string()
          .min(10, "O telefone do cliente deve ter pelo menos 10 dígitos.")
          .optional(),
        idService: z.number().int().positive(),
        date: z
          .string()
          .regex(
            /^\d{4}-\d{2}-\d{2}$/,
            "Data deve estar no formato AAAA-MM-DD.",
          ),
        time: z
          .string()
          .regex(/^\d{2}:\d{2}$/, "Hora deve estar no formato HH:MM."),
      })

      const { clientName, clientEmail, clientPhone, idService, date, time } =
        bookingSchema.parse(req.body)

      const newBooking = await BookingService.createBooking({
        clientName,
        clientEmail,
        idService,
        clientPhone,
        date,
        time,
      })
      return res.status(201).json(newBooking)
    } catch (err) {
      next(err)
    }
  }

  public getAvailability = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { date, idService } = req.query
      if (!date || !idService) {
        throw new Error("Parâmetros 'date' e 'idService' são obrigatórios.")
      }

      const availableSlots = await BookingService.getBookings(
        String(date),
        Number(idService),
      )

      return res.status(200).json(availableSlots)
    } catch (err) {
      next(err)
    }
  }

  public deleteBooking = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { id } = req.params
      const idNumer = Number(id)
      if (isNaN(idNumer) || idNumer <= 0) {
        throw new AppError("ID de agendamento inválido.", 400)
      }
      const messageDelete = await BookingService.deleteBooking(Number(id))
      return res.status(200).json(messageDelete)
    } catch (err) {
      next(err)
    }
  }
}

export default new BookingController()
