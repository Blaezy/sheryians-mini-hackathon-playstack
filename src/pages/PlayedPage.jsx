import { CheckCircle2, Trash2 } from "lucide-react";
import React from "react";
import { useOutletContext } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeFilteredGames } from "../redux/features/gameSlice";
import PlayedGameColumn from "../components/PlayedGameColumn";

const PlayedPage = () => {
  const dispatch = useDispatch();
  const { openEdit } = useOutletContext();
  const games = useSelector((state) => state.game.games);
  const playedFilteredGames = games.filter((g) => g.status === "played");

  const handleDeleteAll = () => {
    const confirmed = window.confirm(`Remove all games from this list? This can't be undone.`);
    if (!confirmed) return;

    dispatch(removeFilteredGames("played"));
  };

  return (
    <div className='bg-neutral-900 rounded-xl p-5'>
      <div className='flex items-center justify-between gap-2 mb-4'>
        <div className='flex items-center justify-between gap-2 mb-4'>
          <CheckCircle2 className='text-indigo-400' size={20} />
          <h2 className='text-lg font-bold'>
            Played{" "}
            <span className='text-gray-500 text-sm font-normal'>
              ({playedFilteredGames.length} {playedFilteredGames.length === 1 ? "game" : "games"})
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
      <PlayedGameColumn filteredGames={playedFilteredGames} onEdit={openEdit} />
    </div>
  );
};

export default PlayedPage;
