# Design for fix-design

## Overview

Focar em pequenas correções CSS e JS para que a página principal do projeto (`/`) ofereça uma experiência consistente:

- Ajustes de layout: centralizar conteúdo, limitar largura da pré-visualização, transformar miniaturas em grid responsivo.
- Melhorar acessibilidade: labels claros, botões localizáveis e contraste suficiente.
- Corrigir lógica de seleção em `split.js` (uso consistente de Set vs binding em template).
- Sobreposição de linhas tracejadas usando `canvas` ou pseudo-elementos para manter precisão.

## Arquivos afetados
- `src/templates/split.twig`
- `resources/js/split.js`
- (possível) `vite.config.js` se ajustes de entradas forem necessários

## Validação
- Testar com imagens grandes e pequenas, verificar comportamento em mobile em widths 320/375/768.
- Verificar que nenhum upload ao servidor é realizado e que o ZIP contém apenas os itens selecionados.
