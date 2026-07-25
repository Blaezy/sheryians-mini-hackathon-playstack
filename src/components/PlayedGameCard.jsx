import React from "react";
import { Star } from "lucide-react";

const PlayedGameCard = ({ game }) => {
  const { name, image, year, rating, hours, tags } = game;

  return (
    <div
      title={name}
      className="flex flex-col sm:flex-row bg-neutral-900 rounded-2xl overflow-hidden w-full sm:w-96 p-4 gap-4 group"
    >
      <div className="w-full sm:w-28 h-40 rounded-xl overflow-hidden shrink-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-white text-lg font-semibold leading-snug wrap-break-word">
          {name}
        </h3>
        <p className="text-gray-400 text-xs mt-1">{year}</p>

        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < rating ? "fill-indigo-400 text-indigo-400" : "text-neutral-600"}
            />
          ))}
        </div>

        {hours && (
          <p className="text-gray-400 text-xs mt-1">{hours} hours</p>
        )}

        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-indigo-400/20 text-indigo-300 px-2 py-1 rounded-full"
              >
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