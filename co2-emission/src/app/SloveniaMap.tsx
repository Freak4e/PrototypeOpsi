'use client';

import { MapContainer, TileLayer, GeoJSON, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import React from 'react';
import sloveniaRegions from '../data/slovenia-regions.json';

function getColor(emission: number) {
  return emission > 4500
    ? '#005a32'
    : emission > 3500
    ? '#238b45'
    : emission > 2500
    ? '#41ab5d'
    : '#74c476';
}

function style(feature: any) {
  return {
    fillColor: getColor(feature.properties.emission),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
  };
}

function onEachFeature(feature: any, layer: any) {
  const name = feature.properties.name;
  const emission = feature.properties.emission;
  layer.bindTooltip(
    `<strong>${name}</strong><br/>${emission} kt CO₂`,
    { sticky: true }
  );
}

// Component to set map bounds dynamically
function SetMapBounds({ geojsonData }: { geojsonData: any }) {
  const map = useMap();

  React.useEffect(() => {
    const geojsonLayer = L.geoJSON(geojsonData);
    map.fitBounds(geojsonLayer.getBounds(), { padding: [20, 20] });
  }, [map, geojsonData]);

  return null;
}

export default function SloveniaMap() {
  return (
    <MapContainer
      style={{ height: '100%', width: '100%' }}
      center={[46.1, 14.8]}
      zoom={8}
      scrollWheelZoom={false}
      minZoom={7}
      maxZoom={12}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON data={sloveniaRegions as any} style={style} onEachFeature={onEachFeature} />
      <SetMapBounds geojsonData={sloveniaRegions} />
    </MapContainer>
  );
}
