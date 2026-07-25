import { CheckCircle2 } from "lucide-react";
import React from "react";
import GameColumn from "../components/GameColumn";

const PlayedPage = () => {
  return (
    <div className='bg-neutral-900 rounded-xl p-5'>
      <div className='flex items-center gap-2 mb-4'>
        <CheckCircle2 className='text-indigo-400' size={20} />
        <h2 className='text-lg font-bold'>Played</h2>
      </div>
      <GameColumn status='played' />
    </div>
  );
};

export default PlayedPage;
