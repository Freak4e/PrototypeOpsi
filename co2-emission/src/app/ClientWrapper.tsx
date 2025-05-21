'use client';

import dynamic from 'next/dynamic';
import CO2Chart from './CO2Chart';

const MapWithNoSSR = dynamic(() => import('./SloveniaMap'), { ssr: false });

export default function ClientWrapper() {
  return (
    <main className="flex flex-col gap-10 row-start-2 w-full max-w-4xl items-center">
      <h1 className="text-3xl font-bold text-center">Slovenia CO₂ Emissions Dashboard</h1>
      <CO2Chart />

      <div className="w-full h-[500px] mt-10">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Regional Emission Distribution
        </h2>
        <MapWithNoSSR />
      </div>
    </main>
  );
}
