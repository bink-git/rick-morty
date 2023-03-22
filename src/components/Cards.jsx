import React from 'react';
import Card from '../pages/card/Card';

const Cards = ({ chars }) => {
  return (
    <div className="cards">
      {chars
        .sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }

          return 0;
        })
        .map((char) => (
          <Card key={char.id} item={char} />
        ))}
    </div>
  );
};

export default Cards;
