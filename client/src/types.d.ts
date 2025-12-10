interface Service {
  id: number
  title: string
  description: string
  price: string
  duration: number
  createdAt: string
  updatedAt: string
}

interface CreateBookingArgs {
  clientName: string
  clientEmail: string
  clientPhone: string
  idService: number
  date: string
  time: string
}

interface BookingNew extends CreateBookingArgs {
  id: number
  startTime: string
  endTime: string
  updatedAt: string
  createdAt: string
}

interface BookingResponse {
  message: string
}

interface ServiceDetails {
  date: string
  time: string
  id: number
  name: string
  phone: string
  email: string
}
interface BookState {
  book: Service
  service: ServiceDetails
}

interface UiState {
  modalDate: boolean
  modalTime: boolean
  calenderPickedOpen: boolean
}

interface SchelduleArgs {
  date: string
  idService: string
}
