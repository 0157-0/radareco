import { Database, Eye, Globe, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: "Dados Abertos",
      description: "Informações de fontes confiáveis",
    },
    {
      icon: <Eye className="h-8 w-8 text-green-600" />,
      title: "Transparência",
      description:
        "Acesso livre e gratuito a dados ambientais para toda a sociedade",
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Tempo Real",
      description: "Acompanhe eventos ambientais conforme eles acontecem",
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Open Source",
      description: "Código aberto para que todos possam contribuir e melhorar",
    },
  ];

  return (
    <section id="sobre" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Sobre o Projeto
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Este é um projeto open source que conecta dados públicos de
              variadas fontes. A plataforma reúne, processa e apresenta essas
              informações de forma acessível, permitindo que qualquer pessoa
              acompanhe eventos ambientais em tempo quase real, como alertas de
              desmatamento e queimadas, de maneira confiável e segura.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
