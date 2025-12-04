import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'

interface CardBookingProps {
  id: number
  title: string
  price: number
  description: string
  onBook?: () => void
}

const CardService = ({
  title,
  price,
  description,
  onBook,
}: CardBookingProps) => {
  return (
    <Card className="border-muted hover:border-primary/50 flex h-full w-full flex-col justify-between transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-[1.5rem] font-semibold">{title}</CardTitle>
        <CardDescription className="mb-6 text-[1rem]">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="text-primary text-2xl font-black">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price)}
        </span>
        <Button onClick={onBook} className="cursor-pointer font-bold">
          Agende Agora
        </Button>
      </CardContent>
    </Card>
  )
}

export default CardService
