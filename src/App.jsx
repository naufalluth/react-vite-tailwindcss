import './App.css'
import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  function handleDecrease() {
    if (count === 0) {
      setCount((count) => count)
    }
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }

  return (
    <div className="" >
      <h1 className='text-emerald-500 text-5xl text-center'>This is React + tailwindcss Boilerplate</h1>
      <div className='flex gap-4 justify-center my-9'>
        <button onClick={() => { setCount((count) => count + 1) }} className='bg-blue-500 text-white rounded-md p-2 text-center' >Click Here to Increase</button>
        <button onClick={handleDecrease} className='bg-red-500 text-white rounded-md p-2 text-center'>Click Here to Decrease</button>
      </div>
      <p className='text-3xl text-center bg-emerald-600 w-[100px] mx-auto text-white rounded-lg'>{count}</p>
    </div >
  )
}


export default App
