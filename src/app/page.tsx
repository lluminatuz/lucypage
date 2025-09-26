import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-gray-100 py-0 px-8 flex justify-between items-center">
        <Image
          src="/v.png"
          alt="Logo"
          width={100}
          height={100}
        />
        <nav className="flex gap-4 font-bold font-playfair">
          <a href="#about" className="hover:underline">Sobre</a>
          <a href="#portfolio" className="hover:underline">Portfólio</a>
          <a href="#contact" className="hover:underline">Contato</a>
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

        <section id="portfolio" className="text-center">
          <h2 className="text-2xl mb-4 font-bold font-playfair">Portfólio</h2>
          <div className="flex justify-center items-center gap-4">
            <Image
              src="/IMG-20250609-WA0076.jpg"
              alt="Imagem adicional do portfólio"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="/IMG-20250609-WA0078.jpg"
              alt="Imagem adicional do portfólio"
              width={400}
              height={400}
              className="rounded-lg"
            />
            <Image
              src="/WhatsApp Image 2025-09-25 at 14.22.44.jpeg"
              alt="Imagem adicional do portfólio"
              width={400}
              height={400}
              className="rounded-lg"
            />
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

      <footer className="bg-gray-100 py-6 text-center">
        <p className="text-sm">© 2025 Lucinei Verneque. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}