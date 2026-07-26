import { CheckCircle2 } from "lucide-react";
import React from "react";
import { useOutletContext } from "react-router";
import { useSelector } from "react-redux";
import PlayedGameColumn from "../components/PlayedGameColumn";

const PlayedPage = () => {
  const { openEdit } = useOutletContext();
  const games = useSelector((state) => state.game.games);
  const playedFilteredGames = games.filter((g) => g.status === "played");

  return (
    <div className="bg-neutral-900 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle2 className="text-indigo-400" size={20} />
        <h2 className="text-lg font-bold">
          Played{" "}
          <span className="text-gray-500 text-sm font-normal">
            ({playedFilteredGames.length} {playedFilteredGames.length === 1 ? "game" : "games"})
          </span>
        </h2>
      </div>
      <PlayedGameColumn filteredGames={playedFilteredGames} onEdit={openEdit} />
    </div>
  );
};

export default PlayedPage;