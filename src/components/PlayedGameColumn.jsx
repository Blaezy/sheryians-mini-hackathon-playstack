import React from "react";
import PlayedGameCard from "./PlayedGameCard";

const PlayedGameColumn = ({ filteredGames, onEdit }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {filteredGames.map((game) => (
        <PlayedGameCard key={game.id} game={game} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default PlayedGameColumn;