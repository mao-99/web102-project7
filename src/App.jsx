import { useState } from 'react'
import SideNav from './components/sidenav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="body">
        <SideNav />
      </div>

    </>
  )
}

export default App
