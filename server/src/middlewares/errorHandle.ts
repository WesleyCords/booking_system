import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/AppError.js"
import { ZodError } from "zod"

export const errorHandle = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
    })
  }
  if (err instanceof ZodError) {
    return res.status(400).json({
      status: "error de validação",
      message: err.issues.map((iss) => ({
        field: iss.path[0],
        message: iss.message,
      })),
    })
  }
  console.log(err)
  return res.status(500).json({
    status: "error",
    message: "Internal server error",
  })
}
