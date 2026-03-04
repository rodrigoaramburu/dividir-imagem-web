# Design: SEO Optimization

## Visão Geral

A estratégia consiste em inspecionar o código PHP/Twig e recursos estáticos para identificar pontos de melhoria e aplicar as otimizações de SEO listadas na proposta. O foco será a página principal (`index.php` + `split.twig`) e qualquer recurso incluído indiretamente (CSS, JS). O processo envolverá modificações em templates, adição de arquivos de configuração e ajustes em build pipeline quando necessário.

## Alterações Principais

1. **Metadados e cabeçalhos HTML**
   - Editar `src/templates/split.twig` para incluir tags `<title>`, `<meta name="description">`, meta tags Open Graph e Twitter.
   - Adicionar `<meta name="viewport" content="width=device-width, initial-scale=1">`.
   - Inserir marcações `schema.org` apropriadas (tipo `WebPage`) usando atributos `itemscope`/`itemtype`.

2. **Conteúdo Semântico**
   - Garantir que o título principal esteja em `<h1>` e subtítulos em `<h2>`/`<h3>`.
   - Auditar e ajustar tags `alt` em imagens estáticas (como logos) ou geradas.
   - Adicionar `nav` com links semânticos para `Home` e outras seções.

3. **Recursos de SEO**
   - Criar `public/robots.txt` com instruções padrão (permitir tudo, referenciar sitemap).
   - Gerar `public/sitemap.xml` com entrada para `/` e outras páginas futuras.
   - Possivelmente adicionar `hreflang` se multilíngue (não aplicável no momento).

4. **Performance**
   - Verificar e minificar CSS/JS (já em build? usar Vite config). Ajustar `vite.config.js` para habilitar minificação e hashing de arquivos.
   - Implementar `rel="preconnect"` e `rel="preload"` para fontes web e scripts críticos.
   - Configurar `Cache-Control` no servidor (talvez via .htaccess ou código PHP) para recursos estáticos.
   - Usar lazy loading (`loading="lazy"`) em imagens quando apropriado.

5. **Sitemap e Robots**
   - Utilizar simples script PHP para gerar `sitemap.xml` dinamicamente ou escrever arquivo estático.
   - Atualizar documentação (README) com instruções sobre SEO e como regenar sitemap se o site crescendo.

6. **Testes e Verificação**
   - Adicionar ferramenta de linha de comando ou script Node para rodar lighthouse via `npm run audit`.
   - Confirmar alterações manualmente no navegador e por crawlers automáticos.

## Dependências

- Não há dependências externas além dos já usados (`npm`/`vite`, `twig`).
- Scripts adicionais podem usar `curl` ou `node` para Lighthouse.

## Caminho de Implementação

O processo seguirá as tarefas definidas em `tasks.md`. A ideia é aplicar modificações de baixo nível nos templates e na configuração, depois verificar com ferramentas (
Lighthouse, crawler). O commit final documentará as mudanças e resultados.