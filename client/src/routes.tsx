import { createBrowserRouter } from 'react-router-dom'
import Wellcome from './pages/Wellcome'

export const router = createBrowserRouter([
  { path: '/', element: <Wellcome /> },
  {
    path: '*',
    element: <div>Página não encontrada (404)</div>,
  },
])
