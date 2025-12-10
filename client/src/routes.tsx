import { createBrowserRouter } from 'react-router-dom'
import OnBoarding from './pages/OnBoarding'
import Home from './pages/Home'
import ServicesLayout from './layouts/ServicesLayout'

export const router = createBrowserRouter([
  { path: '/', element: <OnBoarding /> },
  {
    path: '/home',
    element: <Home />,
    children: [{ index: true, element: <ServicesLayout /> }],
  },
  {
    path: '*',
    element: <div>Página não encontrada (404)</div>,
  },
])
