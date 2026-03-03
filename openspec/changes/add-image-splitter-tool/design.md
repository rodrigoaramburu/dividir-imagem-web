# Design for add-image-splitter-tool

## Overview

A nova página será responsável por toda a lógica de divisão de imagens no cliente. Podemos reutilizar a estrutura existente do frontend (o app.js/Vite/Alpine? ou talvez Slim+Twig). Como o projeto atual usa Slim com Twig e Alpine/Vite, faz sentido implementar a interface da ferramenta usando Alpine.js para manter consistência.

Componente principal:
- Área de drop/upload para imagem.
- Controles: tipo de corte (`grade`, `vertical`, `horizontal`), número de colunas, número de linhas.
- Botão para gerar pré-visualização.
- Canvas ou `<img>` com sobreposição de linhas tracejadas representando os cortes.
- Grade de miniaturas dos pedaços gerados, com caixas de seleção para escolha.
- Botão para baixar selecionados como ZIP (usar JSZip).

### Fluxo
1. Usuário carrega imagem (drag&drop ou input).
2. Preview da imagem aparece e controles habilitados.
3. Usuário escolhe tipo e dimensões, clica em "Gerar".
4. JS calcula coordenadas dos cortes, divide a imagem usando canvas.
5. Exibe os pedaços em miniaturas; cada item é clicável/selecionável.
6. Usuário clica em "Baixar" para obter ZIP contendo os pedaços selecionados.

### Organização de arquivos
- Nova rota Slim (`/`) e template `split.twig` (tornando esta a página principal do projeto).
- `resources/js/split.js` contém a lógica Alpine e manipulação de canvas.
- Estilos mínimos em CSS inline ou arquivo novo.

### Tradução
Todo o texto da interface será em Português. Labels como "Carregar imagem", "Tipo de divisão", "Linhas", "Colunas", "Gerar pré-visualização", "Baixar selecionados" etc.

### Dependências
- [JSZip](https://stuk.github.io/jszip/) via npm/yarn, para criação de arquivo ZIP.
- Possibilidade de uso de `FileReader` e `HTMLCanvasElement` APIs, no navegador.

### Considerações
- Lidar com imagens grandes pode exigir redimensionamento para preview.
- Garantir que a divisão seja proporcional mesmo com resoluções não múltiplas.

### Validation
Manual: carregar diversas imagens, aplicar cortes vários tipos, verificar os ZIPs resultantes e se as imagens correspondem ao que foi mostrado na pré-visualização.