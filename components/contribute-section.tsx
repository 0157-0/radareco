import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Code, Database, Palette, Heart } from "lucide-react";

export default function ContributeSection() {
  const contributions = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Desenvolvimento",
      description:
        "Contribua com código, correções de bugs e novas funcionalidades",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Dados",
      description: "Ajude a integrar novas fontes de dados ambientais",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Design",
      description: "Melhore a experiência do usuário e interface",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Divulgação",
      description: "Compartilhe o projeto e ajude a conscientizar mais pessoas",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contribua ou Participe
          </h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
            O RadarEco é um projeto colaborativo. Sua contribuição pode fazer a
            diferença na preservação ambiental.
          </p>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-green-700 hover:bg-green-50"
          >
            <Link
              href="https://github.com/observafloresta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Github className="h-5 w-5" />
              <span>Ver no GitHub</span>
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contributions.map((contribution, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <div className="flex justify-center mb-4 text-green-200">
                {contribution.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">
                {contribution.title}
              </h3>
              <p className="text-green-100 text-sm">
                {contribution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Como Contribuir</h3>
            <div className="text-left space-y-3 text-green-100">
              <p>• Faça um fork do repositório no GitHub</p>
              <p>• Crie uma branch para sua funcionalidade</p>
              <p>• Implemente suas melhorias</p>
              <p>• Envie um pull request com descrição detalhada</p>
              <p>• Participe das discussões na comunidade</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
