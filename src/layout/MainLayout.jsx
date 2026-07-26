import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import AddGame from "../components/AddGame";
import EditGameDetails from "../components/EditGameDetails";

const MainLayout = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [editingGame, setEditingGame] = useState(null);

  const openEdit = (game) => setEditingGame(game);
  const closeEdit = () => setEditingGame(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onAddClick={() => setIsAddOpen(true)} />
      <div className="px-10 py-6">
        <Outlet context={{ openEdit }} />
      </div>

      <AddGame isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />

      {editingGame && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-neutral-900 rounded-2xl w-full max-w-xl p-6 relative max-h-[85vh] overflow-y-auto">
            <button onClick={closeEdit} className="absolute top-5 right-5 text-gray-400 hover:text-white">
              ✕
            </button>
            <EditGameDetails game={editingGame} onClose={closeEdit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;