import axios from "axios";

const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const fetchGame = async (query) => {
  try {
    const res = await axios.get("https://api.rawg.io/api/games", {
      params: {
        key: RAWG_API_KEY,
        search: query,
        page_size: 10,
      },
    });
    return res.data.results.map((game) => ({
      id: game.id,
      name: game.name,
      image: game.background_image,
      year: game.released ? new Date(game.released).getFullYear() : "TBA",
    }));
  } catch (err) {
    console.error("Error fetching games:", err);
    return [];
  }
};
