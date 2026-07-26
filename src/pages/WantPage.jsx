import React from "react";
import { useOutletContext } from "react-router";
import { useSelector } from "react-redux";
import { Clock } from "lucide-react";
import GameColumn from "../components/GameColumn";

const WantPage = () => {
  const { openEdit } = useOutletContext();
  const games = useSelector((state) => state.game.games);
  const wantFilteredGames = games.filter((g) => g.status === "want");

  return (
    <div className="bg-neutral-900 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Clock className="text-indigo-400" size={20} />
        <h2 className="text-lg font-bold">
          Want to Play{" "}
          <span className="text-gray-500 text-sm font-normal">
            ({wantFilteredGames.length} {wantFilteredGames.length === 1 ? "game" : "games"})
          </span>
        </h2>
      </div>
      <GameColumn filteredGames={wantFilteredGames} onEdit={openEdit} />
    </div>
  );
};

export default WantPage;