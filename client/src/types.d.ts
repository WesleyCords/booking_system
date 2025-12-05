interface Service {
  id: number
  title: string
  price: number
  description: string
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
