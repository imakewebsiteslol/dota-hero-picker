
import React, { useState, useEffect } from "react";
import axios from "axios";

const GameStats = () => {
  const [gameStats, setGameStats] = useState([]);

  useEffect(() => {
    // fetch game statistics from OpenDota API
    const fetchStats = async () => {
      try {
        const response = await axios.get("https://api.opendota.com/api/heroes");
        setGameStats(response.data);
      } catch (error) {
        console.error("Error fetching game statistics:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2>Game Statistics</h2>
      <ul>
        {gameStats.map((hero) => (
          <li key={hero.id}>{hero.localized_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameStats;
