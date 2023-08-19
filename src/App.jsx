import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import All from './All'
import Navbar from './components/Navbar'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState("Form1")

  return (
    <>
      <div className='m-6'>
        <div>
          <h1 className='font-bold text-3xl sm:text-4xl text-blue-800 shadow-sm p-4 font-catamaran'>Sports<span className='text-slate-400 '>Schedule</span><span className='sm:text-2xl text-xl text-slate-400'>.com</span></h1>

        </div>
        <div className='flex mt-10'>

          <div className='mr-10'>
            <h1 className='text-slate-400 font-bold ,ml-2 sm:ml-4 md:text-2xl font-bebas'>Categories</h1>
            <div className='mt-6 flex flex-col'>
              <button className='bg-white mt-3 font-bold hover:bg-blue-700 hover:text-white p-3 sm:px-10 rounded-full shadow-md shadow-blue-200 font-catamaran'>Football</button>
              <button className='bg-white mt-3 font-bold hover:bg-blue-700 hover:text-white p-3 sm:px-10 rounded-full shadow-md shadow-blue-200 font-catamaran'>Cricket</button>
              <button className='bg-white mt-3 font-bold hover:bg-blue-700 hover:text-white p-3 sm:px-10 rounded-full shadow-md shadow-blue-200 font-catamaran'>Basketball</button>
              <button className='bg-white mt-3 font-bold hover:bg-blue-700 hover:text-white p-3 sm:px-10 rounded-full shadow-md shadow-blue-200 font-catamaran'>Hockey</button>
              <button className='bg-white mt-3 font-bold hover:bg-blue-700 hover:text-white p-3 sm:px-10 rounded-full shadow-md shadow-blue-200 font-catamaran'>Tennis</button>
              <button className='bg-white mt-3 font-bold hover:bg-blue-700 hover:text-white p-3 sm:px-10 rounded-full shadow-md shadow-blue-200 font-catamaran'>Badminton</button>
              





            </div>
          </div>
          <div className=' mx-2  sm:mx-[20px] md:mx-[100px]'>
            <h1 className='text-blue-700 font-bold text-3xl md:text-6xl font-bebas'>Football</h1>
            <h1 className='text-slate-400 font-bold  text-2xl md:text-3xl mt-2 font-bebas'>Schedule</h1>
            <Card />
          </div>
        </div>
      </div>



    </>
  )
}

export default App
