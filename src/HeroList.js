import React from 'react';

function HeroList({ heroes, onSelectHero }) {
  return (
    <ul className="hero-list">
      {heroes.map(hero => (
        <li key={hero.id} onClick={() => onSelectHero(hero)}>
          <img
            src={`https://api.opendota.com${hero.img}`}
            alt={hero.localized_name}
            className="hero-image"
          />
          {hero.localized_name}
        </li>
      ))}
    </ul>
  );
}

export default HeroList;


