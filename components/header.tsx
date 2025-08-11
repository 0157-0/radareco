"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Sobre", href: "/#sobre" },
    { name: "Mapa", href: "/mapa" },
    {
      name: "GitHub",
      href: "https://github.com/0157-0/radareco",
      external: true,
    },
  ];

  useEffect(() => {
    fetch("https://api-radareco.onrender.com/health")
      .then(() => console.log("Ping enviado para acordar a API"))
      .catch(() => console.warn("Falha ao pingar a API"));
  }, []);

  return (
    <header className="bg-white shadow-sm border-b border-green-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-green-700">
              RadarEco 🌱
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-green-700 bg-green-50"
                    : "text-gray-600 hover:text-green-700 hover:bg-green-50"
                }`}
              >
                {item.name === "GitHub" && <Github className="h-4 w-4" />}
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-green-700 hover:bg-green-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-green-100">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-green-700 hover:bg-green-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name === "GitHub" && <Github className="h-4 w-4" />}
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
