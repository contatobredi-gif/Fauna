# Auditoria de conteúdo — FAUNA 3.0

**Instituição:** Faculdade Universo da Amazônia (FAUNA)  
**Unidade-alvo deste site:** Barcarena / Vila dos Cabanos · Pará  
**Data da auditoria:** 19 de outubro de 2026  
**Escopo:** inventário, classificação, riscos de publicação e planejamento editorial  
**Fora de escopo:** alteração visual, React, GSAP, navegação, reescrita pública, commit e push

---

## 0. Método e limites

### Fontes inspecionadas (FAUNA 3.0)

- `src/data/content.ts`, `navigation.ts`, `faculty.ts`, `events.ts`
- `src/config/contact.ts`, `externalLinks.ts`, `socialLinks.ts`
- Páginas em `src/pages/` (11 rotas, incluindo 404)
- Textos embutidos em `src/components/sections/` (cenas 01–10), `Header`, `Footer`, `EnrollmentCta`, `ValidationNotice`
- `src/App.tsx` (mapa de rotas)

Uma etiqueta `validado`, `confirmado` ou `institucional` **no código não classifica o conteúdo como A**. A classe A exige evidência institucional verificável de que o fato vale **para Barcarena**.

### Fonte de comparação (versão anterior)

- [https://fauna-frontend-six.vercel.app/](https://fauna-frontend-six.vercel.app/) — homepage (SPA; captura incompleta do HTML hidratado)
- [https://fauna-frontend-six.vercel.app/eventos](https://fauna-frontend-six.vercel.app/eventos)
- [https://fauna-frontend-six.vercel.app/institucional](https://fauna-frontend-six.vercel.app/institucional)

**Rotas 404 nesta auditoria (não existe equivalente de caminho na versão anterior):**

- `/cursos`
- `/noticias`
- `/contato`
- `/beneficios`
- `/como-ingressar`
- `/vida-academica`

A versão anterior concentra conteúdo de **Belém** (Exclusive, Prime, Mais, Infinity, Tower, Boulevard) e e-mail `atendimento@finama.edu.br`. Essa material é **referência de conteúdo herdado**, não prova de oferta em Barcarena e **não** é referência visual.

**Não consultado nesta etapa:** e-MEC, Diário Oficial, portarias em PDF, redes sociais oficiais, WhatsApp real, e-mail institucional em produção, endereço predial homologado. Quando um dado depende dessas fontes, a classificação permanece B, C, D ou E.

### Legenda de classificação

| Classe | Significado |
| --- | --- |
| **A** | Confirmado para Barcarena (ou identidade da IES/mantenedora com evidência cruzada e sem ser vendido como fato do campus) |
| **B** | Herdado da versão anterior / da IES em Belém, sem confirmação específica para Barcarena |
| **C** | Existe no site, mas está incompleto |
| **D** | Necessário e não encontrado |
| **E** | Revisão necessária: risco de leitura equivocada, contradição, desatualização ou promoção sem fundamento |

---

## 1. Inventário do conteúdo exibido

### 1.1 Identidade e governança global

| ID | Conteúdo | Onde aparece | Classe | Fonte | Justificativa |
| --- | --- | --- | --- | --- | --- |
| I01 | Nome FAUNA — Faculdade Universo da Amazônia | Header, Footer, páginas | **A** | Site 3.0 + site anterior | Identidade institucional consistente nas duas versões. |
| I02 | Mantenedora F P do Nascimento EIRELI | Footer, LGPD | **A** | `Footer.tsx`, `InstitucionalPage.tsx` (LGPD); mensagem do diretor no site anterior | Nome da pessoa jurídica repetido. Não prova credenciamento do polo. |
| I03 | Fabrício Peixoto do Nascimento — Diretoria Geral | Faculty, institucional (mensagem) | **A** (pessoa) / **C** (foto, titulação, Lattes) | Site anterior: “CEO & FaUnA”; `faculty.ts` | Nome e papel de liderança cruzam as duas versões. Foto, formação acadêmica e Lattes ausentes. Cargo no 3.0 é “Diretoria Geral”, não “CEO”. |
| I04 | Polo Barcarena / Vila dos Cabanos como recorte deste site | Hero, Contato, nav | **A** (intenção editorial do projeto) | Brief do site 3.0 + `contact.ts` | O site declara o recorte. **Não** confirma endereço, prédio ou ato MEC do polo. |
| I05 | “Credenciamento MEC sob regulação oficial” | Footer | **E** | `Footer.tsx` | Afirma credenciamento sem número de portaria, data ou código e-MEC. Alto risco regulatório. |
| I06 | “Portarias do Polo Barcarena estão sendo divulgadas” | Footer, ValidationNotice | **C** / **E** | Vários avisos | O aviso de gradualidade é prudente; a coexistência com I05 e com catálogo detalhado de cursos dilui a cautela. |

### 1.2 Homepage (cenas)

| ID | Conteúdo | Classe | Fonte | Justificativa |
| --- | --- | --- | --- | --- |
| H01 | Proposta de valor: “nova experiência de ensino superior em Barcarena…” | **C** | `Scene01Hero.tsx` | Direção editorial adequada ao território; não há prova de operação iniciada. |
| H02 | CTA “Processo Seletivo Barcarena” | **C** | Hero + `EnrollmentCta` | Destino oficial vazio (`externalLinks.ts`). Comportamento de não inventar URL é correto; o botão ainda sugere inscrição disponível. |
| H03 | Essência “Faculdade Boutique” | **B** | `Scene02Essence.tsx` + site anterior | Conceito herdado da comunicação de Belém. |
| H04 | Manifesto FAUNA | **C** | `Scene03Manifesto.tsx` | Texto autoral do 3.0; não há versão oficial assinada pela Direção para Barcarena. |
| H05 | Cursos em destaque (catálogo completo da homepage) | **E** | `Scene04Formation.tsx` + `COURSES_DATA` | Exibe duração, turnos e modalidade presencial como dados de oferta, com status apenas em nota. |
| H06 | Diferenciais + Método Saber Mais | **B** | `Scene05Knowledge.tsx` + inventário “validado” no código | Metodologia descrita na IES; aplicação em Barcarena não comprovada. “Professores mestres e doutores” sem lista. |
| H07 | Território Barcarena | **C** | `Scene06Barcarena.tsx` | Vocação territorial é posicionamento; não deve ser lida como campus pronto. |
| H08 | Galeria Campus (pavilhão, labs, auditório, biblioteca etc.) | **E** | `Scene07Campus.tsx` | Há selo “conceito arquitetônico” / “em implantação”, mas imagens e nomes de espaços soam como instalações existentes. |
| H09 | Experiência FAUNA (Mérito com anel ouro/rubi, Manto, Talentos S/A, Projeto Acolher) | **B** / **E** | `Scene08Experience.tsx`; site anterior (ritos); status `confirmado` em benefícios | Ritos de Belém apresentados como vivência de Barcarena. Joia, Hollywood, “maiores empresas” e extensão jurídica/saúde sem evidência local. |
| H10 | Notícias na home (3 cards) | **E** | `NEWS_DATA` + `Scene09` | Datas de set–out/2026 e tom de imprensa sem URL, autor, assessoria ou fato verificável. |
| H11 | CTA de conversão / acolhimento boutique | **C** | `Scene10Conversion.tsx` | Linguagem de marca; inscrição sem URL. |

### 1.3 Institucional

| ID | Conteúdo | Classe | Fonte | Justificativa |
| --- | --- | --- | --- | --- |
| N01 | Quem somos / mensagem da diretoria | **B** | Site anterior “Mensagem do Diretor”; texto 3.0 parafraseado | Origem Belém. 3.0 suaviza “única Faculdade Boutique no Norte e Nordeste”. |
| N02 | Missão | **B** | Site anterior (texto integral mais longo) vs resumo 3.0 | Conteúdo institucional da IES; não específico de Barcarena. 3.0 **encurta** o texto oficial. |
| N03 | Visão | **E** | Site anterior vs `InstitucionalPage.tsx` | Anterior: “importante instituição do Estado do Pará…”. 3.0: “referência no Pará como centro… Amazônia”. Não é o mesmo enunciado; inventário diz “preservado integralmente” — **falso**. |
| N04 | Valores | **B** / **C** | Site anterior lista 6 itens; 3.0 condensa em uma frase | Perda de precisão institucional. |
| N05 | Linha do tempo 2018–2022 | **B** | Site anterior institucional + `TIMELINE_HISTORY` | História da IES em Belém (Prime, clínicas, esgotamento de vagas). Sem números de portaria. |
| N06 | Marco 2026 Barcarena | **C** | `TIMELINE_HISTORY` | Intenção estratégica do projeto; não há ato de credenciamento de campus anexo. |
| N07 | Aviso de portarias físicas de Barcarena | **C** | `ValidationNotice` na aba história | Correto como ressalva; insuficiente se a timeline e o campus visual contradizem. |
| N08 | Método Saber Mais (prática, problemas do Pará, mentoria) | **B** / **E** | `InstitucionalPage` tab saber-mais | Nome da metodologia é herdado. “Pioneirismo”, “marca registrada”, “mestres e doutores” e “Baixo Tocantins” sem comprovação. |
| N09 | CPA — texto SINAES | **B** | Texto genérico de obrigação legal + site 3.0 | A existência de CPA é obrigação de IES; composição, atas e relatórios de **Barcarena** não estão publicados. |
| N10 | Lista de relatórios CPA 2021–2025 | **E** | Hardcoded em `InstitucionalPage.tsx` | Títulos apresentados como acervo, status “arquivo em atualização”, **sem PDF**. Usuário pode crer que o documento existe e só falta o download. |
| N11 | LGPD + canal DPO | **C** | Aba LGPD | Mantenedora nomeada (A). DPO sem nome, e-mail próprio ou política em arquivo. “Portal de atendimento” inexistente. |
| N12 | Edital vestibular Barcarena 2026.1 | **E** | `editaisList` | Título de edital específico **sem arquivo** e “em consolidação”. |
| N13 | Regimento, normas, regulamentos | **D** (arquivo) / **E** (listagem) | mesma lista | Seções de navegação prometem documentos; não há conteúdo. |
| N14 | Coordenação de cursos (Flavia Beatriz Xavier do Vale; Evanilde Gomes Franco; Enfermagem vazio) | **D** no 3.0 | Site anterior `/institucional` | **Não incorporado** — decisão correta até validação para Barcarena. Não republicar como corpo docente do polo. |

### 1.4 Catálogo de cursos

Nenhum curso possui: carga horária, vagas, ato autorizativo, código e-MEC, coordenação, matriz, mensalidade, URL de inscrição.

Filtro **Extensão** está vazio de forma honesta (**A** como postura: não inventar turmas).

| Curso | Área | Grau | Modalidade | Duração | Turnos | Oferta Barcarena (código) | Regulatório | CTA | Classe |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Direito | Direito & Sociedade | Graduação (implícito) | Presencial | 5 anos | Matutino e Noturno | `em_estruturacao` | “Portaria em consolidação” | `EnrollmentCta` → URL vazia | **E** |
| Enfermagem | Saúde | Graduação | Presencial | 5 anos | Matutino e Noturno | `em_estruturacao` | Labs “em instalação” | idem | **E** |
| Psicologia | Saúde | Graduação | Presencial | 5 anos | Matutino e Noturno | `em_estruturacao` | “mestres e doutores” | idem | **E** |
| Biomedicina | Saúde | Graduação | Presencial | 4 anos | Matutino e Noturno | `origem_belem_a_validar` | Sujeita a labs | idem | **B** / **E** |
| Farmácia | Saúde | Graduação | Presencial | 5 anos | Matutino e Noturno | `origem_belem_a_validar` | Pendente 1ª turma | idem | **B** / **E** |
| Odontologia | Saúde | Graduação | Presencial | 5 anos | Matutino e Noturno | `origem_belem_a_validar` | Clínicas em planejamento | idem | **B** / **E** |
| Gestão de RH | Gestão & Negócios | Graduação (tecnólogo implícito pela duração) | Presencial | 2 anos | Noturno | `em_estruturacao` | Demanda local, sem ato | idem | **E** |
| Gestão Hospitalar | Gestão & Negócios | Graduação (tecnólogo implícito) | Presencial | 3 anos | Noturno | `em_estruturacao` | idem | idem | **E** |
| Urgência e Emergência Hospitalar | Saúde | Pós | Presencial | 18 meses | Quinzenal (fds) | `em_estruturacao` | Sem público-alvo formal além da descrição | idem | **B** / **D** |
| Gestão Estratégica, Sustentabilidade e ESG | Gestão | Pós | Presencial | 14 meses | Quinzenal | `em_estruturacao` | Criado “com foco” em Barcarena — sem evidência de autorização de turma | idem | **D** / **E** |

**Diferenciais / mercado de trabalho:** apenas prosa promocional nas `description`. Sem pesquisa de empregabilidade.

**Ausências de catálogo (D):** grau explícito (bacharelado/licenciatura/tecnólogo), carga horária, NDE, coordenador, PPC, reconhecimento vs autorização, vagas, turno confirmado, preço, calendário.

**Herdado e não trazido da versão anterior (notas do inventário / institucional antigo):** especializações HOF, Endodontia, UTI; Centro de Saúde e Estética; Programa Profissional SA. Não republicar sem confirmação.

### 1.5 Como ingressar

| ID | Conteúdo | Classe | Justificativa |
| --- | --- | --- | --- |
| G01 | Modalidades Vestibular, ENEM, 2ª graduação, transferência | **B** | Caminhos típicos de IES privada; herdados. Edital Barcarena inexistente. |
| G02 | Prova presencial em Barcarena **ou** plataforma digital | **E** | Afirma operação de prova sem edital. |
| G03 | Taxa isenta no lançamento | **E** | Condição comercial sem regulamento. |
| G04 | Resultado em até 48 horas | **E** | SLA promocional. |
| G05 | ENEM a partir de 2015 + descontos por pontuação | **E** | Regra e tabela de bolsas ausentes. |
| G06 | Dispensa de vestibular para diplomados; descontos especiais | **E** | Sem política oficial. |
| G07 | Aproveitamento integral de matérias na transferência | **E** | “Integral” é afirmação forte e provavelmente inexata. |
| G08 | Lista de documentos de matrícula | **B** / **C** | Checklist genérico de IES; falta edital que a torne oficial para 2026.1. |
| G09 | CTA inscrição | **C** | URL vazia (bom); copy ainda convida a “ir para inscrição”. |

### 1.6 Benefícios

| ID | Programa | Classe | Justificativa |
| --- | --- | --- | --- |
| B01 | FAUNA Experience (UI: “Programa Confirmado”) | **E** | Flag de código. Ritos e joia vêm de Belém. Projeto Acolher em Barcarena sem registro. |
| B02 | Meu Amigo Vale Muito — tabela até 80% | **E** | Percentuais herdados; aviso de pendência existe, mas a tabela é o elemento visual dominante. |
| B03 | Sou FAUNA com Orgulho — 30% a 80% | **E** | Idem. |
| B04 | Club FAUNA | **C** / **D** | Conceito herdado; parceiros de Belém (ex.: Gramophone Café, citado no inventário) **não** devem ser republicados. Carteirinha/app inexistentes. |

### 1.7 Vida acadêmica

| ID | Conteúdo | Classe | Justificativa |
| --- | --- | --- | --- |
| V01 | Portais (Aluno, Professor, Coordenador, SOOL, FAUNA Flix, Minha Biblioteca) | **B** nomes / **D** URLs | Nomes herdados; `href: ''`, `available: false` — postura correta. Copy ainda descreve funções como se o serviço existisse. |
| V02 | Biblioteca física em Barcarena + “mais de 10.000 títulos” | **E** | Quantitativo e espaço físico sem confirmação. |
| V03 | Portal CAPES | **C** | Acesso CAPES depende de credenciamento/contrato; não documentado para o polo. |
| V04 | Guias ABNT / TCC | **D** | Citados, sem arquivo. |
| V05 | Talentos S/A | **B** | Agência de Belém; “convênios em formalização”. |
| V06 | FAUNA LAB | **B** / **C** | Presente no site anterior; 3.0 admite estruturação. Homepage é mais assertiva que a página interna. |
| V07 | Diplomas conforme Portarias MEC 330/2018 e 554/2019 | **E** | Cita atos federais genéricos de diplomação digital como se o serviço da FAUNA Barcarena já estivesse no regime. |
| V08 | Validador de diplomas indisponível | **A** (postura) | Empty state honesto. |

### 1.8 Diretoria e docentes

| ID | Conteúdo | Classe | Justificativa |
| --- | --- | --- | --- |
| D01 | Página sem docentes fictícios (`FACULTY_MEMBERS = []`) | **A** | Governança correta. |
| D02 | Copy “informações oficiais já confirmadas” | **E** | Contradiz a lista vazia e a ausência de foto. |
| D03 | Bio do diretor parafraseada da mensagem institucional | **B** | Não é currículo. |
| D04 | Coordenadoras do site anterior | **D** (3.0) | Não republicar até a Direção acadêmica autorizar lista de Barcarena. |

### 1.9 Notícias e eventos

| ID | Conteúdo | Classe | Justificativa |
| --- | --- | --- | --- |
| Q01 | Eventos vazios + recusa de copiar agenda de outras unidades | **A** | `events.ts = []`; copy explícita. |
| Q02 | Evento anterior “Aula Show - Dr Matheus de Carvalho” | **B** (origem) / **D** (3.0, de propósito) | Site anterior `/eventos`. Não tratar como agenda de Barcarena. |
| Q03 | Três notícias 28/09, 02/10 e 15/10/2026 | **E** | Sem autor, fonte, assessoria, matéria completa (`fullText` ausente). Imagens de banco/projeto. Tom de fato jornalístico. |
| Q04 | Link “Ler matéria completa” | **C** / **E** | Abre modal; não há conteúdo longo nem URL canônica. |

### 1.10 Contato, rodapé, redes

| ID | Conteúdo | Classe | Justificativa |
| --- | --- | --- | --- |
| C01 | Telefone/WhatsApp (91) 98121-2525 | **E** | Presente só no 3.0. Site anterior usa e-mail FINAMA. Sem confirmação da Direção. |
| C02 | E-mail `contato@fauna.edu.br` | **E** | Anterior: `atendimento@finama.edu.br`. Domínio e caixa não verificados. |
| C03 | Horário 8h–19h, seg–sex | **C** | Sem fonte. |
| C04 | Cidade Barcarena · Vila dos Cabanos; endereço não confirmado; mapa omitido | **A** (postura) / **D** (logradouro) | `addressConfirmed: false` é o padrão certo. |
| C05 | Ouvidoria = mesmos canais gerais | **C** | Sem canal independente, prazo ou responsável. |
| C06 | Trabalhe Conosco = enviar CV ao e-mail geral | **C** | Sem vagas, política ou formulário. |
| C07 | Redes (IG, FB, YT, LinkedIn, TikTok) URLs vazias | **A** (não inventar) / **D** (perfis) | Correto. |
| C08 | Instagram/redes da versão anterior | **Limitação** | Não extraídos desta auditoria na homepage truncada; não copiar URLs de Belém sem checagem. |

---

## 2. O que a versão anterior tem e o 3.0 ainda não incorporou

Incorporar **somente** após confirmação para Barcarena.

| Conteúdo na versão anterior | Status no 3.0 | Recomendação |
| --- | --- | --- |
| Seis campi de Belém + CEPs | Propositalmente omitido | Manter omitido. |
| E-mail `atendimento@finama.edu.br` | Substituído por `contato@fauna.edu.br` | Confirmar qual caixa é oficial para Barcarena. |
| Mensagem longa do diretor + “Faculdade Boutique” Norte/Nordeste | Versão resumida | Pedir texto oficial para o polo. |
| Missão integral | Resumo | Restaurar texto jurídico-institucional se a Direção confirmar que vale para toda a IES. |
| Coordenação Psicologia (bio completa) e Direito (nome) | Ausente | Solicitar lista de Barcarena; não copiar Belém. |
| Evento Aula Show | Ausente (correto) | Só publicar agenda local. |
| FAUNA LAB / ritos Experience / benefícios percentuais | Presentes de forma parcial ou mais promocional | Validar regulamento **antes** de percentuais. |
| Páginas /cursos, /contato etc. | 404 na versão antiga | O 3.0 já tem IA de páginas; falta substância oficial, não rotas. |

---

## 3. Auditoria editorial (sem reescrever agora)

### Qualidade geral

- **Identidade amazônica e Barcarena:** consistente no tom (território, hidrovia, bioeconomia). Risco: transformar vocação em fato de campus.
- **Credibilidade:** avisos de validação existem, mas convivem com tabelas de desconto, catálogo presencial, galeria de espaços e notícias datadas.
- **Nomenclatura:** FAUNA / FaUnA / Faculdade Boutique / polo / campus / unidade misturam-se. Timeline fala em “Unidade Prime” (Belém) no mesmo bloco de Barcarena.
- **Redundâncias:** Método Saber Mais, Experience e Talentos S/A repetem-se na home, institucional, benefícios e vida acadêmica, com **graus diferentes de certeza**.
- **Conversão:** CTAs fortes (“Inscrever-se”) sem destino. Isso frustra e parece processo ativo.
- **SEO:** H1s bons; notícias sem slug, autor, schema, texto longo. Cursos sem dados ricos (carga, MEC). Título de edital 2026.1 indexável sem PDF é risco.
- **Expressões a evitar na próxima redação:** “processo revolucionário”, “divisor de águas”, “estilo Hollywood”, “joia exclusiva”, “pioneirismo”, “marca registrada”, “aproveitamento integral”, “os mais elevados índices”, “programa confirmado” sem ato.

### Contradições internas (E)

1. Inventário: missão/visão “preservados integralmente” × visão reescrita.
2. Inventário: FAUNA Experience / Talentos / portais “validado” × páginas internas “em formalização”.
3. Benefícios: badge verde “Programa Confirmado” × falta de regulamento de Barcarena.
4. Faculty: “já confirmadas” × lista vazia.
5. Footer: credenciamento MEC × avisos de portaria gradual.
6. Home Experience (anel, Hollywood, empresas) × Benefícios (validação) × Eventos (vazio).

---

## 4. Riscos de publicação (não apagar agora; tratar na etapa editorial)

| Risco | Classe / prioridade | Ação recomendada na próxima etapa |
| --- | --- | --- |
| Cursos com duração, turno e presencial sem ato MEC de Barcarena | P0 | Rebaixar a “pré-catálogo / em estudo” até portaria; ocultar turnos se não confirmados. |
| Footer “Credenciamento MEC sob regulação oficial” | P0 | Só publicar com código e-MEC / portaria; senão frase neutra de IES em regulação. |
| Edital 2026.1 e relatórios CPA listados sem arquivo | P0 | Remover título específico ou marcar “documento ainda não publicado” sem nome de edital. |
| Tabelas 35–80% e 30–80% | P0 | Não exibir percentuais até regulamento assinado para o polo. |
| Galeria de campus conceitual lida como foto real | P0 | Reforçar rótulo “imagem conceitual”; não usar fotos de outro campus como Barcarena. |
| Mérito (ouro e rubi), Manto, kits como garantia local | P1 | Condicionar a “tradição da IES, calendário de Barcarena a definir”. |
| Telefone, WhatsApp, e-mail, horário | P0 | Confirmar ou retirar. Número errado é dano reputacional imediato. |
| Notícias datadas sem assessoria | P1 | Tratar como rascunho interno ou retirar do ar. |
| “Mestres e doutores” / coordenação inexistente | P1 | Remover titulação coletiva até lista. |
| Taxa isenta, 48h, ENEM 2015+, aproveitamento integral | P1 | Depender do edital. |
| 10.000 títulos, biblioteca física, CAPES | P1 | Quantificar só com contrato. |
| Portarias 330/2018 e 554/2019 aplicadas ao polo | P1 | Citar só quando o serviço de diplomação existir. |
| Docentes fictícios | — | **Já evitado.** Manter. |
| Eventos fictícios | — | **Já evitado.** Não importar Aula Show. |
| CTA sem URL | P1 | Copy de “inscrições em breve” até houver link. |

---

## 5. Matriz de pendências

| Página | Conteúdo | Situação | Problema | Informação necessária | Prioridade |
| --- | --- | --- | --- | --- | --- |
| Global | Credenciamento / e-MEC | E | Afirmação sem ato | Código IES, portarias, situação do polo | P0 |
| Global | Contato (fone, WhatsApp, e-mail, horário) | E | Não cruzado com fonte oficial | Canais homologados da Direção | P0 |
| Global | Endereço e mapa | D | Só município | Logradouro, CEP, horário de visitação | P0 |
| Cursos | Catálogo 8+2 | E | Oferta detalhada sem regulatório | Lista oficial Barcarena: nome, grau, modalidade, duração, turno, CH, vagas, ato | P0 |
| Cursos | Inscrição | C | Botão sem URL | URL única de processo seletivo (ou “em breve”) | P1 |
| Cursos | Extensão | A (vazio) | — | Só publicar quando houver turmas | P2 |
| Institucional | Missão/visão/valores | E | Texto divergente da versão anterior | Versão jurídica assinada | P1 |
| Institucional | História 2018–2022 | B | Mistura Belém e Barcarena | O que pode ser história da IES vs o que é só Belém | P1 |
| Institucional | Método Saber Mais | B | Superlativos | Texto pedagógico oficial + se vale no polo | P2 |
| Institucional | CPA | E | Títulos sem PDF | Relatórios ou ocultar lista | P0 |
| Institucional | LGPD / DPO | C | Canal vago | Nome/e-mail do encarregado, política PDF | P1 |
| Institucional | Editais, regimento, normas | E | Itens sem arquivo | PDFs ou não listar | P0 |
| Como ingressar | Regras promocionais | E | Isenção, prazos, ENEM, descontos | Edital 2026 | P0 |
| Como ingressar | Documentos | B | Checklist genérico | Lista do edital | P1 |
| Benefícios | Experience “confirmado” | E | Flag ≠ prova | Regulamento de ritos no polo | P1 |
| Benefícios | Tabelas de desconto | E | Percentuais de Belém | Regulamento Barcarena ou ocultar tabela | P0 |
| Benefícios | Club FAUNA | D | Sem parceiros | Convênios locais ou não publicar rede | P2 |
| Vida acadêmica | Portais | D | URLs vazias | Links SOOL, AVA, Minha Biblioteca | P1 |
| Vida acadêmica | Biblioteca 10.000 títulos | E | Número sem fonte | Contrato e existência física | P1 |
| Vida acadêmica | Talentos S/A / LAB | B | Promessa de empregabilidade | Escopo real do polo | P2 |
| Home | Campus conceitual | E | Foto ≠ prédio | Legenda obrigatória + fotos reais quando houver | P0 |
| Home | Notícias | E | Matérias sem fonte | Pauta da comunicação ou retirar | P1 |
| Eventos | Agenda | A (vazia) | — | Primeira agenda local | P2 |
| Docentes | Lista | A (vazia) | Copy “já confirmadas” | Nomes, cargos, titulação, foto, Lattes | P1 |
| Contato | Ouvidoria / vagas | C | Canal único | Fluxo e responsável | P2 |
| Contato | Redes sociais | D | Hrefs vazios | URLs oficiais | P2 |
| SEO | Metas, slugs, schema | D | Fora desta etapa de copy | Títulos oficiais após dados P0 | P3 |

---

## 6. Conteúdos aproveitáveis já agora (com ressalva)

Aproveitar **estrutura e tom**, não os números nem as instalações:

- Arquitetura de informação e rótulos de navegação.
- Empty states honestos: eventos, docentes, extensão, mapa, redes, validador, URLs de inscrição.
- Recorte territorial (Barcarena / Amazônia) como posicionamento, desde que não descreva campus pronto.
- Nome da IES, mantenedora e diretor (com foto/Lattes pendentes).
- Avisos `ValidationNotice` — devem passar a ser a regra visual dos blocos de curso e benefício, não um rodapé.
- Checklist de documentos como rascunho a substituir pelo edital.
- Decisão de **não** importar campi de Belém, evento Aula Show e docentes incompletos.

Não aproveitar sem nova autorização: percentuais, turnos, “presencial”, relatórios CPA nomeados, edital 2026.1, notícias datadas, anel de ouro e rubi como fato, 10.000 títulos, taxa isenta, 48 horas, credenciamento genérico.

---

## 7. Ordem recomendada para a etapa editorial seguinte

1. **Bloqueio P0:** MEC/e-MEC, contato, endereço, catálogo (o que pode ou não aparecer), percentuais, documentos nomeados sem arquivo, galeria de campus.
2. **Edital e ingresso:** um PDF desbloqueia Como Ingressar, CTA, datas e documentos.
3. **Missão/visão/valores e mensagem da Direção** (texto único da IES).
4. **Cursos autorizados** com grau, CH, turno, ato; o restante sai do catálogo público ou vai para “em estudo” sem CTA de inscrição.
5. **Docentes e coordenação** só com Lattes.
6. **Benefícios** só com regulamento; Experience como tradição da IES, calendário local à parte.
7. **Portais, biblioteca, redes.**
8. **Notícias e eventos reais.**
9. **P3:** SEO, enxugamento de superlativos, nomenclatura FAUNA vs FaUnA, consistência polo/campus.

---

## 8. Contagem desta auditoria

- **Páginas de aplicação auditadas:** 11 (`/`, institucional, diretoria-docentes, cursos, como-ingressar, benefícios, vida-acadêmica, eventos, notícias, contato, 404), mais Header/Footer.
- **Itens classificados (IDs desta ficha):** 80+ (blocos I, H, N, cursos, G, B, V, D, Q, C).
- **Páginas da versão anterior obtidas com conteúdo:** 3 (`/`, `/eventos`, `/institucional`).
- **Rotas anteriores com 404:** 6.
- **Arquivos da aplicação alterados nesta etapa:** nenhum.
