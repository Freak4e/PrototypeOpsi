'use client';

import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';

const CO2Chart = dynamic(() => import('./CO2Chart'), { ssr: false });
const SloveniaMap = dynamic(() => import('./SloveniaMap'), { ssr: false });

function Navbar() {
  const [active, setActive] = useState('byFuel');
  return (
    <nav className="flex gap-8 justify-center mb-6 font-semibold text-green-800">
      <button
        onClick={() => setActive('byFuel')}
        className={`hover:text-green-600 ${active === 'byFuel' ? 'underline' : ''}`}
      >
        By Fuel
      </button>
      <button
        onClick={() => setActive('perCapita')}
        className={`hover:text-green-600 ${active === 'perCapita' ? 'underline' : ''}`}
      >
        Per Capita
      </button>
      <button
        onClick={() => setActive('byType')}
        className={`hover:text-green-600 ${active === 'byType' ? 'underline' : ''}`}
      >
        Type of Fuel
      </button>
      <button
        onClick={() => setActive('historical')}
        className={`hover:text-green-600 ${active === 'historical' ? 'underline' : ''}`}
      >
        Historical
      </button>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 font-sans bg-green-50 text-green-900 flex flex-col">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold mb-2">Slovenia CO₂ Emissions Dashboard</h1>
        <p className="text-lg text-green-700">Explore emission data across regions and years</p>
      </header>

      <Navbar />

      <main className="flex flex-col items-center gap-12 max-w-5xl mx-auto flex-grow w-full">
        <section className="w-full bg-white rounded-lg p-6 shadow-lg">
          <CO2Chart />
        </section>

        <section className="w-full h-[500px] bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">Regional Emission Distribution</h2>
          <SloveniaMap />
        </section>
      </main>

      <footer className="mt-10 flex gap-6 flex-wrap items-center justify-center text-sm text-green-700">
        <span>© 2025 Slovenia CO₂ Project</span>
        <a
          href="https://github.com"
          className="hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
