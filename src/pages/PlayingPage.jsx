import React from "react";
import { useOutletContext } from "react-router";
import { useSelector } from "react-redux";
import { Gamepad2 } from "lucide-react";
import GameColumn from "../components/GameColumn";

const PlayingPage = () => {
  const { openEdit } = useOutletContext();
  const games = useSelector((state) => state.game.games);
  const playingFilteredGames = games.filter((g) => g.status === "playing");

  return (
    <div className="bg-neutral-900 rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Gamepad2 className="text-indigo-400" size={20} />
        <h2 className="text-lg font-bold">
          Playing{" "}
          <span className="text-gray-500 text-sm font-normal">
            ({playingFilteredGames.length} {playingFilteredGames.length === 1 ? "game" : "games"})
          </span>
        </h2>
      </div>
      <GameColumn filteredGames={playingFilteredGames} onEdit={openEdit} />
    </div>
  );
};

export default PlayingPage;