import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import sportsData from './Data'

function App() {
  const [count, setCount] = useState("Form1")
  const [selectedCategory, setSelectedCategory] = useState('Football');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents = sportsData.find((sport) => sport.sport === selectedCategory);

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
              
              {sportsData.map((sport) => (
                <button key = {sport.sport} className={selectedCategory===sport.sport?'bg-blue-700 mt-3 font-bold hover:bg-blue-700 text-white p-3 sm:px-10 rounded-full shadow-md shadow-blue-200 font-catamaran': 'bg-white mt-3 font-bold hover:bg-blue-700 hover:text-white p-3 sm:px-10 rounded-full shadow-md shadow-blue-200 font-catamaran'} onClick={() => handleCategoryChange(sport.sport)}>{sport.sport}</button>
              ))}

            </div>
          </div>
          <div className=' mx-2  sm:mx-[20px] md:mx-[100px]'>
            <h1 className='text-blue-700 font-bold text-3xl md:text-6xl font-bebas'>{selectedCategory}</h1>
            <h1 className='text-slate-400 font-bold  text-2xl md:text-3xl mt-2 font-bebas'>Schedule</h1>
            {/* <Card team1="Team 1" team2="Team 2" time="7:30 PM" place="London" date="30-09-2023" /> */}
            {filteredEvents &&
          filteredEvents.events.map((event, index) => (
            <Card team1 ={event.team1} team2 = {event.team2} date ={event.date} time={event.time} place={event.place}/>
            
          ))}
          </div>
        </div>
      </div>



    </>
  )
}

export default App
