import React from "react";
import { Gamepad2, Clock } from "lucide-react";
import GameCard from "./GameCard";

const GameColumn = ({ filteredGames, cardSize = "md", onEdit, status = "playing" }) => {
  if (filteredGames.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center py-12 text-center'>
        {status === "want" ? (
          <Clock className='text-neutral-600 mb-3' size={36} />
        ) : (
          <Gamepad2 className='text-neutral-600 mb-3' size={36} />
        )}

        <p className='text-gray-500 text-sm'>No games here yet</p>
        <p className='text-gray-600 text-xs mt-1'>Add a game to get started</p>
      </div>
    );
  }

  return (
    <div className='flex flex-wrap gap-4'>
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} size={cardSize} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default GameColumn;
