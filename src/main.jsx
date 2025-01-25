import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { CounterApp } from './01_useState/CounterApp'
import { CounterWithCustomHook } from './01_useState/CounterWithCustomHook'
// import { HooksApp } from './HooksApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterWithCustomHook/>
  </StrictMode>,
)
