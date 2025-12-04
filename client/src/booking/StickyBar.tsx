import { Button } from '@/components/ui/button'

interface StickyBarProps {
  service: Service
}

const StickyBar = ({ service }: StickyBarProps) => {
  if (service) {
    return (
      <div className="border-primary fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2 items-center justify-between gap-4 rounded-lg border bg-white p-4 shadow-lg">
        <div>
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </div>
        <div className="flex items-center gap-4 border-l border-gray-200 pl-4">
          <span className="text-xl font-black whitespace-nowrap text-gray-900">
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
