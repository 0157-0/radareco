"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Filter } from "lucide-react";

interface MapFiltersProps {
  filters: {
    days: number;
    state: string;
  };
  onFiltersChange: (filters: { days: number; state: string }) => void;
}

export default function MapFilters({
  filters,
  onFiltersChange,
}: MapFiltersProps) {
  const brazilianStates = [
    { value: "all", label: "Todos os Estados" },
    { value: "AC", label: "Acre" },
    { value: "AL", label: "Alagoas" },
    { value: "AP", label: "Amapá" },
    { value: "AM", label: "Amazonas" },
    { value: "BA", label: "Bahia" },
    { value: "CE", label: "Ceará" },
    { value: "DF", label: "Distrito Federal" },
    { value: "ES", label: "Espírito Santo" },
    { value: "GO", label: "Goiás" },
    { value: "MA", label: "Maranhão" },
    { value: "MT", label: "Mato Grosso" },
    { value: "MS", label: "Mato Grosso do Sul" },
    { value: "MG", label: "Minas Gerais" },
    { value: "PA", label: "Pará" },
    { value: "PB", label: "Paraíba" },
    { value: "PR", label: "Paraná" },
    { value: "PE", label: "Pernambuco" },
    { value: "PI", label: "Piauí" },
    { value: "RJ", label: "Rio de Janeiro" },
    { value: "RN", label: "Rio Grande do Norte" },
    { value: "RS", label: "Rio Grande do Sul" },
    { value: "RO", label: "Rondônia" },
    { value: "RR", label: "Roraima" },
    { value: "SC", label: "Santa Catarina" },
    { value: "SP", label: "São Paulo" },
    { value: "SE", label: "Sergipe" },
    { value: "TO", label: "Tocantins" },
  ];

  const dayOptions = [
    { value: 7, label: "Últimos 7 dias" },
    { value: 15, label: "Últimos 15 dias" },
    { value: 30, label: "Últimos 30 dias" },
    { value: 180, label: "Últimos 6 meses" },
    { value: 365, label: "Últimos 12 meses" },
  ];

  const handleDaysChange = (value: string) => {
    onFiltersChange({ ...filters, days: parseInt(value) });
  };

  const handleStateChange = (value: string) => {
    onFiltersChange({ ...filters, state: value });
  };

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex flex-col sm:flex-row gap-4 flex-1">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-500" />
              <Select
                value={filters.days.toString()}
                onValueChange={handleDaysChange}
              >
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="z-[999]">
                  {dayOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value.toString()}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-gray-500" />
              <Select value={filters.state} onValueChange={handleStateChange}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="z-[999]">
                  {brazilianStates.map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
