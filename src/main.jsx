import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CallbackHook } from './06_memos/CallbackHook'
// import { CounterApp } from './01_useState/CounterApp'
// import { HooksApp } from './HooksApp'
// import { CounterWithCustomHook } from './01_useState/CounterWithCustomHook'
// import { SimpleForm } from './02_useEffect/SimpleForm'
// import { FormWithCustomHook } from './02_useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03_examples/MultipleCustomHooks'
// import { FocusScreen } from './04_useRef/FocusScreen'
// import { Layout } from './05_useLayoutEffect/LAyout'
// import { Memorize } from './06_memos/Memorize'
// import { MemoHook } from './06_memos/MemoHook'


createRoot(document.getElementById('root')).render(
    //   <StrictMode>
    <CallbackHook/>
    //   </StrictMode>,
)
