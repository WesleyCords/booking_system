import e, { Router } from "express"
import BookingController from "./controllers/BookingController.js"

const router = Router()

router.post("/booking", BookingController.create)
router.get("/availability", BookingController.getAvailability)
router.delete("/booking/:id", BookingController.deleteBooking)

export default router
