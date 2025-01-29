import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { CounterApp } from './01_useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { CounterWithCustomHook } from './01_useState/CounterWithCustomHook'
import { SimpleForm } from './02_useEffect/SimpleForm'

createRoot(document.getElementById('root')).render(
//   <StrictMode>
    <SimpleForm/>
//   </StrictMode>,
)
