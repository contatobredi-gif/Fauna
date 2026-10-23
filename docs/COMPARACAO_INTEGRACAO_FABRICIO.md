# Comparação e plano de integração — apresentação ao diretor Fabrício

Auditoria em 21/10/2026. Nenhum merge, commit, push, deploy ou ajuste na Vercel executado nesta etapa.

## Referências verificadas após git fetch origin

| Referência | Commit | Situação |
| --- | --- | --- |
| main / origin/main | 567f55b3ce5cda0a9ce2e2da7f7a193f515c8e68 | Iguais; preservadas |
| homologacao / origin/homologacao | 7f51cfcce46a917dc9c3c9d3872ae4f053aeeac3 | Iguais; preservadas |
| feature/fauna-cinematic-redesign | 8743a7482dd08aaabaef7a537982c8645ef07a0d | Versão visual aprovada; somente local |

O remoto anuncia apenas main e homologacao. A versão cinematográfica inclui integralmente seus históricos: contagem esquerda/direita main...feature = 0/4; homologacao...feature = 0/3. Não existem commits remotos divergentes neste momento. Isso não permite concluir que inexista trabalho ainda não enviado em outro computador ou branch não publicada.

## Worktrees e materiais locais

- Original: C:\Users\tiago\Downloads\Fauna-main\Fauna-main, main. Git indica 35 arquivos modificados; comparação individual com HEAD mostra exclusivamente CRLF versus LF em todos os 35. git diff e git diff --cached não apresentam alterações de conteúdo. Não normalizei, restaurei ou gravei nesses arquivos.
- Homologação anterior: C:\Users\tiago\AppData\Local\Temp\fauna-homologacao-20261019-220813. Único arquivo não rastreado: public/_redirects, fallback específico da Netlify. Preservado; não é necessário incorporá-lo para Vercel.
- Cinematográfico: C:\Users\tiago\Projects\FAUNA-worktrees\fauna-cinematic-redesign. Código aprovado sem mudanças nesta auditoria. Capturas anteriores não rastreadas preservadas; novos artefatos de auditoria e este relatório permanecem locais.
- Na pasta original: Microsoft/, ZIP Netlify e acervo de imagens não rastreado continuam intocados. Não serão incluídos na integração de código. Documentação já versionada continua preservada.
- Snapshot anterior de 59 arquivos da pasta original: 59 comparações por hash, zero diferenças.

Não foi possível atribuir novas melhorias funcionais ao outro desenvolvedor: nenhuma foi identificada nas referências disponíveis. As diferenças de finais de linha não devem ser apresentadas como desenvolvimento novo. Antes da integração definitiva, solicitar a referência exata dos commits que ele deseja preservar e atualizar novamente o remoto.

## O que compõe a versão candidata

1. Tudo de main: páginas institucionais, diretoria/docentes, catálogo e páginas individuais de Direito, Enfermagem e Psicologia, retratos autorizados, navegação, contatos e estados de informação pendente.
2. Commit 7f51cfc: .env.example, documentação de homologação, EnvironmentNotice, montagem do aviso em App.tsx e condições de ambiente/metadados em vite.config.ts.
3. Commits 9bb7491, d7f2ab1 e 8743a74: abertura cinematográfica aprovada, continuação editorial e cursos na homepage, ajustes visuais do cabeçalho, imagens conceituais locais e suas versões menores, identificação de IA, acessibilidade, testes e documentação.

Comparando a feature com homologacao, as páginas internas, src/config, os dados dos cursos e faculty.ts não foram alterados. Entre src/pages, apenas HomePage.tsx mudou; entre os dados, apenas os novos módulos cinematicOpening.ts e institutionalMedia.ts foram acrescentados. Os módulos da primeira proposta tipográfica permanecem no histórico/árvore, sem serem reativados.

## Conflitos atuais e pontos de revisão futura

Não há divergência de histórico entre as branches auditadas, portanto não há necessidade atual de resolver conflitos textuais. Nenhum merge, nem mesmo de simulação com alteração de índice, foi feito.

Se surgirem commits novos, revisar especialmente:

| Área | Política de integração |
| --- | --- |
| HomePage.tsx, CinematicOpening, InstitutionalContinuation e seus estilos/dados | Preservar a direção aprovada; qualquer alteração visual concorrente requer comparação e decisão |
| Header.tsx e navegação | Manter destinos, menus e acessibilidade; adaptar melhorias funcionais sem perder contraste/altura estável na homepage |
| App.tsx, vite.config.ts e metadados | Preservar rotas e isolamento entre homologação/produção |
| barcarenaCourses.ts, faculty.ts e configurações institucionais | Incorporar somente dados identificados e confirmados, sem trocar pendências por informações presumidas |
| Fotografias públicas autorizadas | Preservar as três coordenações; não substituir por imagens de acervo não autorizadas |
| Documentação | Preservar os registros; conciliar conteúdo de forma explícita, sem substituir arquivos inteiros por conveniência |

## Validação e problemas críticos

- npm run lint: aprovado. O comando do projeto executa tsc --noEmit; não há suíte ESLint configurada.
- npm run build: aprovado.
- Chrome headless, scripts/audit-integration.mjs: 126 verificações aprovadas, zero falhas, zero exceções JavaScript.
- URLs diretas: Institucional, Diretoria e Docentes, Cursos, Direito, Enfermagem, Psicologia, Como Ingressar, Benefícios, Vida Acadêmica, Notícias, Eventos, Contato e rota inexistente/404; homepage validada pela suíte cinematográfica.
- Navegação interna ao catálogo, retorno à homepage, menus desktop/teclado e mobile, destinos locais nas páginas e limpeza de animações aprovados. A inspeção de destinos não representa teste exaustivo de cada aba/hash ou link externo.
- Imagens presentes nas páginas internas carregaram, incluindo os três retratos oficiais e as imagens das notícias. Fotografias conceituais da abertura e dos cursos também carregaram.
- Varredura de referências literais de /assets e /logo.png no código: nenhum arquivo local ausente. Referências dinâmicas da experiência foram verificadas no navegador.
- Desktop 1440px, tablet 768px e mobile 375/390/430px; reduced motion, scroll reverso e imagens lentas aprovados, sem overflow nos blocos testados ou salto de altura na abertura.
- Testes locais de resolução da configuração: ambiente padrão desativa homologação; Preview/homologacao com VITE_APP_ENV=homologacao ativa aviso e noindex/nofollow; produção e Preview de outra branch desativam. Nenhuma variável ou configuração remota foi alterada.

Não foi identificado problema crítico que justificasse alterar o código aprovado. Nenhuma imagem foi substituída.

Evidências: docs/integration-audit-preview/results.json e capturas na mesma pasta. O script de auditoria e este relatório estão não commitados; não alteram a aplicação.

## Decisões necessárias

1. Confirmar com o outro desenvolvedor se há commits ou mudanças funcionais fora das referências auditadas. Caso existam, receber os hashes/branch antes de definir a seleção final.
2. Retrato do diretor Fabrício: photo.authorized=false e sem src público, portanto o placeholder é intencional. Publicar o retrato exige autorização específica e preparação do arquivo; não tratar como imagem quebrada.
3. Confirmar o projeto/equipe Vercel e sua proteção efetiva antes de qualquer push que possa disparar um Preview automático. noindex/nofollow não controla acesso e não substitui autenticação. Proteção remota não foi auditada nesta etapa.
4. Preferir publicação pela branch homologacao: o código atual só ativa homologação em Preview dessa branch na Vercel. Deploy direto da feature não ativa esses indicadores, mesmo com a variável definida. Alterar esse comportamento seria uma decisão separada.
5. Conteúdo ainda pendente: atos regulatórios, modalidade, duração, turnos, carga horária, vagas, oferta/processo seletivo e URLs de inscrição; endereço definitivo e documentação oficial. Manter estados apropriados e validar contatos/horários antes da publicação definitiva. Imagens conceituais permanecem identificadas como IA, sem representar instalações confirmadas. A frase de encerramento continua como proposta editorial sujeita à validação.

## Plano de integração e publicação — somente após autorização

1. Combinar uma referência de corte com o outro desenvolvedor e executar novo fetch. Reavaliar os hashes e o inventário de alterações; preservar todos os worktrees existentes.
2. Criar uma branch de integração em novo worktree permanente, a partir de origin/homologacao atualizado. Preservar os commits da experiência aprovada e incorporar apenas melhorias concorrentes identificadas. Hoje a feature já contém todos os commits das duas branches; não há alteração funcional adicional a transplantar.
3. Se o histórico permanecer igual, a atualização de homologacao até a versão aprovada é compatível com fast-forward. Qualquer nova divergência exige nova revisão; não resolver automaticamente usando uma versão inteira dos arquivos.
4. Validar o resultado integrado: lint, build, auditoria de navegação/imagens e build de homologação. Revisar diff e lista exata de arquivos; excluir Microsoft/, acervo privado, ZIPs, node_modules, dist, credenciais e capturas temporárias. Código e documentação necessários permanecem.
5. Antes de enviar qualquer branch, confirmar o projeto de testes correto e a proteção de acesso. Solicitar autorização para o envio/integração escolhidos, considerando a possibilidade de Preview automático.
6. Preparar a atualização revisada de homologacao mantendo main preservada. Framework Vite, build npm run build, saída dist, VITE_APP_ENV=homologacao somente para o Preview dessa branch. São orientações futuras; nenhuma configuração foi modificada.
7. Validar a URL HTTPS protegida, URLs diretas, imagens, indicadores de homologação e navegação antes de compartilhar com Fabrício. Não associar domínio oficial. Publicação definitiva fica para aprovação posterior.

Servidor local permanece em http://127.0.0.1:5173/ para avaliação. HEAD da feature continua em 8743a74.

## Inventário exato de arquivos candidatos

Comparação origin/main...8743a74 (M = modificado; A = acrescentado). A lista abaixo corresponde ao código já aprovado; esta auditoria não o integrou a outra branch.
M	.env.example
A	docs/EXPERIENCIA_CINEMATOGRAFICA_INSTITUCIONAL.md
A	docs/HOMOLOGACAO_ETAPA07.md
A	docs/MIDIA_CONCEITUAL_FAUNA.md
A	docs/REDESIGN_CINEMATOGRAFICO.md
A	docs/REFINAMENTO_CINEMATOGRAFICO.md
A	public/assets/cinematic/arrival-concept-small.jpg
A	public/assets/cinematic/arrival-concept.jpg
A	public/assets/cinematic/immersion-concept-small.jpg
A	public/assets/cinematic/immersion-concept.jpg
A	public/assets/cinematic/law-concept-small.jpg
A	public/assets/cinematic/law-concept.jpg
A	public/assets/cinematic/nursing-concept-small.jpg
A	public/assets/cinematic/nursing-concept.jpg
A	public/assets/cinematic/presence-concept-small.jpg
A	public/assets/cinematic/presence-concept.jpg
A	public/assets/cinematic/psychology-concept-small.jpg
A	public/assets/cinematic/psychology-concept.jpg
A	scripts/validate-cinematic.mjs
M	src/App.tsx
M	src/components/layout/Header.tsx
A	src/components/sections/CinematicOpening.tsx
A	src/components/sections/InstitutionalContinuation.tsx
A	src/components/sections/cinematic-opening.css
A	src/components/sections/institutional-experience.css
A	src/components/ui/EnvironmentNotice.tsx
A	src/components/ui/InstitutionalImage.tsx
A	src/data/cinematicOpening.ts
A	src/data/institutionalMedia.ts
M	src/pages/HomePage.tsx
M	vite.config.ts
## Arquivos da pasta original marcados como modificados, somente CRLF/LF
 M .cursor/rules/barcarena-catalogo-proprio.mdc
 M README.md
 M docs/AUDITORIA_CONTEUDO_FAUNA.md
 M docs/CHECKLIST_DADOS_OFICIAIS.md
 M docs/IMPLEMENTACAO_EDITORIAL_ETAPA05.md
 M docs/INVENTARIO_DIRETORIA_DOCENTE.md
 M docs/conteudo-coletado/COMPARACAO_FAUNA_3.md
 M docs/conteudo-coletado/INVENTARIO_GERAL.md
 M docs/conteudo-coletado/assets/documentos/README.md
 M docs/conteudo-coletado/assets/imagens/INVENTARIO_IMAGENS.md
 M docs/conteudo-coletado/beneficios.md
 M docs/conteudo-coletado/biblioteca.md
 M docs/conteudo-coletado/contato.md
 M docs/conteudo-coletado/cpa.md
 M docs/conteudo-coletado/cursos-graduacao.md
 M docs/conteudo-coletado/cursos-pos-graduacao.md
 M docs/conteudo-coletado/documentos-academicos.md
 M docs/conteudo-coletado/eventos.md
 M docs/conteudo-coletado/formas-de-ingresso.md
 M docs/conteudo-coletado/homepage.md
 M docs/conteudo-coletado/institucional.md
 M docs/conteudo-coletado/lgpd.md
 M docs/conteudo-coletado/metodo-saber-mais.md
 M src/components/ui/EnrollmentCta.tsx
 M src/components/ui/SectionEyebrow.tsx
 M src/config/contact.ts
 M src/config/externalLinks.ts
 M src/config/socialLinks.ts
 M src/data/events.ts
 M src/data/faculty.ts
 M src/hooks/useHashTab.ts
 M src/pages/EventosPage.tsx
 M src/pages/FacultyPage.tsx
 M src/pages/NotFoundPage.tsx
 M vercel.json
