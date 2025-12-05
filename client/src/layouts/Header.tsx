import LinksBar from '@/components/layout/LinksBar'
import { Scissors } from 'lucide-react'

const Header = () => {
  const links = [
    { label: 'Home', href: '/home' },
    { label: 'My Books', href: '/book' },
    { label: 'Live Book', href: '/livebook' },
    { label: 'About', href: '/about' },
  ]
  return (
    <header className="flex h-full w-full items-center justify-between border-b px-4 py-6">
      <div className="flex items-center gap-4 p-0">
        <h1 className="text-3xl font-bold">Booking System</h1>
        <Scissors strokeWidth={1.5} size={30} />
      </div>
      <LinksBar links={links} />
    </header>
  )
}

export default Header
