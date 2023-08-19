import React, { useState } from 'react';
import './App.css';

const sportsData = [
  {
    sport: 'Football',
    events: [
      { date: '2023-08-20', time: '15:00', teams: 'Team A vs Team B' },
      { date: '2023-08-20', time: '15:00', teams: 'Team A vs Team B' },

    ],
  },
  {
    sport: 'Basketball',
    events: [
      { date: '2023-08-21', time: '18:30', teams: 'Team X vs Team Y' },

    ],
  },

];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Football');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredEvents = sportsData.find((sport) => sport.sport === selectedCategory);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sports Schedule Viewer</h1>
      </header>
      <div className="Category-selector">
        {sportsData.map((sport) => (
          <button
            key={sport.sport}
            className={selectedCategory === sport.sport ? 'active' : ''}
            onClick={() => handleCategoryChange(sport.sport)}
          >
            {sport.sport}
          </button>
        ))}
      </div>
      <div className="Schedule-list">
        {filteredEvents &&
          filteredEvents.events.map((event, index) => (
            <div className="Schedule-item" key={index}>
              <p>{event.date}</p>
              <p>{event.time}</p>
              <p>{event.teams}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
