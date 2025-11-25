import { Model, DataTypes } from "sequelize"
import sequelize from "../db/index.js"

class Booking extends Model {
  declare id: number
  declare clientName: string
  declare clientEmail: string
  declare clientPhone: number
  declare idService: number
  declare startTime: Date
  declare endTime: Date
  declare createdAt: Date
  declare updatedAt: Date
}

Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    clientName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    clientPhone: {
      type: DataTypes.STRING,
    },
    idService: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "services",
        key: "id",
      },
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Bookings",
  },
)

export default Booking
