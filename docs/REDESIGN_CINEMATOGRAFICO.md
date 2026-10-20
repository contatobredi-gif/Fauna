# Abertura cinematográfica FAUNA — avaliação local

Implementação: 20/10/2026.

## Isolamento e base

Branch: feature/fauna-cinematic-redesign.
Base identificada após git fetch origin: origin/homologacao, commit 7f51cfcce46a917dc9c3c9d3872ae4f053aeeac3.
Na auditoria inicial, main/origin/main estavam em 567f55b3ce5cda0a9ce2e2da7f7a193f515c8e68.

Worktree permanente:
C:Users	iagoProjectsFAUNA-worktreesauna-cinematic-redesign

O worktree original não foi usado para implementação. Suas alterações, arquivos não rastreados, acervo e ZIP de homologação foram preservados. A branch feature não tem upstream configurado. O worktree de homologação existente também não foi alterado.

As dependências foram instaladas com npm ci em node_modules próprio, sem junção com a instalação usada pelo outro desenvolvedor. Nenhuma dependência foi adicionada. Não houve alteração em Vercel, variáveis de projeto, domínios, main ou homologacao.

O servidor usa a variável VITE_APP_ENV=homologacao apenas no seu processo local, preservando a identificação de ambiente já existente. Nenhum arquivo .env foi criado.

## Experiência

A primeira viewport apresenta FAUNA em tipografia de grande escala, A FACULDADE BOUTIQUE, identificação discreta do território e um link de descoberta. Não há fotografia, cenário inventado, cards, contadores, números decorativos ou vídeo artificial.

No desktop, a rolagem nativa aproxima a tipografia. Um enquadramento opaco cresce e revela o manifesto “Muito mais que uma faculdade.” sobre o papel institucional. A sequência ocupa 260svh, com trecho sticky de 160svh de deslocamento; não intercepta roda, toque ou eventos de rolagem. A animação é reversível.

No mobile, a marca e o manifesto ficam em fluxo natural, sem sticky ou pin. Movimento breve de tipografia e revelação do texto acompanham a rolagem, sem reproduzir o zoom ampliado do desktop.

O link de descoberta rola até o manifesto e transfere o foco após a rolagem. O menu continua com os mecanismos existentes. A inscrição e o acesso ao catálogo continuam disponíveis no header e na área do manifesto.

A seção Nossa Essência e as cenas seguintes foram preservadas. A integração apenas neutraliza, por seletor restrito à homepage, a antiga margem negativa entre a abertura e Nossa Essência. Não houve reconstrução das seções posteriores.

Scene01Hero.tsx original foi preservado para comparação, mas a homepage desta branch monta CinematicOpening em seu lugar.

## Engenharia

- GSAP/ScrollTrigger reaproveitados da configuração existente.
- Contexto gsap.matchMedia com limpeza ao desmontar, trocar breakpoint e alterar a preferência de movimento.
- CSS de fallback mostra identidade e manifesto em fluxo normal.
- prefers-reduced-motion desativa a sequência sticky e as animações da abertura.
- Máscara, tipografia e papel mantêm a experiência mesmo sem acervo audiovisual novo.
- Sem novos pacotes pesados, scroll hijacking ou canvas/WebGL.
- Estilos prefixados para a abertura; único ajuste do header é uma regra CSS restrita ao header inicial da homepage, que troca o gradiente antigo pelo verde institucional.
- Páginas internas, dados acadêmicos, cursos, coordenações, fotografias, rotas, configurações de inscrição e Vercel não foram editados.

## Arquivos da implementação

- src/pages/HomePage.tsx
- src/components/sections/CinematicOpening.tsx
- src/components/sections/cinematic-opening.css
- src/data/cinematicOpening.ts
- scripts/validate-cinematic.mjs
- docs/REDESIGN_CINEMATOGRAFICO.md

Capturas e resultados locais de avaliação:
docs/cinematic-preview/

Esses artefatos gerados são materiais de revisão local e não são necessários para executar o site.

## Validação

npm run lint: passou.
npm run build: passou.

Chrome headless, 32 verificações, zero falhas:
- primeira tela e H1 único;
- ausência de fotografia/vídeo presumidos na abertura;
- manifesto e ações legíveis no fim da transição;
- retorno da rolagem ao estado inicial;
- link de descoberta e foco;
- continuidade para Nossa Essência;
- uma instância da timeline, limpeza ao navegar e recriação sem duplicação;
- larguras 375, 430, 768, 1024 e 1440 px, sem overflow na marca;
- layout mobile sem sticky;
- menu mobile acessível;
- reduced motion e retorno à animação sem duplicação;
- cursos, Direito, Enfermagem, Psicologia e Diretoria e Docentes preservados;
- ausência de exceções JavaScript.

Screenshots:
- opening-desktop.png
- transition-desktop.png
- manifesto-desktop.png
- opening-mobile.png
- manifesto-mobile.png
- reduced-motion.png

O primeiro teste apontou o foco antecipado do link de descoberta; a implementação foi corrigida e a suíte final passou. Não foram testados Safari, Firefox ou dispositivos físicos. A referência publicada FAUNA não pôde ser carregada pela ferramenta de consulta; a base técnica usada foi o código atualizado da branch de homologação.

Para repetir os testes, com o Vite da branch ativo em 127.0.0.1:5173:
node scripts/validate-cinematic.mjs

O script usa uma instância isolada de Chrome headless. A variável CHROME_PATH pode apontar para outro executável do Chrome. O perfil temporário não é salvo na pasta de screenshots.

## Avaliação no navegador

URL: http://127.0.0.1:5173/

O servidor Vite é exclusivo deste worktree, limitado ao loopback e permanece ativo para avaliação. A porta 5173 foi verificada livre antes da inicialização.

Se o processo for encerrado, abrir PowerShell nesta pasta:
C:Users	iagoProjectsFAUNA-worktreesauna-cinematic-redesign

Definir no processo:
$env:VITE_APP_ENV = 'homologacao'

Executar:
npm run dev -- --host 127.0.0.1 --port 5173 --strictPort

Se a porta estiver ocupada, não encerrar o processo de outra pessoa; escolher uma porta livre e usar a URL informada pelo Vite.

## Fotografias e vídeos futuros

src/data/cinematicOpening.ts possui uma união tipada para typography, photograph e video. O estado atual é typography, sem pedidos de mídia externa.

Após confirmação de origem, direitos de uso e vínculo com a unidade, poderão ser fornecidos:
- photograph: src e description;
- video: src, poster e description.

O slot DocumentaryMedia é independente do timeline de enquadramento. A integração de mídia real deve ser novamente validada em mobile, reduced motion, performance e enquadramento. Com reduced motion, vídeo tem fallback por poster. Não ativar imagens conceituais de instalações como se fossem ambientes reais.

## Integração futura

Nenhum push, PR, merge ou deploy foi autorizado nesta etapa. A implementação fica em um commit local da feature para comparação.

Antes de qualquer integração, obter autorização, executar fetch e comparar com os novos commits do outro desenvolvedor. Não substituir main nem aplicar mudanças sobre arquivos locais de terceiros. Conciliar eventuais conflitos apenas no worktree de integração autorizado.

Referência de interação consultada: https://landonorris.com/
A referência orienta escala e ritmo; nenhum recurso de marca, fotografia, código ou conteúdo foi copiado.
