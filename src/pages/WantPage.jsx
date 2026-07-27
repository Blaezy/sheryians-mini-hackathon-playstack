import React from "react";
import { useOutletContext } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { removeFilteredGames } from "../redux/features/gameSlice";
import { Clock, Trash2 } from "lucide-react";
import GameColumn from "../components/GameColumn";

const WantPage = () => {
  const dispatch = useDispatch();
  const { openEdit } = useOutletContext();
  const games = useSelector((state) => state.game.games);
  const wantFilteredGames = games.filter((g) => g.status === "want");

  const handleDeleteAll = () => {
    const confirmed = window.confirm(`Remove all games from this list? This can't be undone.`);
    if (!confirmed) return;

    dispatch(removeFilteredGames("want"));
  };

  return (
    <div className='bg-neutral-900 rounded-xl p-5'>
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4'>
        <div className='flex items-center gap-2'>
          <Clock className='text-indigo-400' size={20} />
          <h2 className='text-lg font-bold'>
            Want to Play{" "}
            <span className='text-gray-500 text-sm font-normal'>
              ({wantFilteredGames.length} {wantFilteredGames.length === 1 ? "game" : "games"})
            </span>
          </h2>
        </div>

        <button
          onClick={handleDeleteAll}
          className='self-start sm:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-400 bg-red-400/10 hover:bg-red-400/20 transition-colors cursor-pointer'
        >
          <Trash2 size={14} />
          Delete all
        </button>
      </div>
      <GameColumn filteredGames={wantFilteredGames} onEdit={openEdit} status='want' />
    </div>
  );
};

export default WantPage;
