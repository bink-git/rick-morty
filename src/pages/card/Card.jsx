import React from 'react';
import './Card.css';

import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const { id, image, name, species } = item;

  return (
    <Link to={`/${id}`}>
      <div className="card">
        <div className="card-img">
          <img src={image} alt="character" />
        </div>
        <div className="text">
          <p className="card-name">{name}</p>
          <p className="card-species">{species}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
