import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CounterApp } from './01_useState/CounterApp'
// import { HooksApp } from './HooksApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp/>
  </StrictMode>,
)
