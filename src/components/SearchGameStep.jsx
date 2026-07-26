import React, { useEffect } from "react";
import { Search } from "lucide-react";
import { fetchGame } from "../api/gameApi";
import useDebounce from "../hook/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { setQuery, setResults, setLoading } from "../redux/features/searchSlice";

const SearchGameStep = ({ onSelectGame }) => {
  const dispatch = useDispatch();
  const { query, results, loading } = useSelector((store) => store.search);

  const debouncedQuery = useDebounce(query, 700);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      dispatch(setResults([]));
      return;
    }
    const search = async () => {
      dispatch(setLoading(true));
      const games = await fetchGame(debouncedQuery);
      dispatch(setResults(games));
      dispatch(setLoading(false));
    };
    search();
  }, [debouncedQuery]);

  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-6">Add Game</h2>

      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
          placeholder="Search games..."
          autoFocus
          className="w-full bg-neutral-800 text-white placeholder-gray-500 rounded-lg px-4 py-3 pr-11 outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
      </div>

      <div className="mt-4">
        {!query.trim() && (
          <p className="text-gray-500 text-sm text-center py-8">Search something to find your game</p>
        )}

        {query.trim() && loading && (
          <p className="text-gray-500 text-sm text-center py-8">Searching...</p>
        )}

        {query.trim() && !loading && debouncedQuery && results.length === 0 && (
          <p className="text-gray-500 text-sm text-center py-8">No games found</p>
        )}

        {results.length > 0 && (
          <div className="flex flex-col gap-1 max-h-72 overflow-y-auto">
            {results.map((game) => (
              <button
                key={game.id}
                onClick={() => onSelectGame(game)}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-800 text-left transition-colors cursor-pointer"
              >
                <img src={game.image} alt={game.name} className="w-10 h-10 rounded object-cover" />
                <span className="text-white text-sm">{game.name}</span>
                <span className="text-gray-500 text-xs">{game.year}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchGameStep;