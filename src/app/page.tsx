import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <header className="bg-blue-600 text-white shadow-lg py-6 px-8 flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-extrabold">Lucinei Verneque</h1>
          <p className="text-xl mt-2">Desenvolvendo o potencial humano e financeiro</p>
        </div>
        <a href="https://wa.me/61985897196" className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition">Conversar agora</a>
      </header>

      <main className="py-12 px-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Sobre Mim</h2>
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <Image
              src="/IMG-20250609-WA0076.jpg"
              alt="Lucinei Verneque"
              width={300}
              height={300}
              className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-700 text-lg">
              Sou formada em Ciências Contábeis, com especialização em Gestão de Projetos. Atuo como Coach (Pessoal e Financeiro), Analista Comportamental e Líder em Desenvolvimento Humano e Financeiro.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Serviços</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg">
            <li>Mentoria personalizada</li>
            <li>Palestras motivacionais</li>
            <li>Facilitação de workshops</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Contato</h2>
          <div className="flex items-center gap-4">
            <a href="https://instagram.com/lucinei_verneque" className="flex items-center gap-2 text-blue-500 hover:text-blue-700">
              <Image src="/globe.svg" alt="Instagram" width={24} height={24} />
              @lucinei_verneque
            </a>
            <a href="https://wa.me/61985897196" className="flex items-center gap-2 text-green-500 hover:text-green-700">
              <Image src="/window.svg" alt="WhatsApp" width={24} height={24} />
              (61) 98589-7196
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4 text-blue-700">Galeria</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <Image
              src="/IMG-20250609-WA0076.jpg"
              alt="Foto 1"
              width={300}
              height={300}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <Image
              src="/IMG-20250609-WA0078.jpg"
              alt="Foto 2"
              width={300}
              height={300}
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>
      </main>

      <footer className="bg-blue-600 text-white shadow-lg py-6 text-center">
        <p className="text-sm">© 2023 Lucinei Verneque. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
