import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppViewer from './components/AppViewer'

function App() {
  const [count, setCount] = useState(0)

  return (
<>
 <h1>Meu primeiro WebApp</h1>
 <AppViewer />
</>
  )
}

export default App
