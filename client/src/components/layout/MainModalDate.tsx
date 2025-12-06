import Fields from '@/components/layout/Fields'
import ButtonMain from '@/components/booking/Button'
import { addDetails } from '@/store/modules/bookSlice'
import { useAppDispatch } from '@/store/hooks'
import { toggleDate, toggleTime } from '@/store/modules/uiSlice'
import { useState } from 'react'

const MainModalDate = () => {
  const dispatch = useAppDispatch()
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
  return (
    <>
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
    </>
  )
}

export default MainModalDate
