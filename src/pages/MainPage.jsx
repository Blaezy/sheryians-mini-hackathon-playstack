import React from "react";
import { Clock, Gamepad2, CheckCircle2 } from "lucide-react";
import GameColumn from "../components/GameColumn";
import PlayedGameColumn from "../components/PlayedGameColumn";
import { useSelector } from "react-redux";

const MainPage = () => {
  const games = useSelector((state) => state.game.games);

  const wantFilteredGames = games.filter((g) => g.status === "want");
  const playingFilteredGames = games.filter((g) => g.status === "playing");
  const playedFilteredGames = games.filter((g) => g.status === "played");

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
      <div className='bg-neutral-900 rounded-xl p-5'>
        <div className='flex items-center gap-2 mb-4'>
          <Clock className='text-indigo-400' size={20} />
          <h2 className='text-lg font-bold'>
            Want to Play{" "}
            <span className='text-gray-500 text-sm font-normal'>
              ({wantFilteredGames.length} {wantFilteredGames.length === 1 ? "game" : "games"})
            </span>
          </h2>
        </div>
        <GameColumn filteredGames={wantFilteredGames} cardSize='sm' />
      </div>

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

      <div className='bg-neutral-900 rounded-xl p-5'>
        <div className='flex items-center gap-2 mb-4'>
          <CheckCircle2 className='text-indigo-400' size={20} />
          <h2 className='text-lg font-bold'>
            Played{" "}
            <span className='text-gray-500 text-sm font-normal'>
              ({playedFilteredGames.length} {playedFilteredGames.length === 1 ? "game" : "games"})
            </span>
          </h2>
        </div>
        <PlayedGameColumn filteredGames={playedFilteredGames} />
      </div>
    </div>
  );
};

export default MainPage;
