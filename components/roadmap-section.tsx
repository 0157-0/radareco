import { CheckCircle, Circle, Clock } from "lucide-react";

const roadmapItems = [
  {
    title: "Alertas de Queimada",
    status: "done",
    description: "Mapeamento de ocorrências de queimadas quase tempo real.",
  },
  {
    title: "Monitoramento de Desmatamento",
    status: "in-progress",
    description: "Detecção de áreas desmatadas via imagens de satélite.",
  },
  {
    title: "Fauna Ameaçada",
    status: "next",
    description: "Registros de espécies ameaçadas e áreas de risco.",
  },
  {
    title: "Qualidade do Ar",
    status: "next",
    description: "Dados de poluição e qualidade do ar por região.",
  },
];

export default function Roadmap() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
          Roadmap do Projeto
        </h2>

        <div className="relative border-l border-green-300">
          {roadmapItems.map((item, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-white border-2 rounded-full border-green-400">
                {item.status === "done" && (
                  <CheckCircle className="text-green-500 w-6 h-6" />
                )}
                {item.status === "in-progress" && (
                  <Clock className="text-yellow-500 w-6 h-6" />
                )}
                {item.status === "next" && (
                  <Circle className="text-gray-400 w-6 h-6" />
                )}
              </span>
              <h3 className="text-lg font-semibold text-green-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
