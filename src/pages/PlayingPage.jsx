import React from "react";
import GameColumn from "../components/GameColumn";
import { Gamepad2 } from "lucide-react";

const PlayingPage = () => {
  return (
    <div className='bg-neutral-900 rounded-xl p-5'>
      <div className='flex items-center gap-2 mb-4'>
        <Gamepad2 className='text-indigo-400' size={20} />
        <h2 className='text-lg font-bold'>Playing</h2>
      </div>
      <GameColumn status='playing' />
    </div>
  );
};

export default PlayingPage;
