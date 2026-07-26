import React from "react";
import GameCard from "./GameCard";

const GameColumn = ({ filteredGames, cardSize = "md" ,onEdit}) => {
  return (
    <div className='flex flex-wrap gap-4'>
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} size={cardSize} onEdit={onEdit}/>
      ))}
    </div>
  );
};

export default GameColumn;
