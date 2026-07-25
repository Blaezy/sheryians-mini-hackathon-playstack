import React, { useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import AddGame from "../components/AddGame";

const MainLayout = () => {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onAddClick={() => setIsAddOpen(true)} />
      <div className="px-10 py-6">
        <Outlet />
      </div>

      <AddGame isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} />
    </div>
  );
};

export default MainLayout;