import React from 'react';

function HeroDetails({ hero }) {
  return (
    <div className="hero-details">
      <h2>{hero.localized_name}</h2>
      <p>Primary Attribute: {hero.primary_attr}</p>
      <p>Roles: {hero.roles.join(', ')}</p>
    </div>
  );
}

export default HeroDetails;


