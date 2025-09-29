## Portfólio — Lucinei Verneque

Site de portfólio desenvolvido com Next.js (App Router) e Tailwind CSS. O projeto apresenta as seções Sobre, Portfólio, Serviços e Contato, com design responsivo e suporte a modo claro/escuro.

### Principais recursos
- Responsivo para celulares, tablets e desktops
- Alternância de tema (modo claro/escuro) com persistência em `localStorage`
- Seção Sobre com texto sobreposto à imagem apenas no mobile
- Botão “Fale Comigo” com link direto para WhatsApp
- Seção Contato com logos do Instagram e WhatsApp
- Tipografia com Playfair Display

---

## Tecnologias
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS

---

## Executar localmente
Pré-requisitos: Node.js 18+ e npm.

```bash
# instalar dependências
npm install

# executar em desenvolvimento
npm run dev

# acessar
# http://localhost:3000
```

Scripts úteis:
- `npm run dev`: ambiente de desenvolvimento
- `npm run build`: build de produção
- `npm run start`: servir build de produção

---

## Estrutura do projeto
```text
src/
  app/
    layout.tsx        # layout raiz (inclui globals.css)
    page.tsx          # página principal com as seções
    globals.css       # estilos globais + variáveis de tema
public/
  v.png               # logotipo
  ...                 # imagens e fontes
```

---

## Personalização
- Conteúdo: edite `src/app/page.tsx`.
- Cores/tema: ajuste variáveis em `src/app/globals.css` (`:root` e `html.dark`).
- Fontes: `public/Playfair_Display` e classe utilitária `font-playfair`.
- Ícones/Logos: substitua arquivos em `public/` e atualize os caminhos em `page.tsx`.

---

## Deploy
- Vercel (recomendado): crie o projeto e conecte o repositório. A build padrão do Next.js é detectada automaticamente.
- Outra plataforma: execute `npm run build` e sirva com `npm start` em um ambiente Node 18+.

---

## Licença
Este projeto é de uso pessoal do(a) autor(a). Ajuste conforme sua necessidade antes de tornar público.
