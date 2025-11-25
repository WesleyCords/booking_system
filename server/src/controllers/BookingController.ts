import { Request, Response, NextFunction } from "express"
import BookingService from "../services/BookingService.js"

class BookingController {
  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { clientName, clientEmail, idService, date, time } = req.body

      const service = await BookingService.getServiceById(idService)
      const newBooking = await BookingService.createBooking()

      return res.status(201).json(newBooking)
    } catch (err) {
      next(err)
    }
  }

  public teste = (req: Request, res: Response) => {
    res.send("Teste")
  }
}

export default new BookingController()
