import React from 'react'

const GameCard = ({ game }) => {
  const { name, image, year } = game;

  return (
    <div className="relative w-44 h-64 rounded-xl overflow-hidden cursor-pointer group">
      <img
        src={image}
        alt={name}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-3">
        <h3 className="text-white text-sm font-semibold leading-tight truncate">
          {name}
        </h3>
        {year && (
          <p className="text-gray-300 text-xs mt-0.5">{year}</p>
        )}
      </div>
    </div>
  )
}

export default GameCard