import CardService from '@/components/booking/CardBooking'
import { useState } from 'react'
import StickyBar from '../booking/StickyBar'

const ListServices = () => {
  const servicesMock = [
    {
      id: 1,
      title: 'Corte Social Clássico',
      price: 45.0,
      description:
        'Tesoura apenas. Acabamento natural e elegante para o dia a dia.',
    },
    {
      id: 2,
      title: 'Corte Degradê (Fade)',
      price: 50.0,
      description:
        'O queridinho do momento. Lateral zero ou navalhada com transição perfeita.',
    },
    {
      id: 3,
      title: 'Barba Modelada',
      price: 35.0,
      description: 'Alinhamento dos fios, toalha quente e massagem facial.',
    },
    {
      id: 4,
      title: 'Barba Terapia',
      price: 55.0,
      description:
        'Tratamento completo com esfoliação, hidratação e ozonioterapia.',
    },
    {
      id: 5,
      title: 'Combo Lenhador (Corte + Barba)',
      price: 75.0,
      description: 'O pacote completo. Saia renovado pagando menos.',
    },
    {
      id: 6,
      title: 'Acabamento (Pezinho)',
      price: 20.0,
      description: 'Manutenção rápida apenas dos contornos e nuca.',
    },
    {
      id: 7,
      title: 'Sobrancelha na Navalha',
      price: 15.0,
      description: 'Limpeza e desenho da sobrancelha para destacar o olhar.',
    },
    {
      id: 8,
      title: 'Pigmentação (Barba ou Cabelo)',
      price: 40.0,
      description:
        'Disfarce de falhas e cabelos brancos com tinta semi-permanente.',
    },
    {
      id: 9,
      title: 'Platinado (Nevou)',
      price: 120.0,
      description: 'Descoloração global com matização para o branco perfeito.',
    },
    {
      id: 10,
      title: 'Dia do Noivo',
      price: 350.0,
      description:
        'Experiência premium com bebidas, corte, barba e cuidados com a pele.',
    },
  ]
  const [serviceSelected, setServiceSelected] = useState<Service | null>(null)

  const consoleId = (id: number) => {
    setServiceSelected(
      servicesMock.find((service) => service.id === id) || null,
    )
  }
  return (
    <div className="container mx-auto h-screen min-h-screen w-full px-4 pt-10">
      <div className="grid grid-cols-1 gap-4 pb-32 md:grid-cols-2 lg:grid-cols-3">
        {servicesMock.map((service) => (
          <CardService
            key={service.id}
            onBook={() => consoleId(service.id)}
            id={service.id}
            title={service.title}
            price={service.price}
            description={service.description}
          />
        ))}
      </div>
      {serviceSelected && <StickyBar service={serviceSelected} />}
    </div>
  )
}

export default ListServices
