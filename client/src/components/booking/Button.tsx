import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface ButtonProps {
  type?: 'button' | 'link'
  children: React.ReactNode
  toLink?: string
  onBook?: () => void
}

const ButtonMain = ({ type, children, toLink, onBook }: ButtonProps) => {
  if (type === 'link' && toLink) {
    return (
      <Link to={toLink}>
        <Button className="text-card-foreground cursor-pointer border-b-2 bg-transparent font-black transition-all duration-200 ease-in hover:border-b-2">
          {children}
        </Button>
      </Link>
    )
  }
  return (
    <Button className="cursor-pointer font-black" onClick={onBook}>
      {children}
    </Button>
  )
}

export default ButtonMain
