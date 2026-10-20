# Mídia conceitual da experiência institucional FAUNA

Data: 20/10/2026. Ferramenta: OpenAI image_gen integrada, modo built-in. Não foi usado CLI, API key, banco de imagens externo ou recurso visual de outra marca.

Todas as cenas são ilustrações conceituais geradas por IA. Não são fotografias de alunos, professores ou instalações reais da FAUNA. Não há fachada identificada, placa institucional, laboratório especializado, clínica, escritório jurídico ou logotipo gerado nas imagens.

As seis imagens foram inspecionadas visualmente. Os enquadramentos preservam materiais, luz e continuidade entre a passagem, a mesa de estudos e as pessoas. A imagem de chegada foi referência de arquitetura, materiais e atmosfera para as outras cinco gerações; não foi usada como registro documental.

## Arquivos finais

Pasta: public/assets/cinematic/

| ID | Arquivo principal | Variante leve | Finalidade |
| --- | --- | --- | --- |
| arrival | arrival-concept.jpg | arrival-concept-small.jpg | Chegada: passagem acadêmica conceitual |
| immersion | immersion-concept.jpg | immersion-concept-small.jpg | Imersão: convivência e estudo |
| presence | presence-concept.jpg | presence-concept-small.jpg | Presença e assinatura: diálogo com educadora |
| law | law-concept.jpg | law-concept-small.jpg | Direito: leitura e argumentação |
| nursing | nursing-concept.jpg | nursing-concept-small.jpg | Enfermagem: atenção e cuidado em situação de estudo |
| psychology | psychology-concept.jpg | psychology-concept-small.jpg | Psicologia: escuta e discussão de ideias |

JPEGs principais: 1680 × 946 px. Variantes leves: 840 × 473 px. Codificação JPEG, qualidade 84. Foram apenas redimensionados e codificados para entrega web; o conteúdo das cenas não foi alterado nessa conversão.

Os PNGs originais da ferramenta foram preservados na pasta de imagens geradas do Codex, sem uso direto pelo site. Identificadores dos originais:
- arrival: exec-82ebd644-eabf-4f32-bacb-b0670fd4f063.png
- immersion: exec-0915b883-b6ad-4dd6-b1b7-3980ad6d7183.png
- presence: exec-0ced052f-06b3-40f0-86c0-581b8f9aa833.png
- law: exec-6bb4b658-410e-44d7-a649-a8afb71cce9c.png
- nursing: exec-ce64b4bc-8183-43c5-a97f-6a3c4e949352.png
- psychology: exec-3f1960dd-6759-4fb7-9ca2-964f0b1769cb.png

O manifesto tipado src/data/institutionalMedia.ts registra origem, finalidade, data, descrição, pontos focais de desktop/mobile e necessidade de substituição pelo acervo oficial.

A abertura tem aviso visível: “Cenas ilustrativas criadas com IA. Não representam a unidade de Barcarena.” As figuras posteriores possuem legendas e todos os alt explicitam o caráter conceitual.

## Prompts finais utilizados

### Chegada

Use case: photorealistic-natural. Create ONE wide landscape 16:9 cinematic editorial photograph-style CONCEPT ILLUSTRATION for a university website, not a depiction of any actual institution. Scene: camera at walking height approaching a shaded contemporary academic atrium in tropical northern Brazil, looking through a broad passage toward a modest communal study area and green trees beyond. Warm timber ceiling, textured off-white plaster, dark green painted accents, understated terracotta flooring, plausible human-scale architecture, deep perspective and soft natural overcast daylight. Three diverse adult students seen at a distance naturally entering or talking, not posing. Architecture should feel attainable, intimate and refined rather than luxurious resort or futuristic building. Composition: wide photographic frame with an open shadowed area on the left for readable website text; central passage remains inside the middle third so it survives vertical mobile cropping. Natural textures and slight photographic grain, restrained contrast, no exaggerated sun rays. STRICT: no text, no logos, no signs, no watermarks, no institutional branding, no specialized laboratory, clinic or law office, no claim that this is an actual FAUNA facility. All people are fictional illustrative characters. No giant letters, no UI, no montage.

### Base comum das outras cinco imagens

Use case: photorealistic-natural. ONE wide 16:9 landscape cinematic editorial photograph-style CONCEPT ILLUSTRATION for an academic website. This is fictional illustrative material, NOT documentary photography of FAUNA or any actual campus. The input image is a REFERENCE ONLY for coherent natural materials, northern Brazilian tropical atmosphere, off-white textured plaster, warm timber, muted forest green, terracotta and soft daylight. Generate a new photographic composition, no collage. Realistic diverse adult Brazilians, unposed gestures and imperfect natural textures, understated academic credibility. No readable text, logos, watermarks, branding, signage, futuristic architecture, staged advertising smiles or uncanny perfect faces. No real recognizable person.

Cada solicitação combinou essa base com o trecho específico abaixo e a imagem de chegada como referência.

### Imersão

Subject: camera has moved forward through the referenced atrium into its communal study space. Mid-wide view from walking height, a timber communal table with books, notebooks and a few adult students talking quietly in background, open passage and tropical courtyard still visible to the right. Preserve plausible perspective relationship with the reference: viewpoint further into same kind of space, not a new monumental building. Favor architecture and depth, keep center third usable for mobile crop, leave slightly shadowed left area for website text.

### Presença

Subject: close editorial view of a diverse group of three adult students and one middle-aged female educator around a wooden table during a thoughtful discussion. One student explains a point with a natural hand gesture, another listens, notebooks and closed books, no legible writing. Their faces and gestures are candid and realistic, modest casual clothes in natural tones, daylight from an adjacent courtyard, background plausibly echoes the reference but softly out of focus. Frame intimate human interaction, hands anatomically natural, no posing. Main group in center for mobile crop.

### Direito

Subject: two adult students of law quietly discussing an open unmarked book at a wood table beside an ordinary shaded university window. A Black Brazilian woman listening to a mixed-race Brazilian man who is making a modest conversational gesture. Emphasize reading, dialogue and thoughtful reflection. Medium documentary-style composition with natural faces and hands, center-right grouping, soft greens outside. Do not include courthouse, gavel, scales, uniform, official seal or law office. This is an academic conceptual scene, not a claim of facilities.

### Enfermagem

Subject: an adult Brazilian woman and adult Brazilian man reviewing a simple blank study notebook and a closed academic book with an older educator at an ordinary wood study table. Human attention, scientific curiosity and careful discussion suggest nursing education without any hospital or specialized laboratory. Natural casual clothes; a folded plain white coat may rest on a chair, no medical equipment, procedures, patient, mannequin, clinic, operating room, chart text or facility claim. Medium close cinematic photograph, genuine listening and natural expressions, center-right group.

### Psicologia

Subject: two adult Brazilian students in a reflective conversation with a middle-aged woman educator, in a modest university reading area with books and plants blurred in background. Focus on one person listening attentively, empathetic eye contact and an open natural hand gesture. It is a discussion of ideas in an ordinary study space, not therapy or a clinical session. No couch, clinic, medical tools, charts or test instruments. Soft natural window light, grounded human diversity, quiet editorial photograph with center-right subjects and room for vertical mobile cropping.

## Substituição futura

Todas as seis cenas precisam ser substituídas pelo acervo oficial quando houver autorização e material adequado. Atualizar src, srcSet, alt, origem e pontos focais no manifesto. Os avisos conceituais só devem ser retirados quando as imagens em uso forem documentais e aprovadas.

Não misturar os retratos oficiais das coordenações com personagens conceituais. Os retratos e os dados oficiais existentes não foram alterados.
