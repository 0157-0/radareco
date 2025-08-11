"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/header";
import MapFilters from "@/components/map-filters";
import { Loader2 } from "lucide-react";
import {
  getQueimadasAgrupadasPorBioma,
  getQueimadasAgrupadasPorEstado,
  getQueimadasPorEstado,
} from "@/services/gfw-service";
import { EstadoFoco } from "@/components/map-component";
import { formatDate, set } from "date-fns";
import BiomasComponent, { BiomaFoco } from "@/components/biomas-components";

const MapComponent = dynamic(() => import("@/components/map-component"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96">
      <Loader2 className="h-8 w-8 animate-spin text-green-600" />
      <span className="ml-2 text-green-600">Carregando mapa...</span>
    </div>
  ),
});

export interface FireAlert {
  latitude: number;
  longitude: number;
  confidence: string;
  acq_date: string;
  acq_time: string;
  bright_ti4: number;
  bright_ti5: number;
}

export default function MapPage() {
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    days: 365,
    state: "all",
  });
  const [estadoFocos, setEstadoFocos] = useState<EstadoFoco[]>([]);
  const [biomaFocos, setBiomaFocos] = useState<BiomaFoco[]>([]);

  useEffect(() => {
    const hoje = new Date();
    const dias = filters.days;
    const dataInicio = new Date();
    dataInicio.setDate(hoje.getDate() - dias);
    setLoading(true);
    const dataInicioFormatada = formatDate(dataInicio, "yyyy-MM-dd");
    const dataFimFormatada = formatDate(hoje, "yyyy-MM-dd");

    async function fetchData() {
      const dadosPorEstado = await getQueimadasAgrupadasPorEstado(
        dataInicioFormatada,
        dataFimFormatada
      );
      const estadoFocosMapped: EstadoFoco[] = dadosPorEstado.map(
        (item: any) => ({
          nome: item.nome ?? item.estado ?? "",
          quantidade: item.quantidade ?? item.qtd ?? 0,
        })
      );
      const biomas = await getQueimadasAgrupadasPorBioma(
        dataInicioFormatada,
        dataFimFormatada
      );

      const biomasFocosMapped: BiomaFoco[] = biomas.map((item: any) => ({
        nome: item.nome ?? item.estado ?? "",
        quantidade: item.quantidade ?? item.qtd ?? 0,
      }));

      setBiomaFocos(biomasFocosMapped);
      setEstadoFocos(estadoFocosMapped);
      setLoading(false);
    }

    fetchData();
  }, [filters.days]);

  const handleFiltersChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Mapa de Queimadas
          </h1>
          <p className="text-gray-600">
            Visualize alertas de queimadas em tempo quase real por estados do
            Brasil
            <br />* alertas de fogo detectados por satélite, não o incêndio
            confirmado!
          </p>
        </div>

        <MapFilters filters={filters} onFiltersChange={handleFiltersChange} />

        <div className="bg-white rounded-lg shadow-lg overflow-hidden relative">
          {loading && (
            <div className="loading-overlay">
              <span>Carregando...</span>
            </div>
          )}
          <MapComponent estadoFocos={estadoFocos} />
        </div>

        <br />

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center h-96">
              <Loader2 className="h-8 w-8 animate-spin text-green-600" />
              <span className="ml-2 text-green-600">Carregando dados...</span>
            </div>
          ) : (
            <BiomasComponent biomaFocos={biomaFocos} />
          )}
        </div>
      </main>
    </div>
  );
}
