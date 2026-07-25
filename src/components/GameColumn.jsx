import React from "react";
import GameCard from "./GameCard";

const GameColumn = ({ filteredGames, cardSize = "md" }) => {
  return (
    <div className='flex flex-wrap gap-4'>
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} size={cardSize} />
      ))}
    </div>
  );
};

export default GameColumn;
