import e, { Router } from "express"
import BookingController from "./controllers/BookingController.js"

const router = Router()

router.post("/bookings", BookingController.create)
router.get("/teste", BookingController.teste)

export default router
