import { X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleDate, toggleTime } from '@/store/modules/uiSlice'
import Fields from '@/components/layout/Fields'
import ButtonMain from '@/components/booking/Button'
import { useState } from 'react'
import { addDetails } from '@/store/modules/bookSlice'

const ModalDate = () => {
  const dispatch = useAppDispatch()
  const { modalDate } = useAppSelector((state) => state.ui)
  const [details, setDetails] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
  })

  const updateField = (key: string, value: unknown) => {
    setDetails((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSubmit = () => {
    dispatch(addDetails(details))
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { phone, ...fieldsRequerid } = details
    const filled = Object.values(fieldsRequerid).every((value) => value !== '')
    if (filled) {
      dispatch(toggleDate())
      dispatch(toggleTime())
    } else {
      alert('Por favor, preencha todos os campos.')
    }
  }

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
        <p className="mb-4 text-sm text-gray-400">
          Preencha os dados abaixo para confirmar seu agendamento
        </p>
        <Fields
          value={details.name}
          label="Nome Completo"
          placeholder="Wesley Cordeiro"
          change={(value) => updateField('name', value)}
        />
        <Fields
          value={details.phone}
          label="Telefone"
          placeholder="(11) 99999-9999"
          change={(value) => updateField('phone', value)}
        />
        <Fields
          label="E-mail"
          placeholder="wesley@gmail.com"
          value={details.email}
          change={(value) => updateField('email', value)}
        />
        <div className="flex items-center justify-between gap-4">
          <Fields
            label="Data do Agndamento"
            type="date"
            value={details.date}
            change={(value) => updateField('date', value)}
          />
          <ButtonMain onBook={handleSubmit}>Próximo</ButtonMain>
        </div>
      </div>
    </>,
    document.body,
  )
}

export default ModalDate
