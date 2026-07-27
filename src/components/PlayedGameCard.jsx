import React from "react";
import { Star,Pencil,Trash2 } from "lucide-react";
import { removeGame } from "../redux/features/gameSlice";
import { useDispatch } from "react-redux";

const PlayedGameCard = ({ game ,onEdit}) => {
  const dispatch = useDispatch()
  const { name, image, year, rating, hours, tags } = game;

  return (
    <div
      title={name}
      className='relative flex flex-col sm:flex-row bg-neutral-900 rounded-2xl overflow-hidden w-full sm:w-96 p-4 gap-4 group'
    >
      <div className='w-full sm:w-28 h-40 rounded-xl overflow-hidden shrink-0'>
        <img
          src={image}
          alt={name}
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
        />
      </div>

      <div className='absolute top-2 right-2 flex gap-1.5 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 z-10'>
        <button
          onClick={() => onEdit(game)}
          className='flex h-7 w-7 items-center justify-center rounded-full bg-black/60 hover:bg-indigo-400 hover:text-black text-white transition-colors cursor-pointer'
        >
          <Pencil size={13} />
        </button>
        <button
          onClick={() => dispatch(removeGame(game.id))}
          className='flex h-7 w-7 items-center justify-center rounded-full bg-black/60 hover:bg-red-500 text-white transition-colors cursor-pointer'
        >
          <Trash2 size={13} />
        </button>
      </div>

      <div className='flex flex-col justify-start'>
        <h3 className='text-white text-lg font-semibold leading-snug wrap-break-word'>{name}</h3>
        <p className='text-gray-400 text-xs mt-1'>{year}</p>

        <div className='flex items-center gap-1 mt-2'>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className={i < rating ? "fill-indigo-400 text-indigo-400" : "text-neutral-600"} />
          ))}
        </div>

        {hours && <p className='text-gray-400 text-xs mt-1'>{hours} hours</p>}

        {tags?.length > 0 && (
          <div className='flex flex-wrap gap-2 mt-2'>
            {tags.map((tag) => (
              <span key={tag} className='text-xs bg-indigo-400/20 text-indigo-300 px-2 py-1 rounded-full'>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayedGameCard;
