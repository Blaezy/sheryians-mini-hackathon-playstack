import React from "react";
import GameColumn from "../components/GameColumn";
import { Gamepad2 } from "lucide-react";
import { useSelector } from "react-redux";

const PlayingPage = () => {
  const games = useSelector((state) => state.game.games);
  const playingFilteredGames = games.filter((g) => g.status === "playing");

  return (
    <div className='bg-neutral-900 rounded-xl p-5'>
      <div className='flex items-center gap-2 mb-4'>
        <Gamepad2 className='text-indigo-400' size={20} />
        <h2 className='text-lg font-bold'>
          Playing{" "}
          <span className='text-gray-500 text-sm font-normal'>
            ({playingFilteredGames.length} {playingFilteredGames.length === 1 ? "game" : "games"})
          </span>
        </h2>
      </div>
      <GameColumn filteredGames={playingFilteredGames} />
    </div>
  );
};

export default PlayingPage;
