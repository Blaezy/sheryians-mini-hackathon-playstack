import React from "react";
import { Clock } from "lucide-react";
import GameColumn from "../components/GameColumn";

const WantPage = () => {
  return (
    <div className='bg-neutral-900 rounded-xl p-5'>
      <div className='flex items-center gap-2 mb-4'>
        <Clock className='text-indigo-400' size={20} />
        <h2 className='text-lg font-bold'>Want to Play</h2>
      </div>
      <GameColumn status='want' />
    </div>
  );
};

export default WantPage;
