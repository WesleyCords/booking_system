import { createPortal } from 'react-dom'
import { toggleDate, toggleTime } from '@/store/modules/uiSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import ButtonMain from '@/components/booking/Button'
import { Calendar } from 'lucide-react'
import MainModalTime from '@/components/layout/MainModalTime'
import formattedDate from '@/utils/formatDate'
import { useCreateBookingMutation } from '@/store/services/api'
import { toast } from 'sonner'

const ModalDate = () => {
  const dispatch = useAppDispatch()

  const openModal = useAppSelector((state) => state.ui.modalTime)
  const date = useAppSelector((state) => state.booking.service.date)
  const details = useAppSelector((state) => state.booking.service)
  const idService = useAppSelector((state) => state.booking.book.id)

  const payload = {
    clientName: details.name,
    clientEmail: details.email,
    clientPhone: details.phone,
    idService: idService,
    date: formattedDate(details.date) as string,
    time: details.time,
  }

  const [createBooking, { isLoading }] = useCreateBookingMutation()

  const changeModal = () => {
    dispatch(toggleTime())
    dispatch(toggleDate())
  }

  const handleBook = async () => {
    try {
      await createBooking(payload).unwrap()
      toast.success('Agendamento realizado com sucesso!', {
        description: `Te esperamos no dia ${formattedDate(details.date)} às ${details.time}`,
        duration: 5000,
      })
      dispatch(toggleTime())
    } catch (error) {
      console.error('Erro ao agendar:', error)
    }
  }

  if (!openModal) return null

  if (isLoading) {
    return createPortal(
      <>
        <div className="overlay" onClick={changeModal} />
        <div className="modais">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-semibold">Carregando...</h2>
            <span className="mt-2 flex items-center gap-3 text-sm text-gray-400">
              <Calendar /> {date}
            </span>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <ButtonMain onBook={changeModal} ligth>
              Fechar
            </ButtonMain>
          </div>
        </div>
      </>,
      document.body,
    )
  }

  return createPortal(
    <>
      <div className="overlay" onClick={changeModal} />
      <div className="modais">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold">Horários Disponíveis</h2>
          <span className="mt-2 flex items-center gap-3 text-sm text-gray-400">
            <Calendar /> {date}
          </span>
        </div>
        <MainModalTime />
        <div className="mt-4 flex justify-end gap-2">
          <ButtonMain onBook={changeModal} ligth>
            Fechar
          </ButtonMain>
          <ButtonMain onBook={handleBook}>Agendar</ButtonMain>
        </div>
      </div>
    </>,
    document.body,
  )
}

export default ModalDate
