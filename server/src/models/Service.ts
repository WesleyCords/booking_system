import { Model, DataType, DataTypes } from "sequelize"
import sequelize from "../db/index.js"

class Service extends Model {
  declare id: number
  declare title: string
  declare description: string
  declare price: number
  declare duration: number
  declare createAt: Date
  declare updatedAt: Date
}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "Services",
  },
)

export default Service
