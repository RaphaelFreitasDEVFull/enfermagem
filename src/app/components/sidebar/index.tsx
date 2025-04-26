"use client";

import { useState } from "react";
import MenuItem from "../menu-link";
import { Menu, X } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dataMenu = [
    { name: "Evolução", url: "/evolucoes" },
    { name: "Calculadoras", url: "/calculadoras" },
  ];

  return (
    <header className="bg-black text-white px-4 py-6 sm:p-10 sm:flex items-center justify-between">
      <div className="flex items-center   justify-between">
        <h2 className="text-white font-bold text-lg sm:text-xl">
          ENFERMAGEM <strong className="text-yellow-400">TOOLS</strong>
        </h2>
        <button
          className="sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        className={`flex-col  gap-3 mt-4 sm:mt-0 sm:flex sm:flex-row sm:items-center sm:justify-end ${
          isOpen ? "flex" : "hidden sm:flex"
        }`}
      >
        {dataMenu.map((data, index) => (
          <MenuItem key={index} name={data.name} url={data.url} />
        ))}
      </nav>
    </header>
  );
};

export default Sidebar;
