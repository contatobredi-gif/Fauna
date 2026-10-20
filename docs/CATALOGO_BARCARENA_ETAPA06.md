# Catálogo de graduação da FAUNA Barcarena — Etapa 06

Implementação em 19/10/2026. Base: main, e5bb9b329d30343d61a51ee5ce84e49e359b2386, coincidente com origin/main e com a main remota consultada via git ls-remote. Sem commit ou push.

## Escopo e fontes

A Direção informou Direito, Enfermagem e Psicologia para apresentação no catálogo de Barcarena (Prompt 06). A indicação permite apresentar esses cursos; não comprova ato autorizativo, funcionamento, condições acadêmicas ou abertura de inscrições.

As coordenações e autorizações dos retratos vêm do cadastro oficial existente em src/data/faculty.ts (Prompt 05.2). Esse arquivo foi preservado integralmente. O catálogo referencia os identificadores e resolve o perfil publicado de Barcarena, sem copiar nomes, biografias ou caminhos das fotos.

Foram consultados:
- docs/AUDITORIA_CONTEUDO_FAUNA.md e docs/CHECKLIST_DADOS_OFICIAIS.md;
- docs/conteudo-coletado/cursos-graduacao.md e cursos-pos-graduacao.md;
- docs/conteudo-coletado/metodo-saber-mais.md e assets/imagens/INVENTARIO_IMAGENS.md;
- .cursor/rules/barcarena-catalogo-proprio.mdc;
- App, catálogo anterior, cena de formação, conteúdo, coordenações, navegação e configuração/componente de inscrição.

A missão institucional usada na seção de aprendizagem está em INSTITUTIONAL_COPY.mission, src/data/content.ts. Ela é apresentada como horizonte da IES. Não se afirma que haja laboratório, convênio, estágio ou organização pedagógica local já disponível. O acervo do Método Saber Mais não comprova etapas ou práticas específicas; essas alegações não foram importadas.

## Fonte do catálogo e governança

src/data/barcarenaCourses.ts centraliza os registros públicos desta etapa. Cada registro separa:
- identidade, área de conhecimento e categoria de formação;
- conteúdo editorial, competências, campos profissionais e composição visual;
- referência ao coordenador oficial;
- campos acadêmicos tipados e status de confirmação com fonte;
- origem da indicação pela Direção;
- chave de inscrição por curso e categoria.

Os campos acadêmicos só são apresentados com status confirmed_barcarena, valor não vazio e fonte institucional preenchida. Atualmente todos permanecem pending, com value e source nulos. A interface mantém uma comunicação conjunta de pendência, sem publicar estimativas.

O template reutilizável aceita registros adicionais sem duplicação de páginas. Para um novo curso, confirmar primeiro sua inclusão pela Direção, seu vínculo local de coordenação e os dados que podem ser publicados. O tipo de identificador permanece alinhado ao cadastro de faculty.ts.

## Cursos e textos editoriais

Os textos de apresentação profissional foram redigidos nesta etapa. São descrições gerais das áreas, não PPC, perfil oficial de egresso ou promessa de disciplinas aprovadas.

| Curso | Rota | Coordenação oficial |
| --- | --- | --- |
| Direito | /cursos/direito | Evanilde Gomes Franco |
| Enfermagem | /cursos/enfermagem | Adilson Mendes de Figueiredo Júnior |
| Psicologia | /cursos/psicologia | Flavia Beatriz Xavier do Vale |

### Direito

Resumo: “Compreender direitos, interpretar a sociedade e construir caminhos para a justiça.”

Destaque: “A justiça começa com um olhar atento para as pessoas.”

A descrição editorial aborda normas, instituições, cidadania, direitos fundamentais, conflitos, interpretação e responsabilidade social. Competências gerais: leitura crítica, argumentação, pesquisa, diálogo e reflexão ética. Campos relacionados: advocacia, consultoria, instituições de justiça, assessoria, pesquisa e educação. Nenhuma disciplina, núcleo de prática jurídica ou convênio é atribuído à FAUNA Barcarena.

### Enfermagem

Resumo: “Ciência e sensibilidade para compreender o cuidado e a saúde individual e coletiva.”

Destaque: “Cuidar é unir conhecimento e presença humana.”

A descrição editorial aborda cuidado, qualidade de vida, escuta, ciência, diversidade e responsabilidade profissional. Competências gerais: observação, comunicação, trabalho em equipe, análise científica e reflexão ética. Campos relacionados: atenção à saúde, comunidades, gestão do cuidado, pesquisa e educação. Não se afirma disponibilidade de hospitais conveniados, laboratórios ou simulação na unidade.

### Psicologia

Resumo: “Um olhar científico e humano sobre o comportamento, os vínculos e os processos psicológicos.”

Destaque: “Compreender o humano é abrir novas possibilidades.”

A descrição editorial aborda comportamento, processos psicológicos, relações humanas, contextos culturais e sociais, saúde mental e pesquisa. Competências gerais: observação, escuta, comunicação, leitura de pesquisas e reflexão ética. Campos relacionados: saúde, educação, organizações, comunidades e pesquisa. A apresentação resumida da coordenadora é lida do cadastro original e não determina componentes curriculares.

Os textos integrais, listas e variações visuais estão no campo editorial de cada registro em src/data/barcarenaCourses.ts. A interface informa que os campos profissionais dependem dos requisitos aplicáveis e não garante emprego, remuneração ou acesso a cargos.

## Imagens e composições

Não foram importadas fotografias temáticas do acervo antigo: o inventário não confirma autorização de reutilização e os banners podem carregar condições comerciais e informações regulatórias antigas.

CourseEditorialVisual usa cores, tipografia, formas e ícones já disponíveis no projeto, sem downloads ou dependências novas. São composições de interface, decorativas (aria-hidden), sem representação de pessoas ou instalações:
- Direito: justiça / cidadania / ética; ícone de balança;
- Enfermagem: cuidado / ciência / presença; ícone de cuidado;
- Psicologia: escuta / vínculos / pesquisa; ícone de conexões.

Retratos reais utilizados, exclusivamente com photo.authorized e sem edição dos arquivos:
- public/assets/equipe/evanilde-gomes-franco.jpeg;
- public/assets/equipe/adilson-mendes-de-figueiredo-junior.jpeg;
- public/assets/equipe/flavia-beatriz-xavier-do-vale.jpeg.

Alt e enquadramento são reaproveitados do cadastro oficial. Carregamento lazy e dimensões reservadas evitam downloads iniciais desnecessários e deslocamentos.

## Conteúdo histórico preservado fora do catálogo público

src/data/content.ts e o acervo documental permanecem intactos. COURSES_DATA deixou de ser consumido pela vitrine da home e por /cursos. Não houve exclusão de registros históricos.

Não são apresentados como ofertas locais: Biomedicina, Farmácia, Odontologia, Gestão de Recursos Humanos e Gestão Hospitalar. Tampouco as pós-graduações em Urgência e Emergência Hospitalar e em Gestão Estratégica, Sustentabilidade e ESG. As demais formações recuperadas no acervo (Educação Física/FCC, Fonoaudiologia, HOF, Endodontia e outras especializações) não foram importadas.

Também deixaram de aparecer no catálogo e na cena de formação: duração de cinco anos, turnos matutino/noturno, modalidade presencial, alegações sobre laboratórios, portaria em consolidação e corpo docente não confirmado.

## Navegação e experiência

- /cursos e /cursos?tipo=graduacao apresentam somente os três cursos locais.
- /cursos?tipo=pos e /cursos?tipo=extensao apresentam conteúdo institucional em preparação, sem listas de outras unidades.
- Busca e filtro por área permanecem disponíveis na graduação.
- A seleção da categoria continua na query string, compatível com voltar/avançar.
- Rotas /cursos/:slug usam um template com carregamento lazy.
- Slugs desconhecidos usam a página 404 existente.
- A home mantém sua cena de formação, o destaque selecionável e os efeitos GSAP existentes; os links levam às páginas individuais.
- O cadastro de navegação só recebeu ajuste da descrição de graduação para evitar afirmar modalidade ainda não confirmada. Header, footer e comportamento dos menus não foram modificados.
- Cada curso possui retorno ao catálogo, link para as coordenações e links para os demais cursos.
- As configurações de split de bundle, animações e rewrite de hospedagem foram preservadas.

## Inscrição e pendências acadêmicas

Os destinos oficiais continuam vazios em src/config/externalLinks.ts, preservado integralmente. O catálogo só mostra CTA externo nos cards quando getEnrollmentUrl retorna destino configurado. As páginas individuais e a home reutilizam EnrollmentCta e seu estado de indisponibilidade estabelecido. Nenhuma URL real foi inventada e nenhum formulário foi criado.

Pendentes por curso: grau, modalidade, duração, turnos, carga horária, vagas, ato autorizativo, situação de oferta e processo seletivo. Não foram criadas mensalidades, notas MEC, datas promocionais, condições de bolsa ou promessas de infraestrutura.

## SEO

Cada página individual recebe title, meta description, Open Graph e Twitter específicos, restaurados ao navegar para outra página. Há um único H1 e hierarquia de seções com H2.

Canonical e og:url só são inseridos quando VITE_PUBLIC_SITE_URL contém a origem HTTPS oficial aprovada. A variável não foi configurada nesta etapa. Exemplo de formato: origem HTTPS sem rota; não usar endereço de preview ou domínio presumido. Uma configuração inválida não publica canonical.

Os metadados são atualizados no cliente, conforme a arquitetura SPA existente. Não foi acrescentado serviço de renderização; prévias em robôs que não executam JavaScript dependem de uma futura estratégia de prerenderização/SSR.

## Preservação

Foi registrada uma lista SHA256 em pasta temporária para os 58 arquivos locais modificados ou não rastreados encontrados antes da implementação, incluindo Microsoft/ e acervo documental. Nenhum desses arquivos foi editado, apagado ou movido. A verificação final confirmou a integridade dos 58 arquivos.

Não foram executados git clean, git reset --hard, commit ou push.

## Arquivos desta implementação

Novos:
- src/data/barcarenaCourses.ts
- src/components/ui/CourseEditorialVisual.tsx
- src/hooks/useCourseSeo.ts
- src/pages/CursoPage.tsx
- docs/CATALOGO_BARCARENA_ETAPA06.md

Alterados:
- src/App.tsx
- src/pages/CursosPage.tsx
- src/components/sections/Scene04Formation.tsx
- src/data/navigation.ts

## Validação

- npm run lint: passou.
- npm run build: passou; rotas individuais continuam em chunk lazy, sem dependências novas.
- git diff --check: passou.
- Chrome headless com build de produção servido por vite preview: rotas diretas, recarregamento, categorias por query, busca, histórico voltar/avançar, 404 global e de cursos, página institucional, menus desktop/mobile, links entre cursos e estado de inscrição indisponível.
- Larguras: 375, 430, 768, 1024 e 1440 px. Catálogo, cursos, categorias, Diretoria e Docentes e 404 sem overflow horizontal. Formação da home também inspecionada nessas cinco larguras, sem conteúdo cortado.
- Retratos: três caminhos oficiais, alt e carregamento confirmados no navegador em todas as larguras, após scroll até a imagem lazy.
- GSAP da formação: destaque e grid visíveis após entrarem no viewport; reduced motion respeitado. Nenhuma exceção JavaScript nas verificações.
- SEO: títulos e descrições distintos, Open Graph, H1 único, ausência de canonical sem domínio oficial e restauração dos metadados ao sair da página.
- Capturas inspecionadas: hero de curso em mobile, catálogo desktop/mobile e retrato da coordenação de Psicologia.
- Link para Diretoria e Docentes: abre a página pelo início e preserva suas abas. O comportamento preexistente do salto suave para #coordenacao não foi modificado nesta etapa.
- Na primeira execução, verificações de retratos e efeitos foram antecipadas ao carregamento lazy e à entrada no viewport; foram repetidas no ponto correto. As verificações finais dos links e das cinco larguras passaram.
- Integridade: 58 de 58 arquivos locais previamente modificados ou não rastreados mantiveram exatamente os hashes SHA256 registrados antes da implementação. Microsoft/ e acervo documental preservados.

Não executado: envio de inscrição e navegação para um destino externo real, pois as URLs oficiais ainda não foram fornecidas; publicação em hospedagem; validação com domínio canônico real; testes em dispositivos físicos, Safari ou Firefox. Nenhuma inscrição foi enviada. A validação de recarregamento foi local; a configuração preexistente de rewrite da Vercel foi apenas inspecionada e preservada.

Artefatos de testes e capturas permanecem em pastas temporárias do sistema, sem inclusão no repositório. O servidor de preview utilizado nos testes foi encerrado.

Mensagem de commit sugerida (não executada):
feat: add Barcarena graduation catalogue and individual course pages
