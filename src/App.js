import React, { useState, useEffect } from 'react';
import HeroList from './HeroList';
import HeroDetails from './HeroDetails';
import './App.css';

function App() {
  const [heroes, setHeroes] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);

  useEffect(() => {
    fetch('https://api.opendota.com/api/heroStats')
      .then(response => response.json())
      .then(data => setHeroes(data))
      .catch(error => console.error('Error fetching hero stats:', error));
  }, []);

  const handleSelectHero = hero => {
    setSelectedHero(hero);
  };

  return (
    <div className="App">
      <h1>OpenDota Heroes</h1>
      <div className="content">
        <HeroList heroes={heroes} onSelectHero={handleSelectHero} />
        {selectedHero && <HeroDetails hero={selectedHero} />}
      </div>
    </div>
  );
}

export default App;


