'use client';

import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const co2Data = {
  labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021'],
  datasets: [
    {
      label: 'CO₂ Emissions (kt)',
      data: [16000, 15800, 15900, 16100, 15750, 15000, 14900],
      borderColor: 'rgb(34, 197, 94)',
      backgroundColor: 'rgba(34, 197, 94, 0.4)',
      tension: 0.3,
      fill: true,
      pointRadius: 5,
      pointHoverRadius: 8,
    },
  ],
};

const co2Options: ChartOptions<'line'> = {
  responsive: true,
  animation: {
    duration: 1500,
    easing: 'easeInOutQuart',
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#166534',
        font: { weight: 'bold' as const },
      },
    },
    title: {
      display: true,
      text: 'CO₂ Emissions in Slovenia',
      color: '#166534',
      font: { size: 18, weight: 'bold' as const },
    },
    tooltip: {
      enabled: true,
      mode: 'nearest',
      intersect: false,
    },
  },
  scales: {
    x: {
      ticks: { color: '#166534', font: { weight: 'bold' as const } },
      grid: { display: false },
    },
    y: {
      ticks: { color: '#166534', font: { weight: 'bold' as const } },
      grid: { color: '#d1fae5' },
    },
  },
};

export default function CO2Chart() {
  return (
    <div style={{ height: '450px', width: '100%' }}>
      <Line data={co2Data} options={co2Options} />
    </div>
  );
}
