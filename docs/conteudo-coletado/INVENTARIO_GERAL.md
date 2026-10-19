# Inventário geral — acervo do site anterior

**Fonte:** https://fauna-frontend-six.vercel.app/  
**Coleta:** 19 de outubro de 2026  
**Stack observada:** HTML estático (Astro), não SPA React.  
**Sitemap / robots:** 404  
**Aplicação FAUNA 3.0:** não alterada.

## Método

1. Homepage HTML → menu real.  
2. HEAD em cada rota encontrada + algumas rotas “3.0-like” para registrar 404.  
3. Extração do `<main>` sem complementar texto.  
4. Download de fotografias e marcas de tamanho moderado. Banners >1,6 MB ficaram só como URL.  
5. Busca de PDF: nenhum href; tentativas de caminhos comuns = 404.

## Páginas acessadas (HTTP 200) — 28

| # | URL | Arquivo Markdown |
| --- | --- | --- |
| 1 | `/` | `homepage.md` |
| 2 | `/institucional` | `institucional.md` |
| 3 | `/metodo-saber-mais` | `metodo-saber-mais.md` |
| 4 | `/cpa` | `cpa.md` |
| 5 | `/lgpd` | `lgpd.md` |
| 6 | `/editais` | `documentos-academicos.md` |
| 7 | `/regimento-geral` | `documentos-academicos.md` |
| 8 | `/regulamentos-e-programas` | `documentos-academicos.md` |
| 9 | `/normas-e-manuais` | `documentos-academicos.md` |
| 10 | `/fale-conosco` | `contato.md` |
| 11 | `/trabalhe-conosco` | `contato.md` |
| 12 | `/ouvidoria` | `contato.md` |
| 13 | `/cursos-graduacao` | `cursos-graduacao.md` |
| 14 | `/cursos-pos-graduacao` | `cursos-pos-graduacao.md` |
| 15 | `/eventos` | `eventos.md` |
| 16 | `/evento/aula-show-dr-matheus-de-carvalho` | `eventos.md` |
| 17 | `/finamaximos-finama-experience` | `beneficios.md` |
| 18 | `/meu-amigo-vale-muito-graduacao` | `beneficios.md` |
| 19 | `/sou-finama-com-orgulho-pos-graduacao` | `beneficios.md` |
| 20 | `/club-finamaximo` | `beneficios.md` |
| 21 | `/formas-de-ingresso/vestibular-programado` | `formas-de-ingresso.md` |
| 22 | `/formas-de-ingresso/nota-do-enem` | `formas-de-ingresso.md` |
| 23 | `/formas-de-ingresso/segunda-graduacao` | `formas-de-ingresso.md` |
| 24 | `/formas-de-ingresso/transferencia` | `formas-de-ingresso.md` |
| 25 | `/biblioteca-orgaos-e-periodicos-virtuais` | `biblioteca.md` |
| 26 | `/biblioteca-portais-virtuais` | `biblioteca.md` |
| 27 | `/biblioteca-periodicos-virtuais` | `biblioteca.md` + `biblioteca-periodicos-lista-original.txt` |
| 28 | `/biblioteca-publicacoes-virtuais` | `biblioteca.md` |

## Páginas indisponíveis (HTTP 404) — 13 rotas testadas + 5 PDFs

Presumidas pela estrutura 3.0 ou por seções da home **sem rota**:

- `/cursos` `/noticias` `/contato` `/beneficios` `/como-ingressar` `/vida-academica`
- `/diretoria` `/docentes` `/coordenacao` `/news`
- `/fauna-lab` `/talentos-sa` `/centro-de-saude-e-estetica`
- `/regimento-geral.pdf` e outros caminhos de PDF tentados

Seções da home com `href="#"` (não são páginas): extensão, CSE, ritos Experience, Talentos, notícias, vestibulinho, vestibular presencial, processo seletivo.

## Textos coletados

Arquivos em `docs/conteudo-coletado/*.md` (originais). Destaques:

- Missão, visão, valores e mensagem do diretor **integrais**
- Bios: só Psicologia completa; Direito e Enfermagem só nome + foto
- Catálogos de graduação e pós **sem ficha de curso**
- Regulamentos de desconto **completos** (incluindo faixas 45–75% omitidas no 3.0)
- Listas de documentos de quatro formas de ingresso
- LGPD + DPO Antony Pimenta Brito
- Placeholders: FAUNA LAB, biblioteca (3 de 4 páginas “em atualização”), vestibular programado vazio

## Imagens

- **Identificadas:** ~70 (fotos, banners, ícones, news, logos)
- **Baixadas:** 22 arquivos (~2,4 MB) em `assets/imagens/`
- **Não baixadas por tamanho:** 3 banners PNG (~1,7 MB cada) — URLs em `assets/imagens/INVENTARIO_IMAGENS.md`
- **Ícones UI:** catalogados, não copiados

## Documentos

**0 arquivos recuperados.** Dezenas de títulos em `documentos-academicos.md`.

## Comparação 3.0

Ver `COMPARACAO_FAUNA_3.md`.

## Pendências de validação (resumo)

- Qualquer dado de Belém usado em Barcarena
- Percentuais e cursos do “Meu Amigo” (inclui Pedagogia)
- Turnos e parceria FCC
- Frase INEP/2024
- Telefones extras e horários (20h / sábado)
- DPO e e-mails @finama.edu.br vs contato@fauna.edu.br
- Fotos de coordenação e retrato do diretor
- Evento Centur
- Publicação de títulos de PDF sem o PDF

## Materiais a fornecer manualmente

1. PDFs reais (regimento, CPA, editais, manuais, regulamento de bolsas Barcarena)
2. URLs de portais, Minha Biblioteca, validadores, redes
3. Fichas de curso (grau, CH, ato, turno do polo)
4. Lista docente Barcarena + Lattes
5. Endereço do polo
6. Fotos do imóvel de Barcarena (as atuais do 3.0 são conceituais)
7. Textos longos das três notícias e álbuns Experience
8. Confirmação escrita do que **não** deve ser copiado (campi Belém, FCC, Centur)
