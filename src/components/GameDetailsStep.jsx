import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Star, AlertCircle } from "lucide-react";
import { addGame } from "../redux/features/gameSlice";

const STATUS_TABS = [
  { key: "want", label: "Want to Play" },
  { key: "playing", label: "Playing" },
  { key: "played", label: "Played" },
];

const TAG_OPTIONS = [
  "Completed",
  "100% Completed",
  "Replaying",
  "Co-op",
  "Solo",
  "Backlog Clear",
  "Speedrun",
  "Dropped",
  "On Hold",
  "Underrated Gem",
];

const GameDetailsStep = ({ game, onClose, onBack }) => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.game.games);
  const [status, setStatus] = useState("want");
  const [rating, setRating] = useState(0);
  const [hours, setHours] = useState("");
  const [tags, setTags] = useState([]);

  const toggleTag = (tag) => {
    setTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));
  };

  const alreadyPresent = (g) => games.find((item) => item.id === g.id);

  const handleAdd = () => {
    if (alreadyPresent(game)) return;
    dispatch(
      addGame({
        id: game.id,
        name: game.name,
        image: game.image,
        year: game.year,
        status,
        rating: status === "played" ? rating : null,
        hours: status === "played" ? Number(hours) || null : null,
        tags: status === "played" ? tags : [],
        notes: "",
      }),
    );
    onClose();
  };

  return (
    <div>
      <button onClick={onBack} className='text-gray-400 text-sm mb-4 hover:text-white'>
        ← Back to search
      </button>

      <div className='flex items-center gap-4 bg-neutral-800 rounded-xl p-4 mb-6'>
        <img src={game.image} alt={game.name} className='w-16 h-16 rounded-lg object-cover' />
        <div>
          <h3 className='text-white font-semibold'>{game.name}</h3>
          <p className='text-gray-400 text-sm'>{game.year}</p>
        </div>
      </div>

      {alreadyPresent(game) && (
        <div className='flex items-start gap-3 rounded-xl border border-indigo-400/30 bg-indigo-400/10 px-4 py-3 mb-6'>
          <div className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-400/20'>
            <AlertCircle className='h-4 w-4 text-indigo-400' strokeWidth={2.5} />
          </div>
          <div>
            <p className='text-sm font-semibold text-white'>Already in your library</p>
            <p className='text-xs text-gray-400 mt-0.5'>This game is already saved to your profile.</p>
          </div>
        </div>
      )}

      <div className='flex gap-2 mb-6'>
        {STATUS_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setStatus(tab.key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
              status === tab.key ? "bg-indigo-400 text-black" : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {status === "played" && (
        <div className='flex flex-col gap-5 mb-6'>
          <div>
            <p className='text-white text-sm mb-2'>Rating</p>
            <div className='flex gap-1'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  onClick={() => setRating(i + 1)}
                  className={`cursor-pointer ${i < rating ? "fill-indigo-400 text-indigo-400" : "text-neutral-600"}`}
                />
              ))}
            </div>
          </div>

          <div>
            <p className='text-white text-sm mb-2'>Hours played</p>
            <input
              type='number'
              min='0'
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder='e.g. 12'
              className='w-full bg-neutral-800 text-white placeholder-gray-500 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400'
            />
          </div>

          <div>
            <p className='text-white text-sm mb-2'>Tags</p>
            <div className='flex flex-wrap gap-2'>
              {TAG_OPTIONS.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                    tags.includes(tag)
                      ? "bg-indigo-400 text-black"
                      : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={handleAdd}
        disabled={alreadyPresent(game)}
        className='w-full bg-indigo-400 text-black font-semibold py-3 rounded-lg hover:bg-indigo-300 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed'
      >
        Add Game
      </button>
    </div>
  );
};

export default GameDetailsStep;
