export interface CreateBookingDTO {
  idService: number
  clientName: string
  clientEmail: string
  clientPhone?: string // Opcional
  date: string // "2025-11-20"
  time: string // "14:00"
}
