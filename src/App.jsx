import { useState } from 'react'
import PropsExample from './components/Education.jsx'
import { ContactComp } from './components/Contact.jsx'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactComp />

    </>
  )
}

export default App
