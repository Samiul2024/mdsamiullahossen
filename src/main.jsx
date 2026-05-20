import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router' // adjust path if needed

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)