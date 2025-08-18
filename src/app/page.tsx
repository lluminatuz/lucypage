"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className={`font-sans min-h-screen transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-r from-blue-100 via-white to-blue-100'
    }`}>
      <header className="shadow-lg py-6 px-8 flex justify-between items-center transition-colors duration-300 bg-gray-800 text-white">
        <div>
          <h1 className="text-5xl font-extrabold">Lucinei Verneque</h1>
          <p className="text-xl mt-2">Desenvolvendo o potencial humano e financeiro</p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300' 
                : 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <a href="https://wa.me/61985897196" className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition">Conversar agora</a>
        </div>
      </header>

      <main className="py-12 px-8">
        <section className="mb-12">
          <h2 className={`text-3xl font-semibold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-700'
          }`}>Sobre Mim</h2>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <Image
              src="/IMG-20250609-WA0076.jpg"
              alt="Lucinei Verneque"
              width={400}
              height={400}
              className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className={`text-lg transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              <p className="mb-4">
                Sou formada em Ciências Contábeis, com especialização em Gestão de Projetos e MBA em Gestão de Pessoas. 
                Com mais de 15 anos de experiência no mercado corporativo, descobri minha verdadeira paixão: ajudar pessoas a 
                alcançarem seu máximo potencial tanto na vida pessoal quanto financeira.
              </p>
              <p className="mb-4">
                Como Coach Certificada pela International Coaching Federation (ICF), especializo-me em transformação comportamental, 
                inteligência financeira e desenvolvimento de liderança. Minha abordagem única combina técnicas comprovadas de coaching 
                com análise comportamental DISC e estratégias práticas de educação financeira.
              </p>
              <p>
                Já impactei mais de 500 vidas através de mentorias individuais, palestras inspiradoras e workshops interativos. 
                Minha missão é despertar em cada pessoa a confiança e as ferramentas necessárias para criar uma vida extraordinária, 
                alinhando propósito, prosperidade e bem-estar emocional.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={`text-3xl font-semibold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-700'
          }`}>Serviços</h2>
          <div className={`text-lg transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`p-6 rounded-lg transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Mentoria Personalizada</h3>
                <p>Sessões individuais de 60-90 minutos onde trabalhamos juntos para identificar bloqueios, 
                estabelecer metas claras e criar um plano de ação personalizado para sua transformação pessoal e financeira.</p>
              </div>
              <div className={`p-6 rounded-lg transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Palestras Motivacionais</h3>
                <p>Apresentações dinâmicas de 1-2 horas para empresas, instituições e eventos, abordando temas como 
                liderança, inteligência emocional, gestão financeira e desenvolvimento de alta performance.</p>
              </div>
              <div className={`p-6 rounded-lg transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Workshops Interativos</h3>
                <p>Treinamentos práticos de 4-8 horas com metodologia experiencial, focados em transformação comportamental, 
                planejamento financeiro e desenvolvimento de competências essenciais para o sucesso.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={`text-3xl font-semibold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-700'
          }`}>Contato</h2>
          <div className={`flex items-center gap-6 text-lg transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <a href="https://instagram.com/lucinei_verneque" className={`flex items-center gap-2 transition-colors duration-300 ${
              isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-500 hover:text-blue-700'
            }`}>
              <Image src="/globe.svg" alt="Instagram" width={32} height={32} />
              @lucinei_verneque
            </a>
            <a href="https://wa.me/61985897196" className={`flex items-center gap-2 transition-colors duration-300 ${
              isDarkMode ? 'text-green-400 hover:text-green-300' : 'text-green-500 hover:text-green-700'
            }`}>
              <Image src="/window.svg" alt="WhatsApp" width={32} height={32} />
              (61) 98589-7196
            </a>
          </div>
        </section>

        <section>
          <h2 className={`text-3xl font-semibold mb-4 transition-colors duration-300 ${
            isDarkMode ? 'text-blue-400' : 'text-blue-700'
          }`}>Galeria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Image
              src="/IMG-20250609-WA0076.jpg"
              alt="Lucinei em momento profissional"
              width={500}
              height={500}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/IMG-20250609-WA0078.jpg"
              alt="Lucinei em workshop de desenvolvimento"
              width={500}
              height={500}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>
      </main>

      <footer className="shadow-lg py-6 text-center transition-colors duration-300 bg-gray-800 text-white">
        <p className="text-sm">© 2024 Lucinei Verneque. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
