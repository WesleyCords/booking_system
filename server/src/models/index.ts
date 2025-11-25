import Booking from "./Booking.js"
import Service from "./Service.js"

Service.hasMany(Booking, { foreignKey: "idService", as: "bookings" })

Booking.belongsTo(Service, { foreignKey: "idService", as: "service" })

export { Booking, Service }
