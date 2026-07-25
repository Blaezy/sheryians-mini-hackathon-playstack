import React from "react";
import { useSelector } from "react-redux";
import GameCard from "./GameCard";

const GameColumn = ({ status }) => {
  const games = useSelector((state) => state.game.games);
  const filteredGames = games.filter((g) => g.status === status);

  return (
    <div className='flex flex-wrap gap-4'>
      {filteredGames.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameColumn;
