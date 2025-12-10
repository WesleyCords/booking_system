import { useAppDispatch } from '@/store/hooks'
import { Button } from '../ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { addBook } from '@/store/modules/bookSlice'

interface CardBookingProps {
  service: Service
}

const CardService = ({ service }: CardBookingProps) => {
  const dispatch = useAppDispatch()
  return (
    <Card className="border-muted hover:border-primary/50 flex h-full w-full flex-col justify-between transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-[1.5rem] font-semibold">
          {service.title}
        </CardTitle>
        <CardDescription className="mb-6 text-[1rem]">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="text-primary text-2xl font-black">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(Number(service.price))}
        </span>
        <Button
          onClick={() => dispatch(addBook(service))}
          className="cursor-pointer font-bold"
        >
          Agende Agora
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardService
