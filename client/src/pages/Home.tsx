import Footer from '@/layouts/Footer'
import Header from '@/layouts/Header'
import ModalDate from '@/layouts/ModalDate'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="container flex min-h-screen flex-col">
      <Header />
      <main className="h-full w-full flex-1">
        <Outlet />
      </main>
      <Footer />
      <ModalDate />
    </div>
  )
}

export default MainLayout
