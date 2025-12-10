import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import ModalDate from '@/layouts/ModalDate'
import ModalTime from '@/layouts/ModalTime'
import { Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

const MainLayout = () => {
  return (
    <div className="container flex min-h-screen flex-col">
      <Header />
      <main className="h-full w-full flex-1">
        <Outlet />
      </main>
      <Footer />
      <ModalDate />
      <ModalTime />
      <Toaster position="top-right" richColors closeButton />
    </div>
  )
}

export default MainLayout
