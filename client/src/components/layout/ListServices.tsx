import CardService from '@/components/booking/CardService'
import StickyBar from '../booking/StickyBar'
import { useGetServicesQuery } from '@/store/services/api'

const ListServices = () => {
  const { data, isLoading, error } = useGetServicesQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error loading services</div>
  }

  if (!data || data.length === 0) {
    return <div>No services available</div>
  }
  return (
    <div className="mx-auto w-full px-4 py-10">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((service) => (
          <CardService key={service.id} service={service} />
        ))}
      </div>
      <StickyBar />
    </div>
  )
}

export default ListServices
