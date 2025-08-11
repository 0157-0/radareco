import { TreePine } from "lucide-react";

export interface BiomaFoco {
  nome: string;
  quantidade: number;
}

interface BiomaComponentProps {
  biomaFocos: BiomaFoco[];
}

export default function BiomasComponent({ biomaFocos }: BiomaComponentProps) {
  const maxQuantidade = Math.max(...biomaFocos.map((b) => b.quantidade));

  const biomaColors: Record<string, string> = {
    Amazônia: "bg-green-600",
    Caatinga: "bg-yellow-600",
    Cerrado: "bg-orange-600",
    "Mata Atlântica": "bg-green-800",
    Pampa: "bg-lime-600",
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <TreePine className="text-green-700" /> Focos por Bioma
      </h2>

      <p className="text-gray-600">
        Visualize alertas de queimadas em tempo quase real por biomas do Brasil
      </p>

      <div className="space-y-4">
        {biomaFocos.map((bioma) => (
          <div key={bioma.nome}>
            <div className="flex justify-between text-sm font-medium mb-1">
              <span>{bioma.nome}</span>
              <span className="text-gray-500">{bioma.quantidade}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div
                className={`${
                  biomaColors[bioma.nome] || "bg-gray-500"
                } h-4 transition-all`}
                style={{
                  width: `${(bioma.quantidade / maxQuantidade) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
