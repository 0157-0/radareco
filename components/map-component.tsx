"use client";

import { estadoCoords } from "@/utils/coords";
import { useEffect, useRef } from "react";
import L from "leaflet";

interface FireAlert {
  latitude: number;
  longitude: number;
  confidence: string;
  acq_date: string;
  acq_time: string;
  bright_ti4: number;
  bright_ti5: number;
}

export interface EstadoFoco {
  nome: string;
  quantidade: number;
}

interface MapComponentProps {
  estadoFocos: EstadoFoco[];
}

export default function MapComponent({ estadoFocos }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any>(null);

  const createEstadoIcon = (nome: string, quantidade: number) =>
    L.divIcon({
      html: `
    <div style="
      display: flex; 
      align-items: center; 
      background-color: white; 
      border: 2px solid #ef4444;
      border-radius: 8px;
      padding: 4px 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
      font-size: 12px;
      color: #b91c1c;
      font-weight: bold;
    ">
      🔥${quantidade}
    </div>
  `,
      className: "estado-fogo-label",
      iconSize: [50, 20],
      iconAnchor: [25, 10],
    });

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    if (!markersRef.current) {
      markersRef.current = L.layerGroup().addTo(mapInstanceRef.current);
    }

    markersRef.current.clearLayers();

    estadoFocos.forEach((estado) => {
      const coords = estadoCoords[estado.nome];
      if (!coords) return;

      const marker = L.marker(coords, {
        icon: createEstadoIcon(estado.nome, estado.quantidade),
      });
      markersRef.current.addLayer(marker);
    });
  }, [estadoFocos, estadoCoords, mapInstanceRef.current]);

  useEffect(() => {
    if (!mapRef.current || typeof window === "undefined") return;

    const loadLeaflet = async () => {
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
        document.head.appendChild(link);
      }

      if (!(window as any).L) {
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        document.head.appendChild(script);

        await new Promise((resolve) => {
          script.onload = resolve;
        });
      }

      const L = (window as any).L;

      if (!mapInstanceRef.current && mapRef.current) {
        mapInstanceRef.current = L.map(mapRef.current).setView(
          [-14.235, -51.9253],
          4
        );

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(mapInstanceRef.current);

        markersRef.current = L.layerGroup().addTo(mapInstanceRef.current);
      }

      updateMarkers(L);
    };

    const updateMarkers = (L: any) => {
      if (!mapInstanceRef.current || !markersRef.current) return;

      markersRef.current.clearLayers();
    };

    loadLeaflet().catch(console.error);

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-96 lg:h-[600px] rounded-lg bg-gray-100 flex items-center justify-center"
      style={{ minHeight: "400px" }}
    >
      <div className="text-gray-500">Carregando mapa...</div>
    </div>
  );
}
