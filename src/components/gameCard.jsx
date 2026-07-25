function GameCard({ game }) {
  const { name, image, year } = game;

  return (
    <div className='bg-neutral-900 rounded-lg overflow-hidden w-40 cursor-pointer hover:scale-105 transition-transform'>
      <img src={image} alt={name} className='w-full h-52 object-cover' />
      <div className='p-2'>
        <h3 className='text-white text-sm font-semibold truncate'>{name}</h3>
        <p className='text-gray-400 text-xs'>{year}</p>
      </div>
    </div>
  );
}

export default GameCard;
