# Inventário — Diretoria, coordenação e docentes

**Data:** 19 de outubro de 2026  
**Fontes:** `docs/conteudo-coletado/`, `docs/conteudo-coletado/assets/imagens/`, `src/data/faculty.ts`  
**Autorização de uso de imagem:** não verificada. Tratar fotografias como acervo interno.

Não há correspondência verificável entre arquivos e pessoas além das quatro linhas abaixo. Fotos de eventos, notícias, CPA, banners e logos **não** foram atribuídas a diretores ou docentes.

## Pessoas identificadas

| Nome | Cargo original (site anterior) | Arquivo | URL de origem | Unidade | Confirmação Barcarena | Autorização de uso | Publicado na 3.0 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fabrício Peixoto do Nascimento | CEO & FaUnA (rótulo da página Institucional) | `assets/pages/fabricio.png` (1001×1000) | https://fauna-frontend-six.vercel.app/assets/pages/fabricio.png | IES | Não se aplica ao cargo de Diretoria Geral da IES; recorte local sem cargos extras | Não verificada | Nome, cargo “Diretoria Geral” e mensagem. **Foto não.** Formação e Lattes ausentes |
| Flavia Beatriz Xavier do Vale | Coordenação do curso de Psicologia | `institucional/Flavia.jpeg` (640×640) | https://fauna-frontend-six.vercel.app/institucional/Flavia.jpeg | Belém | Necessária | Não verificada | **Não.** Bio/titulação só no acervo |
| Evanilde Gomes Franco | Coordenação do curso de Direito | `institucional/Evanilde.jpeg` (1206×1484) | https://fauna-frontend-six.vercel.app/institucional/Evanilde.jpeg | Belém | Necessária | Não verificada | **Não.** Currículo ausente no site anterior |
| Adilson Mendes de Figueiredo Júnior | Coordenação do curso de Enfermagem | `institucional/Adilson.jpeg` (1024×1370) | https://fauna-frontend-six.vercel.app/institucional/Adilson.jpeg | Belém | Necessária | Não verificada | **Não.** Currículo ausente no site anterior |

## Corpo docente

Nenhuma listagem de professores, Lattes ou foto de docente foi recuperada no site anterior (não existiam rotas `/diretoria` nem `/docentes`).

## Fotografias não atribuídas a pessoas

Banners de curso, news-1/2/3, ritos Experience, evento Centur, QR MEC, logos de parceiros, método Saber Mais e diagramas da CPA permanecem no acervo geral e **não** entram nesta página.

## Cadastro futuro

Perfis públicos: `DIRETORIA`, `COORDENACAO`, `DOCENTES` em `src/data/faculty.ts`.  
Para publicar fotografia: copiar o arquivo autorizado para `public/` e marcar `photo.authorized: true`.  
Para vincular docente a curso: usar `courseIds` / `courseLabels` do **catálogo de Barcarena**, nunca importar automaticamente a grade de Belém.
