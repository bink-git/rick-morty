import React from 'react';
import './Card.css';

const Card = ({ item }) => {
  return (
    <a href={`/charDetails/${item.id}`}>
      <div className="card">
        <div className="card-img">
          <img src={item.image} alt="character" />
        </div>
        <div className="text">
          <p className="card-name">{item.name}</p>
          <p className="card-species">{item.species}</p>
        </div>
      </div>
    </a>
  );
};

export default Card;
