import Letters from '@/layouts/Letters'
import MainOnBoard from '@/layouts/MainOnBoard'
import { Toaster } from 'sonner'

const OnBoarding = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="mb-3 text-5xl font-black">Booking System</h1>
      <p>Uma sistema integro de agendamento para uma barbearia!</p>
      <MainOnBoard />
      <Letters />
      <Toaster position="top-right" richColors closeButton />
    </div>
  )
}

export default OnBoarding
