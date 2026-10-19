# Implementação editorial — Etapa 05

**Data:** 19 de outubro de 2026  
**Branch:** `main` (alterações locais das etapas 03–04 preservadas; nenhum commit/push)  
**Escopo:** textos institucionais com fonte recuperada. Sem mudança de identidade visual, GSAP, Header, submenus, URLs de inscrição, cursos, preços, benefícios ou regras de ingresso.

## Conferência Git

- HEAD: `fdbb387`
- Havia modificações locais em cenas, Header, `App.tsx`, `vite.config.ts` e pasta `docs/` — **não descartadas**.
- Foto de Fabrício permanece só em `docs/conteudo-coletado/assets/` (origem: site anterior). **Não** foi publicada na aplicação: falta autorização expressa de uso neste canal.

## Conteúdos atualizados

| Página | Texto anterior (síntese) | Texto atualizado | Fonte | Justificativa | Validação |
| --- | --- | --- | --- | --- | --- |
| Institucional · Quem Somos | Mensagem parafraseada; H2 “divisor de águas” | Mensagem da Diretoria restaurada (4 parágrafos). Único ajuste: retirada da afirmação “única… Norte e Nordeste”, sem comprovação | `institucional.md` / site anterior | Fidelidade institucional + cautela comercial | Cargo permanece Diretoria Geral (não “CEO”) |
| Institucional · Missão/Visão/Valores | Resumo e visão reescrita | Textos integrais da IES + 6 valores | Site anterior `/institucional` | Correção da divergência da auditoria | Textos da IES, não específicos de Barcarena |
| Institucional · História | Títulos reescritos; 2022/2026 misturados | Títulos e fatos 2018–2022 originais, com rótulo “trajetória da instituição”; 2022 marca Prime como Belém; 2026 como recorte ainda em divulgação | Site anterior | Distinguir IES × Barcarena | Portaria 2018 sem número |
| Institucional · Saber Mais | 3 pilares inventados (Baixo Tocantins, mestres/doutores) | Conceito original + metodologia/experiência/diferenciais/aplicação ancorados no texto recuperado e na mensagem da Diretoria | `/metodo-saber-mais` + mensagem do diretor | Não inventar indicadores | Aplicação em Barcarena pendente |
| Institucional · CPA | Texto curto + lista de relatórios sem PDF | Apresentação e finalidade originais; lista de arquivos removida | `/cpa` | Não simular download | PDFs a enviar pela Direção |
| Institucional · LGPD | Texto reescrito; “portal de atendimento”; sem cookies | Política e cookies restaurados; DPO **não** nominado | `/lgpd` | Nome Antony Pimenta Brito / `ti@finama.edu.br` sem confirmação vigente | Confirmar DPO |
| Institucional · Editais | “Edital Vestibular Barcarena 2026.1” | Categorias sem título de edital inexistente | Auditoria P0 | Não publicar PDF fictício | Arquivos oficiais |
| Diretoria | Bio curta; “já confirmadas” | Bio alinhada à mensagem recuperada; foto não publicada; docentes de Belém não incorporados | `institucional.md` | Prompt 05 itens 3 e 9 | Foto e CEO |
| Vida acadêmica | 10.000 títulos, CAPES, biblioteca física, portarias 330/554 | Descrição do acervo do site anterior; portais sem URL; LAB e Talentos com texto recuperado e ressalva local | `/biblioteca-*`, Experience, homepage antiga | Não afirmar operação em Barcarena | Contratos e URLs |
| Notícias / Home cena 09 | Três “matérias” datadas de 2026 sem fonte | Memória 2018, 2019 e 2022 com texto histórico identificado | Timeline do site anterior | Não inventar jornalismo | Evento Centur **não** importado |
| Home · diferenciais | Mestres/doutores, labs, “maiores indústrias” | Diferenciais ancorados em missão, Saber Mais e acolhimento | Institucional recuperado | Evitar superlativo sem prova | — |
| Home · Experience | Hollywood, ouro e rubi, Barcarena como fato | Tradições da IES + calendário local pendente | `/finamaximos-finama-experience` | Preservar rito sem vender o polo | Regulamento local |
| Home · Campus | Copy de espaços boutique | Legenda de imagens conceituais | Auditoria P0 | Não passar foto por prédio real | Fotos do imóvel |
| Footer | Credenciamento MEC genérico | Atos serão divulgados com documento | Auditoria P0 | Não afirmar credenciamento do polo | e-MEC |

## Arquivos alterados nesta etapa

- `src/data/content.ts` (`INSTITUTIONAL_COPY`, timeline, notícias, notas do inventário)
- `src/data/faculty.ts`
- `src/pages/InstitucionalPage.tsx`
- `src/pages/FacultyPage.tsx`
- `src/pages/VidaAcademicaPage.tsx`
- `src/pages/NoticiasPage.tsx`
- `src/components/sections/Scene05Knowledge.tsx`
- `src/components/sections/Scene07Campus.tsx`
- `src/components/sections/Scene08Experience.tsx`
- `src/components/sections/Scene09NewsEvents.tsx`
- `src/components/layout/Footer.tsx`
- `docs/IMPLEMENTACAO_EDITORIAL_ETAPA05.md` (este arquivo)

Não alterados de propósito: Header, navegação, GSAP, `EnrollmentCta` / `externalLinks.ts`, `COURSES_DATA`, `BENEFIT_PROGRAMS`, `ComoIngressarPage`, `contact.ts`.

## Recuperados e aproveitados

- Missão, visão, valores
- Mensagem da Diretoria (com um recorte de superlativo)
- Timeline 2018–2022
- Conceito Saber Mais
- CPA (textos)
- LGPD e cookies (sem DPO)
- Slogan “Conectando a Amazônia ao mundo”
- Descrição institucional curta do rodapé
- Tradições Experience / Acolher / Profissional S/A como **tradição da IES**
- Telefone (91) 98121-2525 já estava no 3.0 — **não** expandido com FIES/clínica/financeiro (Belém)

## Pendentes (não publicados como oficiais)

- Cursos, turnos, percentuais, regras de ingresso
- Endereço, mapa, redes, URLs de inscrição e portais
- Foto de Fabrício na UI
- Coordenadores Flavia, Evanilde, Adilson
- PDFs (CPA, regimento, editais, manuais)
- DPO nominado
- Evento Aula Show / Centur
- Notícias Exclusive, Pé-de-Meia, Pibid (sem matéria completa)
- Frase INEP/2024
- Campi de Belém

## Aprovações da Direção ainda necessárias

Ver `docs/CHECKLIST_DADOS_OFICIAIS.md`. Prioridade após esta etapa: e-MEC/polo, canais, lista de cursos, PDFs, autorização da foto da Diretoria, DPO, se a mensagem pode voltar a dizer “única Faculdade Boutique no Norte e Nordeste”.
