# Refinamento final da experiência cinematográfica

Base local: d7f2ab170b0d3c74451979953caad017afa002ff.
Branch: feature/fauna-cinematic-redesign.
Worktree exclusivo: C:\Users\tiago\Projects\FAUNA-worktrees\fauna-cinematic-redesign.

## Ajustes

- Dissolução editorial entre fotografias existentes. Os textos têm intervalos separados de saída e entrada, inclusive no retorno do scroll, eliminando sua interferência na imersão.
- Aproximação discreta: escala máxima de 1,065 na chegada, 1,055 na imersão e 1,035 na presença. Mobile com deslocamento de apenas 1% em cada direção, sem sequência sticky.
- Imersão com título acima das pessoas; presença com texto sobre a área inferior da imagem. Nenhuma fotografia foi gerada, substituída ou filtrada.
- Cabeçalho claro e sólido na homepage, preservando contraste sobre fotografias e seções claras. Altura constante de 80px no desktop e 72px no mobile, com logotipo estável. Navegação e páginas internas preservadas.
- Hierarquia tipográfica mais contida na abertura e no mobile; legendas conceituais maiores; títulos e proporções dos cursos ajustados.
- Manifesto, assinatura, cursos, informações institucionais e aviso de validação editorial preservados.

## Arquivos de implementação

- src/components/sections/CinematicOpening.tsx
- src/components/sections/institutional-experience.css
- scripts/validate-cinematic.mjs
- docs/REFINAMENTO_CINEMATOGRAFICO.md

## Validação

npm run lint e npm run build: aprovados.
Chrome headless: 91 verificações aprovadas, zero falhas e zero exceções JavaScript.
Larguras: 1440, 768, 375, 390 e 430px. Transições amostradas nos dois sentidos, altura do cabeçalho, navegação por teclado, menu mobile, rotas internas, reduced motion e limpeza/recriação da timeline.
Imagens retidas e posteriormente liberadas: altura da abertura permaneceu em 950px, sem salto de layout.
Inspeção visual das capturas de chegada mobile, imersão desktop/mobile, presença e transição intermediária.

As capturas e results.json estão em docs/institutional-refinement-preview/ e permanecem locais, fora do commit, preservando também as capturas anteriores. Incluem chegada, transição intermediária, imersão, presença, manifesto, cabeçalho inicial e após scroll, assinatura e cursos. Imersão mobile registrada em 375, 390 e 430px.

Servidor local: http://127.0.0.1:5173/. Abra essa URL no Chrome; use Ctrl+F5 para recarregar. Avaliação mobile por emulação do navegador; testes em aparelhos físicos permanecem recomendados.

Preservação: 59 arquivos da pasta original comparados por hash, sem diferenças. main preservada em 567f55b3ce5cda0a9ce2e2da7f7a193f515c8e68. Nenhum push, PR, merge, deploy ou alteração na Vercel.
