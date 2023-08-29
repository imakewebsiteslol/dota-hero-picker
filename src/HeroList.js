import React from 'react';

function HeroList({ heroes, onSelectHero }) {
  return (
    <ul className="hero-list">
      {heroes.map(hero => (
        <li key={hero.id} onClick={() => onSelectHero(hero)}>
          {hero.localized_name}
        </li>
      ))}
    </ul>
  );
}

export default HeroList;

