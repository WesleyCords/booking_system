import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface ButtonProps {
  type?: 'button' | 'link'
  children: React.ReactNode
  toLink?: string
  onBook?: () => void
  ligth?: boolean
}

const ButtonMain = ({ type, children, toLink, onBook, ligth }: ButtonProps) => {
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
    <Button
      className={cn(
        'cursor-pointer font-black',
        'hover:bg-primary/80 hover:border-primary-foreground',
        ligth
          ? 'text-accent-foreground border-accent-foreground hover:bg-primary/10 hover:border-accent-foreground border-2 bg-transparent'
          : '',
      )}
      onClick={onBook}
    >
      {children}
    </Button>
  )
}

export default ButtonMain
