"use client";

import { useState } from 'react';
import menuItems from './menuItems';

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="flex flex-col items-center justify-start min-h-screen p-4">
      <header className="w-full max-w-4xl mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Menu</h1>
        <input
          type="text"
          placeholder="Search for an item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {filteredItems.map((item, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow flex flex-col justify-between">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-lg">{item.ingredients}</p>
          </div>
        ))}
      </div>
    </div>
  );
}