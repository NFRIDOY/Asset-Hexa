import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Shared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className='text-8xl text-center text-primary'>This is Asset Hexa</h1>

        {/* added Footer section for testing */}
        <Footer/>
      </div>
    </>
  )
}

export default App
