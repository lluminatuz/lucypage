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
      <header className="py-0 px-4 md:px-8 flex flex-wrap items-center justify-between gap-4 relative">
        <Image
          src="/v.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <div className="order-2 ml-auto md:ml-0 flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="absolute right-4 top-2 md:static px-2 py-1 rounded border border-current text-sm hover:opacity-80 md:ml-4"
            aria-label="Alternar modo noturno"
          >
            {darkMode ? 'Modo Claro' : 'Modo Escuro'}
          </button>
          <nav className="order-3 basis-full w-full md:order-2 md:basis-auto md:w-auto flex flex-wrap items-center justify-end gap-2 sm:gap-3 font-bold font-playfair text-sm sm:text-base">
            <a href="#about" className="hover:underline">Sobre</a>
            <a href="#portfolio" className="hover:underline">Portifolio</a>
            <a href="#serviços" className="hover:underline">Serviços</a>
            <a href="#contact" className="hover:underline">Contato</a>
          </nav>
        </div>
      </header>

      <main className="py-0 px-0">
        <section id="about" className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/WhatsApp Image 2025-09-25 at 14.22.44-Photoroom.png"
              alt="Imagem principal do portfólio"
              width={450}
              height={450}
              className="rounded-lg mx-auto w-full max-w-[450px] h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:-mt-20 mt-0 px-4 md:px-0 absolute inset-0 z-10 flex flex-col justify-end gap-2 p-4 md:static md:inset-auto md:z-auto md:flex-none md:p-0 bg-black/40 md:bg-transparent text-white md:text-inherit rounded-lg md:rounded-none">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair">Lucinei Verneque</h1>
            <br></br>
            <p className="text-base sm:text-lg">
              Formada em Ciências Contábeis, com especialização em Gestão de Projetos. Atuo como Coach (Pessoal e Financeiro), Analista Comportamental e Líder em Desenvolvimento Humano e Financeiro.
            </p>
            <a
              href="https://wa.me/61985897196?text=Ol%C3%A1%20Lucinei!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit self-start px-3 py-1 sm:px-3 sm:py-2 font-bold font-playfair rounded border border-current text-sm sm:text-base hover:opacity-80"
            >
              Fale Comigo
            </a>
          </div>
        </section>

        <section id="portfolio" className="text-center py-8 md:py-12 px-4">
          <h2 className="text-2xl mb-8 font-bold font-playfair">Portifolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="card-module p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold font-playfair mb-4">Coaching Pessoal</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Ajuda você a descobrir seu potencial, definir metas claras e desenvolver estratégias para alcançar seus objetivos pessoais. Trabalhamos juntos para superar limitações e construir uma vida mais plena e realizada.
              </p>
            </div>
            <div className="card-module p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold font-playfair mb-4">Coaching Financeiro</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Orienta você na organização das finanças pessoais, criação de orçamentos eficientes e desenvolvimento de uma mentalidade próspera. Aprenda a tomar decisões financeiras inteligentes e construir riqueza de forma sustentável.
              </p>
            </div>
            <div className="card-module p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold font-playfair mb-4">Desenvolvimento Humano</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Foco no crescimento pessoal e profissional através de técnicas de autoconhecimento, inteligência emocional e liderança. Desenvolva habilidades essenciais para se destacar em todas as áreas da sua vida.
              </p>
            </div>
          </div>
        </section>

        <section id="serviços" className="text-center py-8 md:py-12 px-4">
          <h2 className="text-2xl mb-8 font-bold font-playfair">Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="card-module p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold font-playfair mb-4">Mentoria Personalizada</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Sessões individuais de 60-90 minutos onde trabalhamos juntos para identificar bloqueios, estabelecer metas claras e criar um plano de ação personalizado para sua transformação pessoal e financeira.
              </p>
            </div>
            <div className="card-module p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold font-playfair mb-4">Palestras Motivacionais</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Apresentações dinâmicas de 1-2 horas para empresas, instituições e eventos, abordando temas como liderança, inteligência emocional, gestão financeira e desenvolvimento de alta performance.
              </p>
            </div>
            <div className="card-module p-6 rounded-lg shadow-md">
              <h3 className="text-lg md:text-xl font-bold font-playfair mb-4">Workshops Interativos</h3>
              <p className="text-sm md:text-base leading-relaxed">
                Treinamentos práticos de 4-8 horas com metodologia experiencial, focados em transformação comportamental, planejamento financeiro e desenvolvimento de competências essenciais para o sucesso.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="text-center py-8 md:py-12 px-4">
          <h2 className="text-2xl font-bold font-playfair mb-4">Contato</h2>
          <p className="mb-4">Entre em contato comigo:</p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://instagram.com/lucinei_verneque"
              className="inline-flex items-center gap-2 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Made with insMind-png insta.png"
                alt="Logo do Instagram"
                width={24}
                height={24}
              />
              <span className="text-blue-500 underline-offset-2 hover:underline">Instagram</span>
            </a>
            <a
              href="https://wa.me/61985897196"
              className="inline-flex items-center gap-2 hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/Made with insMind-whatsapp.png"
                alt="Logo do WhatsApp"
                width={24}
                height={24}
              />
              <span className="text-green-600 underline-offset-2 hover:underline">WhatsApp</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center">
        <p className="text-sm">© 2025 Lucinei Verneque. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}