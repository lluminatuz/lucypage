"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Persist and apply dark mode by toggling class on <html>
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('theme') : null;
    if (saved === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="font-sans min-h-screen">
      <header className="py-0 px-8 flex justify-between items-center">
        <Image
          src="/v.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <nav className="flex items-center gap-4 font-bold font-playfair">
          <a href="#about" className="hover:underline">Sobre</a>
          <a href="#portfolio" className="hover:underline">Portifolio</a>
          <a href="#serviços" className="hover:underline">Serviços</a>
          <a href="#contact" className="hover:underline">Contato</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 px-3 py-1 rounded border border-current text-sm hover:opacity-80"
            aria-label="Alternar modo noturno"
          >
            {darkMode ? 'Modo Claro' : 'Modo Escuro'}
          </button>
        </nav>
      </header>

      <main className="py-0 px-0">
        <section id="about" className="flex items-center">
          <div className="w-1/2">
            <Image
              src="/WhatsApp Image 2025-09-25 at 14.22.44-Photoroom.png"
              alt="Imagem principal do portfólio"
              width={450}
              height={450}
              className="rounded-lg mx-auto"
            />
          </div>
          <div className="w-1/2 text-left -mt-20">
            <h1 className="text-5xl font-bold font-playfair">Lucinei Verneque</h1>
            <br></br>
            <p className="text-lg">
              Formada em Ciências Contábeis, com especialização em Gestão de Projetos. Atuo como Coach (Pessoal e Financeiro), Analista Comportamental e Líder em Desenvolvimento Humano e Financeiro.
            </p>
          </div>
        </section>

        <section id="portfolio" className="text-center py-12">
          <h2 className="text-2xl mb-8 font-bold font-playfair">Portifolio</h2>
          <div className="flex justify-center items-start gap-8 max-w-6xl mx-auto">
            <div className="card-module p-6 rounded-lg shadow-md max-w-sm">
              <h3 className="text-xl font-bold font-playfair mb-4">Coaching Pessoal</h3>
              <p className="text-sm leading-relaxed">
                Ajuda você a descobrir seu potencial, definir metas claras e desenvolver estratégias para alcançar seus objetivos pessoais. Trabalhamos juntos para superar limitações e construir uma vida mais plena e realizada.
              </p>
            </div>
            <div className="card-module p-6 rounded-lg shadow-md max-w-sm">
              <h3 className="text-xl font-bold font-playfair mb-4">Coaching Financeiro</h3>
              <p className="text-sm leading-relaxed">
                Orienta você na organização das finanças pessoais, criação de orçamentos eficientes e desenvolvimento de uma mentalidade próspera. Aprenda a tomar decisões financeiras inteligentes e construir riqueza de forma sustentável.
              </p>
            </div>
            <div className="card-module p-6 rounded-lg shadow-md max-w-sm">
              <h3 className="text-xl font-bold font-playfair mb-4">Desenvolvimento Humano</h3>
              <p className="text-sm leading-relaxed">
                Foco no crescimento pessoal e profissional através de técnicas de autoconhecimento, inteligência emocional e liderança. Desenvolva habilidades essenciais para se destacar em todas as áreas da sua vida.
              </p>
            </div>
          </div>
        </section>

        <section id="serviços" className="text-center py-12">
          <h2 className="text-2xl mb-8 font-bold font-playfair">Serviços</h2>
          <div className="flex justify-center items-start gap-8 max-w-6xl mx-auto">
            <div className="card-module p-6 rounded-lg shadow-md max-w-sm">
              <h3 className="text-xl font-bold font-playfair mb-4">Mentoria Personalizada</h3>
              <p className="text-sm leading-relaxed">
                Sessões individuais de 60-90 minutos onde trabalhamos juntos para identificar bloqueios, estabelecer metas claras e criar um plano de ação personalizado para sua transformação pessoal e financeira.
              </p>
            </div>
            <div className="card-module p-6 rounded-lg shadow-md max-w-sm">
              <h3 className="text-xl font-bold font-playfair mb-4">Palestras Motivacionais</h3>
              <p className="text-sm leading-relaxed">
                Apresentações dinâmicas de 1-2 horas para empresas, instituições e eventos, abordando temas como liderança, inteligência emocional, gestão financeira e desenvolvimento de alta performance.
              </p>
            </div>
            <div className="card-module p-6 rounded-lg shadow-md max-w-sm">
              <h3 className="text-xl font-bold font-playfair mb-4">Workshops Interativos</h3>
              <p className="text-sm leading-relaxed">
                Treinamentos práticos de 4-8 horas com metodologia experiencial, focados em transformação comportamental, planejamento financeiro e desenvolvimento de competências essenciais para o sucesso.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center">
          <h2 className="text-2xl font-bold font-playfair mb-4">Contato</h2>
          <p className="mb-2">Entre em contato comigo:</p>
          <a href="https://instagram.com/lucinei_verneque" className="text-blue-500 hover:underline">Instagram</a>
          <br />
          <a href="https://wa.me/61985897196" className="text-green-500 hover:underline">WhatsApp</a>
        </section>
      </main>

      <footer className="py-6 text-center">
        <p className="text-sm">© 2025 Lucinei Verneque. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}