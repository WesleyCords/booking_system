import { X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleDate } from '@/store/modules/uiSlice'
import MainModalDate from '@/components/layout/MainModalDate'

const ModalDate = () => {
  const dispatch = useAppDispatch()
  const { modalDate } = useAppSelector((state) => state.ui)

  if (!modalDate) return null

  return createPortal(
    <>
      <div className="overlay" onClick={() => dispatch(toggleDate())} />
      <div className="modais">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Agendar Serviço</h2>
          <button
            onClick={() => dispatch(toggleDate())}
            className="hover:text-muted-foreground"
          >
            <X size={20} />
          </button>
        </div>
        <MainModalDate />
      </div>
    </>,
    document.body,
  )
}

export default ModalDate
