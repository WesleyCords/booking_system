import { createPortal } from 'react-dom'
import { toggleDate, toggleTime } from '@/store/modules/uiSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import ButtonMain from '@/components/booking/Button'
import { Calendar } from 'lucide-react'
import MainModalTime from '@/components/layout/MainModalTime'

const ModalDate = () => {
  const dispatch = useAppDispatch()

  const openModal = useAppSelector((state) => state.ui.modalTime)
  const date = useAppSelector((state) => state.booking.service.date)
  const details = useAppSelector((state) => state.booking.service)

  const changeModal = () => {
    dispatch(toggleTime())
    dispatch(toggleDate())
  }

  const handleBook = () => {
    dispatch(toggleTime())
    console.log('Agendado com sucesso:', details)
  }

  if (!openModal) return null

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
