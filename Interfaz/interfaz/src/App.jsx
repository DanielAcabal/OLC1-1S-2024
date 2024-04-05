import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { EditorT } from '../Componentes/Editor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Interfaz</h1>
      <EditorT/>
    </>
  )
}

export default App
