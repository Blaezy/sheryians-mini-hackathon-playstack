import React, { useState } from "react";
import { X } from "lucide-react";
import SearchGameStep from "./SearchGameStep";
import GameDetailsStep from "./GameDetailsStep";

const AddGame = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedGame, setSelectedGame] = useState(null);

  if (!isOpen) return null;

  const handleClose = () => {
    setStep(1);
    setSelectedGame(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="bg-neutral-900 rounded-2xl w-full max-w-xl p-6 relative max-h-[85vh] overflow-y-auto">
        <button onClick={handleClose} className="absolute top-5 right-5 text-gray-400 hover:text-white">
          <X size={22} />
        </button>

        {step === 1 && (
          <SearchGameStep
            onSelectGame={(game) => {
              setSelectedGame(game);
              setStep(2);
            }}
          />
        )}
        {step === 2 && (
          <GameDetailsStep game={selectedGame} onClose={handleClose} onBack={() => setStep(1)} />
        )}
      </div>
    </div>
  );
};

export default AddGame;