import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface StickyBarProps {
  service: Service | null
}

const StickyBar = ({ service }: StickyBarProps) => {
  if (service) {
    return (
      <div
        className={cn(
          'bg-background fixed left-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-3xl -translate-x-1/2 items-center justify-between gap-4 rounded-lg border p-4 shadow-xl',
          'transition-all duration-500 ease-in-out',
          'bg-card border-border text-card-foreground',
          service
            ? 'bottom-4 translate-y-0 opacity-100'
            : 'pointer-events-none bottom-0 translate-y-full opacity-0',
        )}
      >
        <div>
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="text-sm text-gray-400">{service.description}</p>
        </div>
        <div className="border-primary flex items-center gap-4 border-l pl-4">
          <span className="text-xl font-black whitespace-nowrap">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(service.price)}
          </span>
          <Button className="bg-primary text-primary-foreground cursor-pointer font-black transition-colors">
            Confirmar
          </Button>
        </div>
      </div>
    )
  }
}

export default StickyBar
