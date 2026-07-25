import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setResults } from "./redux/features/searchSlice";
import { fetchGame } from "./api/gameApi";
import GameCard from "./components/gameCard";

const App = () => {
  const dispatch = useDispatch();
  const { results, query } = useSelector((store) => store.search);

  const gameLists = async () => {
    console.log("calling api");
    const data = await fetchGame("last of us");
    dispatch(setResults(data));
  };

  return (
    <div className='min-h-screen bg-black text-white'>
      <button
        className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition'
        onClick={() => {
          gameLists();
        }}
      >
        Call API
      </button>

      <div className='flex flex-wrap gap-4'>
        {results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default App;
