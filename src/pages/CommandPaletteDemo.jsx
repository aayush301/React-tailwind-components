import React, { useState } from "react";
import CommandPalette from "../components/CommandPalette";

const CommandPaletteDemo = () => {
  const commands = Array(20)
    .fill(0)
    .map((_, i) => ({ text: `Element ${i}` }));
  const [open, setOpen] = useState(false);

  return (
    <div className="m-8">
      <h1 className="text-center text-lg">Command Palette</h1>
      <button
        className="px-3 py-1.5 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 transition mt-8 focus:border-blue-500 border-2 border-transparent outline-none"
        onClick={() => setOpen(true)}
      >
        Open Command Palette
      </button>
      <br />
      or use ctrl+shift+k
      <CommandPalette commands={commands} open={open} onRequestClose={() => setOpen(false)} closeOnSelect />
    </div>
  );
};

export default CommandPaletteDemo;
