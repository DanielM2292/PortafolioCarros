import { useState } from 'react'
import PaginaPrincipal from './PaginaPrincipal'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PaginaPrincipal />
  )
}

export default App
