import { createBrowserRouter } from 'react-router-dom'
import Wellcome from './pages/Wellcome'
import Home from './pages/Home'
import ServicesLayout from './layouts/ServicesLayout'

export const router = createBrowserRouter([
  { path: '/', element: <Wellcome /> },
  {
    path: '/home',
    element: <Home />,
    children: [{ path: '/home', element: <ServicesLayout /> }],
  },
  {
    path: '*',
    element: <div>Página não encontrada (404)</div>,
  },
])
