import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Wearther from './Weather.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Wearther />
  </StrictMode>,
)
