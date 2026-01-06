import { useState } from 'react'
import './App.css'
import Timezone from './Timezone'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Timezone/>
    </>
  )
}

export default App
