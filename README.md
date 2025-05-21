# 🇸🇮 Slovenia CO₂ Emissions Dashboard (Prototype)

This repository is a **prototype** for the CO₂ Emissions Dashboard, part of the OŠPI project. It visualizes CO₂ emissions across Slovenia using a dynamic chart and interactive map.

⚠️ **Note:** This is an early-stage prototype and does not represent the final product. The UI, logic, and features will evolve significantly in the final version.

---

## 🏁 Getting Started

To run the project locally:

```bash
# Clone the repo
git clone https://github.com/freak4e/prototypeopsi.git
cd prototypeopsi

# Navigate to the app directory
cd co2-emissions

# Install dependencies
npm install

# Run the development server
npm run dev
```

Visit `http://localhost:3000` to view the app.

---

## 📁 Directory Structure

The main components are located in:

```
/co2-emissions/src/app/
```

---

## 🧩 Components

### 1. `CO2Chart.tsx`
- Renders a responsive **line chart** of Slovenia’s CO₂ emissions over time.
- Built with [Chart.js](https://www.chartjs.org/) via `react-chartjs-2`.
- Includes basic animations and tooltip interactions.

### 2. `SloveniaMap.tsx`
- Displays an **interactive map** of Slovenia using `react-leaflet`.
- Uses GeoJSON to render regional boundaries.
- Placeholder styling for now; interactive layers and dynamic data to be added in future versions.

### 3. `Navbar.tsx`
- A non-functional **navbar UI prototype**.
- Includes planned tabs for data views like:
  - By Fuel Type
  - Per Capita
  - Regional Comparison
  - Emission Sources
  - Sector-wise Distribution

These sections are currently static and will be wired to filters and data views in the full version.

---

## 📦 Dependencies

Install these via `npm install`:

```bash
npm install react-chartjs-2 chart.js react-leaflet leaflet next@latest
```

> Make sure Leaflet CSS is correctly loaded. This is already handled in the project setup.

---

## 🚧 What's Next

- Replace mock data with real emission datasets.
- Add filters and interactive dashboard panels.
- Polish UI with Tailwind transitions and better layouts.
- Implement proper state management and responsiveness.
- Deploy final version with API support and CMS (if needed).

---

## 👥 Credits

Made by Konstantin, Anastasija & Matej, 2025.
