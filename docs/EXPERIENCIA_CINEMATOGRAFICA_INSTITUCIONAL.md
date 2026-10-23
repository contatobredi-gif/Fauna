# Experiência Cinematográfica Institucional — avaliação local

Data: 20/10/2026.
Branch: feature/fauna-cinematic-redesign.
Worktree: C:Users	iagoProjectsFAUNA-worktreesauna-cinematic-redesign
Base desta evolução: 9bb7491942c83243cb920c0b42960097cf053a89.

## Mudança de conceito

A abertura tipográfica anterior foi substituída por uma narrativa visual de marca. FAUNA aparece como assinatura; não há letras gigantes ampliadas ou recortadas, máscaras geométricas ou contadores de cenas.

A sequência implementada é:
- Chegada: passagem arquitetônica conceitual; “Uma nova forma de viver o ensino superior.”
- Imersão: aproximação a um espaço compartilhado; “Conhecimento que se transforma em experiência.”
- Presença: conversa de estudantes com uma educadora; “O conhecimento aproxima. A experiência transforma.”
- Manifesto: superfície clara; “Muito mais que uma faculdade.”
- Assinatura: composição dividida, FAUNA / A Faculdade Boutique.
- Formação: três histórias editoriais com imagens amplas e links de Direito, Enfermagem e Psicologia.
- Encerramento: “Aqui não diplomamos pessoas. Formamos profissionais.”, com aviso de proposta editorial sujeita à validação institucional.

## Execução em etapas

Chegada, Imersão, Presença e Manifesto foram implementados primeiro, inspecionados em screenshots e aprovados tecnicamente em 33 verificações locais antes da continuação. Isso não equivale a aprovação de direção de arte pelo cliente.

Depois foram incorporados Assinatura, Formação e Encerramento. O teste de navegação/responsividade existente foi atualizado para os novos elementos e ampliado.

A composição da homepage deixa de montar Scene02Essence, Scene03Manifesto e Scene04Formation, evitando repetição de manifesto e da formação com cards. Esses componentes foram preservados no código e no histórico. Scene05Knowledge e as cenas posteriores continuam existentes, sem reconstrução.

## Movimento e navegação

No desktop, o primeiro trecho usa um palco sticky nativo de 100svh ao longo de uma seção de 250svh: o movimento adicional equivale a 150svh. A rolagem continua sendo a do navegador, sem interceptar roda, teclado ou toque. Escala de imagem é sutil, com deslocamento e transição entre enquadramentos coerentes. Não há controles de slideshow, autoplay de slides ou vídeo simulado.

No mobile/tablet abaixo de 900px, as cenas ficam em sequência vertical e sem sticky. A adaptação usa pontos focais específicos e movimentos discretos das imagens. Em reduced motion, todas as cenas, imagens, textos e links permanecem no fluxo normal, sem timeline longa.

A navegação do header continua disponível. O logotipo na homepage tem base clara opaca e a superfície do header é clara e estável, com estilos restritos à homepage. Comportamentos de menu e páginas internas foram preservados.

O link de descoberta usa rolagem para um alvo real, transfere foco e evita a interferência de atualização de hash. Ctrl/Cmd/cliques modificados continuam com o comportamento nativo.

## Conteúdo e mídia

Imagens geradas com a ferramenta integrada image_gen, explicitamente permitidas pelo novo briefing. As seis cenas são conceituais, não registros da unidade. Origem, finalidade, prompts e substituição futura estão em MIDIA_CONCEITUAL_FAUNA.md.

A aplicação consome somente JPEGs locais em public/assets/cinematic/, com srcSet 840w/1680w, proporções reservadas, prioridade alta para a chegada e carregamento lazy das figuras posteriores. As três imagens do trecho inicial são preparadas juntas para evitar troca para uma imagem ainda não requisitada durante o scroll. Estados de carregamento mantêm cor de fundo e conteúdo legível; falhas possuem mensagem e não mostram ícone quebrado.

InstitutionalImage separa entrega de mídia do movimento. institutionalMedia.ts centraliza conteúdo inicial, origem e pontos focais. InstitutionalContinuation reutiliza BARCARENA_COURSES sem alterar dados acadêmicos.

As imagens não mostram clínicas, laboratórios especializados, escritório jurídico, placas, logotipos ou uma fachada identificada. Retratos oficiais das coordenações e páginas internas não foram editados. Inscrições não receberam URLs inventadas.

## Arquivos

Alterados:
- src/components/sections/CinematicOpening.tsx
- src/pages/HomePage.tsx
- src/components/layout/Header.tsx
- scripts/validate-cinematic.mjs
- docs/REDESIGN_CINEMATOGRAFICO.md (marcação como histórico)

Novos:
- src/components/sections/InstitutionalContinuation.tsx
- src/components/sections/institutional-experience.css
- src/components/ui/InstitutionalImage.tsx
- src/data/institutionalMedia.ts
- public/assets/cinematic/ (seis JPEGs e seis variantes leves)
- docs/MIDIA_CONCEITUAL_FAUNA.md
- docs/EXPERIENCIA_CINEMATOGRAFICA_INSTITUCIONAL.md

Capturas geradas para avaliação local: docs/institutional-preview/.
As capturas anteriores em docs/cinematic-preview/ foram preservadas.
Os antigos cinematic-opening.css e cinematicOpening.ts não são mais consumidos nesta versão, mas permanecem disponíveis para comparação.

## Validação

npm run lint e npm run build passaram. A suíte final teve 65 verificações e zero falhas. Inclui:
- chegada, imersão, presença e retorno da rolagem;
- manifesto, assinatura, formação e encerramento;
- menu mobile e submenu desktop durante a imersão;
- contraste estável do header;
- limpeza e recriação da timeline ao trocar de rota;
- rotas de cursos e Diretoria e Docentes;
- reduced motion;
- 1440, 768, 375 e 430px;
- ausência de overflow e textos cortados horizontalmente;
- todas as seis imagens carregadas com links corretos;
- imagens retardadas intencionalmente no Chrome: texto legível, espaço reservado e carregamento sem salto;
- ausência de exceções JavaScript.

O teste de imagens lentas retém as requisições de mídia via protocolo do Chrome, mantendo JS e CSS disponíveis, e depois as libera. É uma simulação de atraso de mídia, não medição de desempenho em uma rede móvel real.

Screenshots cobrem chegada, imersão, presença, manifesto, assinatura, formação e encerramento, além de mobile, reduced motion e carregamento de imagem.

Não testado: Safari, Firefox, dispositivos físicos ou avaliação estética formal pelo cliente.

Para repetir:
node scripts/validate-cinematic.mjs
(com o Vite em http://127.0.0.1:5173/)

## Avaliação e preservação

URL local: http://127.0.0.1:5173/
O processo Vite existente neste worktree permanece ativo para avaliação local, com atualização por HMR.

Não houve push, PR, merge, deploy ou modificação na Vercel. Não foram adicionadas dependências, backend ou configurações de produção.

A versão anterior pode ser revisada no commit 9bb7491 sem restaurar ou sobrescrever esta pasta: usar outro worktree caso seja necessário comparar lado a lado.

A pasta original e o worktree de homologação não foram usados para implementação. A integração futura dependerá de autorização e de comparar os novos commits do outro desenvolvedor.

Conferência final de preservação: 59 de 59 arquivos locais da pasta original mantiveram seus hashes SHA256. As duas branches de origem permaneceram em 567f55b (main) e 7f51cfc (homologacao). Os 12 JPEGs conceituais finais somam 2.040.070 bytes.
