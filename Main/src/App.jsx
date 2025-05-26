import { useState } from 'react'

function App() {
  const [color, setColor] = useState("Black")

  return (
    <div className="w-full h-screen " style={{ backgroundColor: color }}>
      <div className='w-full h-screen flex align-bottom'>
      <div className='flex justify-center align-bottom gap-5'>
      <button className='bg-amber-200 text-blue-800 p-2 rounded-2xl w-25 h-10' onClick={() => setColor("Red")}>Red</button>
      <button className='bg-amber-200 text-blue-800 p-2 rounded-2xl w-25 h-10' onClick={() => setColor("Green")}>Green</button>
      <button className='bg-amber-200 text-blue-800 p-2 rounded-2xl w-25 h-10' onClick={() => setColor("Blue")}>Blue</button>
      <button className='bg-amber-200 text-blue-800 p-2 rounded-2xl w-25 h-10' onClick={() => setColor("Yellow")}>Yellow</button>
      <button className='bg-amber-200 text-blue-800 p-2 rounded-2xl w-25 h-10' onClick={() => setColor("Gray")}>Gray</button>
      </div>
      </div>
    </div>
  )
}

export default App
