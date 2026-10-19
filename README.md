# FAUNA 3.0 — Faculdade Universo da Amazônia

Website institucional da FAUNA para o polo de Barcarena, Pará.  
Projeto frontend migrado do Google AI Studio para desenvolvimento no Cursor.

Este repositório contém apenas a aplicação web (React). Não há backend neste projeto.

## Visão geral

A FAUNA 3.0 é um site institucional com:

- página inicial narrativa, em dez cenas
- páginas internas (institucional, cursos, ingresso, benefícios, vida acadêmica, notícias e contato)
- conteúdo centralizado em arquivos de dados
- animações com GSAP e ScrollTrigger

## Stack

- React 19
- TypeScript
- Vite 8
- React Router
- Tailwind CSS 4
- GSAP
- Lucide React

Gerenciador de pacotes: **npm**.

## Requisitos

- Node.js 20 ou superior (testado com Node.js 24 LTS)
- npm 10 ou superior

## Instalação

Na raiz do projeto (pasta onde estão `package.json` e `vite.config.ts`):

```bash
npm install
```

Não use Bun ou Yarn neste repositório, para manter um único lockfile (`package-lock.json`).

## Execução local

```bash
npm run dev
```

O servidor inicia em [http://localhost:3000](http://localhost:3000).

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento |
| `npm run lint` | Verifica o TypeScript sem gerar arquivos |
| `npm run build` | Valida o TypeScript e gera a pasta `dist` |
| `npm run preview` | Serve localmente o build de produção |
| `npm run clean` | Remove a pasta `dist` |

## Estrutura de pastas

```text
.
├── public/                 # logo e imagens públicas
├── src/
│   ├── assets/             # recursos auxiliares
│   ├── components/         # layout, seções, animações e UI
│   ├── data/               # conteúdo institucional e navegação
│   ├── hooks/              # GSAP e preferência de movimento reduzido
│   ├── pages/              # páginas/rotas
│   ├── utils/              # configuração de motion
│   ├── App.tsx             # rotas principais
│   ├── main.tsx            # ponto de entrada
│   └── index.css           # tokens visuais e Tailwind
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── vercel.json
```

## Build de produção

```bash
npm run build
```

A pasta gerada é `dist/`. Para conferir o resultado localmente:

```bash
npm run preview
```

## Deploy na Vercel

1. Envie o repositório para o GitHub.
2. No painel da [Vercel](https://vercel.com), importe o projeto.
3. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** a pasta raiz deste frontend
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Publique.

O arquivo `vercel.json` já redireciona rotas do React Router para `index.html`, para que endereços como `/cursos` funcionem em produção.

Este site não exige variáveis de ambiente para o build atual.

## Observações

- Formulários de interesse e contato ainda são somente da interface; os dados não são enviados a um serviço externo.
- Parte do conteúdo institucional permanece marcada para validação do polo Barcarena.
- Não misture `package-lock.json` com lockfiles de outros gerenciadores.
