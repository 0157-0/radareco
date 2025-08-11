import Link from "next/link";
import { Github, Mail, Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-green-400">
                RadarEco 🌱
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Monitoramento ambiental colaborativo com dados abertos para um
              Brasil mais transparente e sustentável.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Úteis</h3>
            <div className="space-y-2">
              <Link
                href="/mapa"
                className="block text-gray-300 hover:text-green-400 transition-colors"
              >
                Mapa de Queimadas
              </Link>
              <Link
                href="/#sobre"
                className="block text-gray-300 hover:text-green-400 transition-colors"
              >
                Sobre o Projeto
              </Link>
              <Link
                href="https://github.com/0157-0/radareco"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-300 hover:text-green-400 transition-colors"
              >
                Código Fonte
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <Link
                href="https://github.com/0157-0/radareco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </Link>
              {/* <Link
                href="mailto:contato@observafloresta.org"
                className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contato@observafloresta.org</span>
              </Link> */}
              <div className="flex items-center space-x-2 text-gray-300">
                <Scale className="h-5 w-5" />
                <span>Licença MIT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 RadarEco. Projeto open source para monitoramento ambiental.
          </p>
        </div>
      </div>
    </footer>
  );
}
