import ButtonMain from '@/components/booking/Button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'

import { useAppDispatch } from '@/store/hooks'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { setClientEmail } from '@/store/modules/bookSlice'

const MainOnBoard = () => {
  const [email, setEmailLocal] = useState('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleStart = () => {
    if (
      email.trim() === '' ||
      !email.includes('@') ||
      !email.includes('.com')
    ) {
      toast.warning('Por favor, insira um email válido.')
      return
    }
    dispatch(setClientEmail(email))
    localStorage.setItem('lastEmailBooking', email)
    navigate('/home')
  }

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-3">
      <Input
        className="w-[300px] text-center"
        placeholder="Digite seu email para iniciar..."
        value={email}
        onChange={(e) => setEmailLocal(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleStart()}
      />
      <div onClick={handleStart}>
        <ButtonMain>Começar Agora</ButtonMain>
      </div>
    </div>
  )
}
export default MainOnBoard
