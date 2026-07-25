import React from "react";
import { Clock, Gamepad2, CheckCircle2 } from "lucide-react";
import GameColumn from "../components/GameColumn";

const MainPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-neutral-900 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="text-indigo-400" size={20} />
          <h2 className="text-lg font-bold">Want to Play</h2>
        </div>
        <GameColumn status="want" />
      </div>

      <div className="bg-neutral-900 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Gamepad2 className="text-indigo-400" size={20} />
          <h2 className="text-lg font-bold">Playing</h2>
        </div>
        <GameColumn status="playing" />
      </div>

      <div className="bg-neutral-900 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <CheckCircle2 className="text-indigo-400" size={20} />
          <h2 className="text-lg font-bold">Played</h2>
        </div>
        <GameColumn status="played" />
      </div>
    </div>
  );
};

export default MainPage;