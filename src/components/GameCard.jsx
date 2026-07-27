import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { removeGame } from "../redux/features/gameSlice";

const sizeMap = {
  sm: "w-28 h-40 sm:w-32 sm:h-48",
  md: "w-32 h-48 sm:w-44 sm:h-64",
};

const GameCard = ({ game, size = "md", onEdit }) => {
  const { name, image, year, id } = game;
  const dispatch = useDispatch();

  return (
    <div title={name} className={`relative ${sizeMap[size]} rounded-xl overflow-hidden cursor-pointer group`}>
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-black to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="text-white text-sm font-semibold leading-tight truncate">{name}</h3>
        {year && <p className="text-gray-300 text-xs mt-0.5">{year}</p>}
      </div>
      <div className="absolute top-2 right-2 flex gap-1.5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(game);
          }}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-black/60 hover:bg-indigo-400 hover:text-black text-white transition-colors cursor-pointer"
        >
          <Pencil size={13} />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removeGame(id));
          }}
          className="flex h-7 w-7 items-center justify-center rounded-full bg-black/60 hover:bg-red-500 text-white transition-colors cursor-pointer"
        >
          <Trash2 size={13} />
        </button>
      </div>
    </div>
  );
};

export default GameCard;