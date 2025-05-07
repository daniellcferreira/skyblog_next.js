# SkyBlog

[![Next.js](https://img.shields.io/badge/Next.js-Framework-000000.svg?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Linguagem-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Estilização-06B6D4.svg?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![OpenAI API](https://img.shields.io/badge/OpenAI-API-10a37f.svg?style=flat&logo=openai)](https://platform.openai.com/)
[![PostCSS](https://img.shields.io/badge/PostCSS-BuildTool-DD3A0A.svg?style=flat&logo=postcss)](https://postcss.org/)


---

# SkyBlog

SkyBlog é uma aplicação web construída com Next.js e TypeScript que utiliza a API da OpenAI para gerar automaticamente notícias fictícias com base em categorias predefinidas. As informações são apresentadas dinamicamente na home e podem ser acessadas individualmente por rota dinâmica. A aplicação é estilizada com Tailwind CSS e segue uma estrutura modular, utilizando componentes reutilizáveis, renderização server-side e integração com inteligência artificial para geração de conteúdo.

---

## Funcionalidades

- Geração de notícias fictícias a partir da API da OpenAI.
- Exibição dinâmica na home com estados de carregamento, oferecendo uma melhor experiência de usuário.
- Roteamento dinâmico para página de detalhes das notícias (`/news/[id]`).
- Renderização server-side utilizando o método `getServerSideProps` para carregar dados.
- Componente `SkeletonHome` utilizado para exibir o estado de carregamento enquanto as notícias são carregadas.
- Organização do projeto de forma modular, separando componentes, interfaces, páginas, utilitários e API local.
- Configuração otimizada com Tailwind CSS e PostCSS, garantindo uma estilização limpa e responsiva.

---

## Tecnologias utilizadas

- **Next.js** — Framework para a construção de aplicações React com suporte a renderização server-side (SSR) e static-site generation (SSG).
- **TypeScript** — Fornece tipagem estática para o JavaScript, permitindo um código mais seguro e fácil de manter.
- **Tailwind CSS** — Utilitário de classes para estilização, com foco em design responsivo e otimizado.
- **OpenAI API** — Utilizada para gerar conteúdo textual com inteligência artificial, criando notícias fictícias com base em categorias específicas.
- **PostCSS** — Processador de CSS que melhora a integração com Tailwind e permite a aplicação de plugins personalizados para otimização do CSS.

