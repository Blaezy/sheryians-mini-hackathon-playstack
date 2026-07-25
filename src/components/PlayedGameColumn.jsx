import React from "react";
import PlayedGameCard from "./PlayedGameCard";

const PlayedGameColumn = ({ filteredGames, cardSize = "md" }) => {
  return (
    <div className='flex flex-wrap gap-4'>
      {filteredGames.map((game) => (
        <PlayedGameCard key={game.id} game={game} size={cardSize} />
      ))}
    </div>
  );
};

export default PlayedGameColumn;
