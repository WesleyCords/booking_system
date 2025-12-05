import { createBrowserRouter } from 'react-router-dom'
import Wellcome from './pages/Wellcome'
import Home from './pages/Home'
import ListServices from './components/layout/ListServices'

export const router = createBrowserRouter([
  { path: '/', element: <Wellcome /> },
  {
    path: '/home',
    element: <Home />,
    children: [{ path: '/home', element: <ListServices /> }],
  },
  {
    path: '*',
    element: <div>Página não encontrada (404)</div>,
  },
])
