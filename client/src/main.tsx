import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { storeApp } from './store/index.ts'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={storeApp}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
