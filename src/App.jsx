import { useState } from 'react'
import './App.css'
import Input from './components/Input'
import Square from './components/Square'

function App() {
  const [colorval,setColorval] = useState('blue')
  return (
    <>
      <Square colorval={colorval} />
      <Input colorval={colorval}
       setColorval={setColorval}/>
    </>
  )
}

export default App
