# FAUNA 3.0 — Preparação de homologação (Etapa 07)

Data: 19/10/2026. Base aprovada: 567f55b3ce5cda0a9ce2e2da7f7a193f515c8e68.

## Situação da entrega na preparação inicial de 19/10/2026

Preparação local concluída, sem deploy, commit ou push, conforme a orientação posterior do usuário. Ainda não existe URL HTTPS de homologação verificada nesta tarefa. Projeto, equipe, plano e proteção efetiva na Vercel dependem de inspeção manual da conta.

A consulta pública aos deployments do repositório não retornou registros. Isso não comprova ausência de projeto Vercel. Não foi presumido nem criado vínculo com projeto algum, não houve alteração de domínio ou configuração de conta.

A branch local homologacao foi criada a partir de 567f55b em um worktree isolado. Ela ainda aponta ao commit-base e contém alterações não commitadas. main e origin/main continuam em 567f55b. O worktree principal, seus arquivos locais e o servidor de desenvolvimento existente foram preservados.

## Arquivos preparados

- vite.config.ts: diferencia o build de homologação e injeta meta robots no HTML estático.
- src/components/ui/EnvironmentNotice.tsx: aviso discreto antes do rodapé, sem posição fixa ou sobreposição.
- src/App.tsx: inclui o aviso condicionado ao ambiente.
- .env.example: documenta as variáveis, sem ativá-las por padrão.
- docs/HOMOLOGACAO_ETAPA07.md: este roteiro e os resultados.

Nenhum conteúdo institucional, retrato, cadastro, dependência, versão de pacote, arquivo binário ou regra do React Router foi alterado. vercel.json conserva o rewrite /(.*) para /index.html.

## Ativação por ambiente

Variável de build:

VITE_APP_ENV=homologacao

Na Vercel, configurá-la exclusivamente no escopo Preview, selecionando a branch homologacao. Não configurá-la em Production ou para todas as branches.

Quando VERCEL=1, a sinalização exige simultaneamente VERCEL_ENV=preview e VERCEL_GIT_COMMIT_REF=homologacao. Manter disponível a opção de exposição automática das variáveis de sistema no projeto. Não cadastrar valores falsos para essas variáveis da plataforma.

Efeitos do build de homologação:
- HTML inicial contém <meta name="robots" content="noindex, nofollow"> em todas as URLs servidas pela SPA.
- O aviso “Ambiente de homologação — Conteúdo sujeito à validação institucional.” aparece antes do rodapé.
- VITE_PUBLIC_SITE_URL é neutralizada no cliente nesse build, evitando canonical de produção em páginas de homologação.
- Não existe autenticação implementada no frontend. noindex/nofollow não restringe acesso a pessoas.

Em Production, o aviso e o bloqueio de indexação ficam desativados mesmo se VITE_APP_ENV for definida por engano. Sem opt-in, os elementos também ficam desativados localmente.

Não foi acrescentado bloqueio global em vercel.json, robots.txt ou index.html de origem que pudesse afetar o SEO de produção.

## Auditoria e testes locais

- git status e git fetch origin executados. Base main/origin/main confirmada em 567f55b.
- Foram registrados hashes SHA256 dos 58 arquivos previamente modificados ou não rastreados, incluindo Microsoft/ e acervo documental.
- package.json, package-lock.json existente e vercel.json inspecionados.
- npm run lint passou na base e na preparação.
- npm run build passou na base e nas variantes Preview/homologacao e Production.
- Teste de Production manteve VITE_APP_ENV=homologacao propositalmente: sem aviso e sem noindex/nofollow.
- Chrome headless: 108 verificações, zero falhas, nos builds locais.
- Larguras: 375, 430, 768, 1024 e 1440 px.
- Sem overflow horizontal nas páginas verificadas, com um H1 e metadados de homologação preservados.
- URL direta e HTML sem execução de JavaScript: noindex/nofollow presente nas 14 páginas.
- Fotografias oficiais dos três coordenadores carregadas após entrada no viewport, com alt.
- Navegação interna, histórico, menu mobile, animação GSAP da formação e reduced motion verificados.
- Sem exceções JavaScript registradas. Captura do aviso inspecionada.
- Build Production verificado no navegador em home, Direito e Psicologia, sem aviso e sem bloqueio SEO.

Páginas verificadas:
1. /
2. /institucional
3. /institucional/diretoria-docentes
4. /cursos
5. /cursos/direito
6. /cursos/enfermagem
7. /cursos/psicologia
8. /como-ingressar
9. /beneficios
10. /vida-academica
11. /noticias
12. /eventos
13. /contato
14. /nao-existe (página 404 da SPA)

Limites: não foram verificados HTTPS remoto, autenticação Vercel, comportamento do CDN, convites a avaliadores, dispositivos físicos, Safari ou Firefox. O rewrite da Vercel precisa ser validado no preview real. A página 404 da SPA não garante status HTTP 404 na hospedagem com fallback.

Os servidores temporários de comparação foram usados somente em loopback. Eles não fornecem autenticação nem são um endereço de homologação para compartilhar com a direção.

## Roteiro manual no painel da Vercel

### 1. Identificar a conta e o projeto antes de qualquer deploy

Entre na Vercel, selecione a equipe responsável e procure o projeto da FAUNA. Em Settings → Git, confira o repositório exato: contatobredi-gif/Fauna. Registre nome, Project ID, equipe, Production Branch e domínios atuais.

Não selecione projeto só por nome parecido. Não reconecte nem sobrescreva outro repositório. Se a Production Branch ou a configuração atual forem diferentes do esperado, interrompa e revise com o responsável.

Se não houver projeto, abra Add New → Project, autorize o GitHub a acessar somente o repositório necessário e selecione contatobredi-gif/Fauna. Defina um nome novo e exclusivo a confirmar com o responsável, sem reutilizar um projeto existente.

A importação inicial pelo painel inicia um deployment ao clicar Deploy e pode criar um deployment Production no novo projeto. Portanto, não conclua essa primeira importação como se ela já fosse um Preview protegido. Antes desse primeiro deploy, confirme proteção aplicável desde a criação, ausência de domínio oficial e autorização específica para a importação inicial. Se a conta/painel não permitir garantir isso antes da publicação, pare nessa tela e peça ao administrador a criação/configuração protegida do projeto; depois continue pelo fluxo de Preview abaixo.

### 2. Conferir build sem mudar produção indevidamente

Configuração esperada:
- Framework Preset: Vite.
- Root Directory: raiz do repositório.
- Build Command: npm run build.
- Output Directory: dist.
- Install Command: npm ci (há package-lock.json; interromper se o lock estiver divergente).
- Node: versão compatível com Vite 8; testes locais usaram Node 24.20.0.

Preserve vercel.json e as regras de SPA. Em projeto já utilizado, confira os valores existentes antes de mudar configurações compartilhadas, pois alterações de projeto também podem afetar builds futuros de produção.

### 3. Manter a separação entre main e homologacao

Em Settings → Environments → Production → Branch Tracking (ou opção equivalente de Production Branch), confirme main como produção. Não troque a Production Branch para homologacao.

homologacao deve ser uma branch Preview. Não adicionar domínio definitivo, alterar DNS, atribuir domínio de produção ao preview, clicar Promote to Production ou fazer merge na main para esta etapa.

A branch homologacao ainda não está no GitHub. Antes de publicar o código será necessária autorização separada para criar um commit com somente os cinco arquivos desta etapa e fazer push exclusivamente dessa branch. Esta tarefa não executou essas ações. O painel não consegue usar modificações que só existem no worktree local.

### 4. Restringir o acesso ANTES do preview

No projeto correto, acesse Settings → Deployment Protection.

Para um projeto existente cuja produção deve continuar acessível, prefira Vercel Authentication com Standard Protection, verificando que os previews estão cobertos e que os domínios de produção não terão seu comportamento alterado. Não selecionar All Deployments nesse projeto sem avaliar o efeito sobre a produção.

Se for um projeto novo e exclusivo de homologação, All Deployments com Vercel Authentication pode proteger também suas URLs iniciais; confirmar antes da importação. Não alterar políticas de outros projetos por suposição.

A documentação consultada informa Vercel Authentication em todos os planos. Password Protection depende do plano e pode gerar cobrança; não habilitar recurso pago sem autorização. Não remover autenticação para facilitar a visita do cliente.

Defina como cada avaliador terá acesso com a conta Vercel e as permissões adequadas, ou outro método realmente disponível no plano. Não distribuir links que ignorem a proteção como se fossem autenticação individual.

Sem conseguir habilitar e testar um controle adequado, não publicar material pendente.

### 5. Configurar a variável só no preview correto

Em Settings → Environment Variables:
- Key: VITE_APP_ENV
- Value: homologacao
- Environment: somente Preview
- Git Branch: homologacao

Confirme a disponibilidade das variáveis de sistema VERCEL, VERCEL_ENV e VERCEL_GIT_COMMIT_REF para o build. Não ativar VITE_PUBLIC_SITE_URL com um domínio presumido.

Variáveis novas só afetam builds posteriores: será necessário criar/recriar o Preview após configurá-las.

### 6. Criar o Preview após autorização de commit/push

Depois de a branch homologacao e seu commit de preparação estarem publicados com autorização, usar Deployments → Create Deployment e selecionar a branch homologacao. Se o painel pedir o contexto da branch, escolher homologacao, não main.

Conferir no resumo: Environment = Preview, branch = homologacao e SHA = commit de preparação autorizado. O SHA não deve ser presumido como 567f55b, pois esse é apenas o commit-base, sem as alterações locais desta etapa.

Só então concluir a criação do deployment, após conferir a proteção. O Git integrado também pode iniciar o Preview automaticamente no push; por isso, proteção e variáveis precisam estar configuradas ANTES de autorizar o push.

### 7. Verificação de aceite e compartilhamento

- Copiar a URL HTTPS efetivamente gerada em Deployments; não inventar um hostname *.vercel.app.
- Abrir em janela anônima sem sessão e verificar que a autenticação bloqueia o conteúdo, inclusive rotas diretas e retratos.
- Entrar como avaliador autorizado e conferir as 14 páginas, recarregamento e navegação.
- Conferir no HTML a meta robots com noindex, nofollow e o aviso antes do rodapé.
- Conferir X-Robots-Tag no preview remoto. A Vercel documenta noindex por padrão em seus previews; isso não substitui autenticação.
- Garantir que o domínio de produção continua apontando ao deployment anterior.
- Registrar URL, projeto/equipe, branch, SHA, proteção e autorização de acesso da direção.
- Não compartilhar o preview antes dessas verificações.

## Pendências para a publicação definitiva

- Projeto/equipe/plano Vercel ainda não identificados e proteção não habilitada nesta tarefa.
- Commit/push de homologacao e deployment remoto aguardam autorização e configuração manual.
- Atos regulatórios, grau, modalidade, turnos, duração, carga horária, vagas e processo seletivo dos cursos continuam pendentes.
- URLs oficiais de inscrição permanecem vazias; não há destino fictício.
- Contatos, horários, endereço e documentos precisam do visto institucional antes da publicação definitiva; os dados herdados foram preservados, não reclassificados como confirmados nesta etapa.
- Imagens de campus continuam conceituais/de referência, com os avisos existentes; não foram transformadas em fotografias de instalações homologadas.
- Domínio definitivo e canonical oficial dependem de autorização.
- Noindex não autentica nem controla acesso.

## Referências oficiais consultadas

- https://vercel.com/docs/git
- https://vercel.com/docs/environment-variables
- https://vercel.com/docs/deployment-protection
- https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/vercel-authentication
- https://vercel.com/docs/deployment-protection/methods-to-protect-deployments/password-protection
- https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines

As opções exibidas e a política de acesso efetiva da conta precisam ser confirmadas pelo administrador no painel antes de qualquer publicação.

## Revisão para PR — 20/10/2026

O usuário autorizou criar um commit exclusivamente em homologacao e preparar um PR contra main para Angelo revisar a publicação na Vercel. As referências anteriores a ausência de commit/push descrevem a preparação inicial.

O worktree foi localizado e recuperado sem reconstrução. A base main/origin/main permanece em 567f55b. A branch contém o código completo e as fotografias rastreadas da Etapa 06; o commit de preparação adiciona somente o aviso/configurações de ambiente e esta documentação. Não é necessário recadastrar os cursos ou copiar retratos.

public/_redirects, preparado para o pacote manual Netlify, foi preservado localmente e permanece fora deste commit voltado à Vercel. Na Vercel continua valendo vercel.json; o ZIP Netlify, dist, node_modules, acervo não relacionado e arquivos pessoais não fazem parte do commit.

Antes do push é obrigatório confirmar o projeto Vercel correto e a proteção dos previews. A ausência de checks ou deployments na API GitHub não comprova ausência de integração. Sem comprovar proteção, interromper antes de enviar a branch e obter confirmação do usuário.

Para Angelo: conferir Vite, npm run build, dist, homologacao como Preview e VITE_APP_ENV=homologacao apenas no Preview dessa branch. Confirmar acesso protegido antes de compartilhar qualquer URL. Não fazer merge em main nem atribuir domínio definitivo nesta etapa.

Nesta revisão, npm run lint e npm run build passaram; os builds de Preview/homologacao e Production foram conferidos separadamente. Production permaneceu sem noindex/nofollow mesmo com a variável de homologação definida.
