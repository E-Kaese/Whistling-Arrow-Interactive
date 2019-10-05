import React from "react";
import Card from "./card";

const CardList = ({ cards, onClick, title }) => {
  return (
    <div className="text-center pt-5 mono">
      <h3 className="w-100 text-light">{title}</h3>
      <div className="row justify-content-center m-0 p-0">
        {cards.map(card => (
          <Card
            onClick={onClick}
            title={card.title}
            imageUrl={card.imageUrl}
            url={card.url}
            key={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
