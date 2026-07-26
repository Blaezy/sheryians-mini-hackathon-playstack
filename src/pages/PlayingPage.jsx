import React from "react";
import { useOutletContext } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeFilteredGames } from "../redux/features/gameSlice";
import { Gamepad2, Trash2 } from "lucide-react";
import GameColumn from "../components/GameColumn";

const PlayingPage = () => {
  const dispatch = useDispatch();
  const { openEdit } = useOutletContext();
  const games = useSelector((state) => state.game.games);
  const playingFilteredGames = games.filter((g) => g.status === "playing");

  const handleDeleteAll = () => {
    const confirmed = window.confirm(`Remove all games from this list? This can't be undone.`);
    if (!confirmed) return;

    dispatch(removeFilteredGames("playing"));
  };

  return (
    <div className='bg-neutral-900 rounded-xl p-5'>
      <div className='flex items-center justify-between gap-2 mb-4'>
        <div className='flex items-center gap-2 mb-4'>
          <Gamepad2 className='text-indigo-400' size={20} />
          <h2 className='text-lg font-bold'>
            Playing{" "}
            <span className='text-gray-500 text-sm font-normal'>
              ({playingFilteredGames.length} {playingFilteredGames.length === 1 ? "game" : "games"})
            </span>
          </h2>
        </div>
        <div>
          <button
            onClick={handleDeleteAll}
            className='flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-400 bg-red-400/10 hover:bg-red-400/20 transition-colors cursor-pointer'
          >
            <Trash2 size={14} />
            Delete all
          </button>
        </div>
      </div>
      <GameColumn filteredGames={playingFilteredGames} onEdit={openEdit} />
    </div>
  );
};

export default PlayingPage;
