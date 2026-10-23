# FAUNA 3.0 — revisão do Angelo

Preparação em 23/10/2026, na branch `feature/fauna-cinematic-redesign`.

## Base de integração

Referências conferidas após `git fetch origin`:

- `origin/main`: `fd75d287cb49f914f22b426f308a7180b95bd6af`.
- `origin/homologacao`: `7f51cfcce46a917dc9c3c9d3872ae4f053aeeac3`.
- Feature antes deste commit: `528cdfce912228c2c363d55f43486fab978aeb32`.

A main atual já é ancestral da feature: seis commits exclusivos da feature e nenhum exclusivo da main. Nenhum merge adicional ou resolução de conflito foi necessário. As páginas internas, configurações institucionais, dados dos cursos e docentes, dependências e `vercel.json` permanecem iguais à main. A homepage e a apresentação do cabeçalho contêm a experiência aprovada.

O PR #2 já utiliza esta feature como origem e main como destino. Ele será atualizado com a entrega aprovada, sem fechar ou modificar o PR #1 de homologação.

## Escopo aprovado

- Abertura: fachada → recepção → corredor → biblioteca → sala de estudos.
- GSAP/ScrollTrigger, movimento de câmera, dissoluções, scroll reverso, menu e reduced motion preservados.
- Fachada também na seção “FAUNA — A Faculdade Boutique”.
- Novas imagens de Direito, Enfermagem e Psicologia na homepage.
- JPEGs responsivos com `srcSet`; PNGs originais preservados localmente, fora do commit.
- Fachada identificada como imagem editada a partir de fotografia real. Interiores e cursos identificados como ilustrações conceituais geradas por IA, sem apresentar instalações fictícias como reais.
- Os doze JPEGs conceituais substituídos foram retirados dos assets públicos, junto do manifesto sem consumidores que os referenciava.
- Testes anteriores atualizados para cinco cenas e para os novos arquivos de cursos.

Os registros históricos de etapas anteriores em `docs/` não descrevem necessariamente o estado final. Este documento e os testes atualizados descrevem a entrega atual.

## Validação

Servidor local: `http://127.0.0.1:5173/`.

- `npm run lint`: aprovado; o script executa `tsc --noEmit`.
- `npm run build`: aprovado.
- `scripts/audit-integration.mjs`: 126 verificações aprovadas.
- `scripts/validate-cinematic.mjs`: 91 verificações aprovadas.
- `scripts/validate-cinematic-images.mjs`: 59 verificações aprovadas.
- `scripts/validate-homepage-images.mjs`: 17 verificações aprovadas.
- Quatro cenários de configuração de ambiente aprovados: padrão, produção com flag de homologação, preview da feature com a mesma flag e preview de homologação.
- HTML do build padrão sem `noindex` de homologação; referências literais de assets locais sem arquivos ausentes.

As suítes usam Chrome headless local, com desktop 1440px e larguras móveis/tablet entre 375px e 768px. Cobrem navegação, páginas internas, imagens, menus, scroll progressivo e reverso, reduced motion e carregamento lento. Não substituem a revisão em Safari, Firefox ou dispositivos físicos.

Para reproduzir, iniciar o servidor na porta 5173 e executar cada script de navegador isoladamente. `CHROME_PATH` permite apontar para outra instalação do Chrome. Os testes anteriores aceitam `FAUNA_TEST_OUTPUT` para salvar evidências sem sobrescrever registros históricos. Capturas e resultados gerados permanecem locais, fora deste commit.

Galerias locais:

- `http://127.0.0.1:5173/docs/cinematic-images-preview/index.html`.
- `http://127.0.0.1:5173/docs/homepage-images-preview/index.html`.

## Ambiente e pendências editoriais

A lógica de homologação já herdada da branch não foi alterada nesta preparação. Ela só ativa o aviso e `noindex, nofollow` mediante opt-in; na Vercel, exige Preview da branch `homologacao`. Produção mantém ambos desativados mesmo com a flag definida. `.env.example` apenas documenta variáveis, sem ativá-las. Nenhuma configuração ou domínio remoto foi alterado.

Angelo deve revisar e aprovar o PR antes do merge. Permanecem sujeitos à validação institucional os dados oficiais de oferta e regulação dos cursos, condições de inscrição, endereço/contatos e demais pendências já sinalizadas no site. A autorização de retrato pendente não foi substituída por fotografia presumida. A aprovação visual não equivale à homologação desses dados.

Não foi identificado com segurança o usuário GitHub do Angelo entre os colaboradores disponíveis; nenhuma conta foi escolhida por suposição para solicitar revisão.
