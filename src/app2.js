//temporary, ignore lol//


import React, { useState, useEffect } from "react";
import HeroList from "./components/HeroList";
import HeroDetails from "./components/HeroDetails";
import SearchBar from "./components/SearchBar";
import { fetchGameStats } from "./api/openDotaAPI";

const App = () => {
  const [gameStats, setGameStats] = useState([]);
  const [selectedHero, setSelectedHero] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // fetch game statistics from opendota API
    const fetchStats = async () => {
      try {
        const stats = await fetchGameStats();
        setGameStats(stats);
      } catch (error) {
        // handle error
        console.error("Error fetching game statistics:", error);
      }
    };
    fetchStats();
  }, []);

  const handleHeroSelect = (hero) => {
    // set selected hero to display its details
    setSelectedHero(hero);
  };

  const handleSearch = (query) => {
    // update search query state
    setSearchQuery(query);
  };

  // filter the list of heroes based on the search query
  const filteredHeroes = gameStats.filter((hero) =>
    hero.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Game Statistics</h1>
      <SearchBar onSearch={handleSearch} />
      <HeroList heroes={filteredHeroes} onSelectHero={handleHeroSelect} />
      {selectedHero && <HeroDetails hero={selectedHero} />}
    </div>
  );
};

export default App;