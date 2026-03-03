# Proposal: add-image-splitter-tool

## O quê

Adicionar uma nova página/ferramenta ao projeto que permita ao usuário carregar uma imagem (via campo de arquivo ou arrastar e soltar) e dividi-la diretamente no navegador usando JavaScript. A ferramenta deve funcionar inteiramente no front-end; nenhuma imagem será enviada para o servidor. O usuário pode escolher o tipo de divisão (grade, vertical ou horizontal) e especificar quantas colunas e linhas deseja. Será exibida uma pré-visualização com linhas tracejadas indicando os cortes, e o usuário poderá selecionar quais pedaços deseja baixar. O download deve ser oferecido em formato `.zip`.

## Por quê

Um utilitário de divisão de imagens é uma funcionalidade útil para quem precisa cortar imagens em partes menores sem instalar software adicional. Mantendo a lógica no front-end, preservamos a privacidade das imagens e evitamos carga no servidor. A interface em Português Brasileiro torna a ferramenta acessível para o público-alvo. Integrar isso ao projeto amplia seu valor e demonstra capacidade de processamento de mídia no navegador.

## Metas

1. Criar página React/Vue/JS simples (dependendo da stack atual) para a ferramenta.
2. Implementar upload arrastar+soltar e botão de seleção de arquivo.
3. Calcular divisões de imagem no navegador e mostrar pré-visualização com cortes.
4. Permitir marcar/desmarcar partes e baixar os selecionados em arquivo ZIP.
5. Interface totalmente em Português Brasileiro.

## Não metas

- Não processar imagens no servidor.
- Não usar bibliotecas de terceiros pesadas além de utilitários leves (JSZIP, por exemplo).
- Não suportar edição de imagens ou outros tipos de transformação além da divisão.