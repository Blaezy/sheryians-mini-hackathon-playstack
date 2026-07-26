import React from "react";
import PlayedGameCard from "./PlayedGameCard";
import { CheckCircle2 } from "lucide-react";

const PlayedGameColumn = ({ filteredGames, onEdit }) => {
  if (filteredGames.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-12 text-center'>
        <CheckCircle2 className='text-neutral-600 mb-3' size={36} />

        <p className='text-gray-500 text-sm'>No games here yet</p>
        <p className='text-gray-600 text-xs mt-1'>Add a game to get started</p>
      </div>
    );
  }

  return (
    <div className='flex flex-wrap gap-4'>
      {filteredGames.map((game) => (
        <PlayedGameCard key={game.id} game={game} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default PlayedGameColumn;
