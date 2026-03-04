# Tasks: SEO Optimization

1. **Auditar código atual** ✅
   - Revisar `index.php`, `split.twig`, `vite.config.js`, `README.md` e recursos estáticos.
   - Anotar problemas de estrutura HTML, metadados ausentes e oportunidades de desempenho.

2. **Atualizar template principal** ✅
   - Inserir `<title>Dividir Imagem</title>` e meta description.
   - Adicionar tags Open Graph (`og:title`, `og:description`, `og:url`, `og:image`) e Twitter Card.
   - Garantir `<meta name="viewport" content="width=device-width, initial-scale=1">` e esquema `WebPage`.
   - Verificar e corrigir o uso de `<h1>`/`<h2>` e `alt` em imagens.
   - Incluir elemento `<nav>` com links semânticos.

3. **Adicionar arquivos SEO** ✅
   - Criar `public/robots.txt` com regras simples e referência a sitemap.
   - Criar `public/sitemap.xml` estático ou script de geração. Incluir pelo menos `/`.

4. **Configurar performance** ✅
   - Ajustar `vite.config.js` para habilitar minificação, hashing e cache-busting.
   - Incluir `rel="preconnect"`/`preload` para fontes externas (se houver).
   - Adicionar `loading="lazy"` em imagens não críticas.
   - Documentar ajustes de `Cache-Control` ou `.htaccess` se necessário.

5. **Testes de SEO** ✅
   - Integrar comando `npm run audit` que executa Lighthouse ou outra ferramenta (usar `lighthouse-ci` ou `pa11y`).
   - Executar audit e anotar pontuações iniciais e após ajustes.

6. **Documentação** ✅
   - Atualizar `README.md` com seções sobre SEO e como regenerar sitemap.
   - Registrar mudanças no `CHANGELOG` se aplicável.

7. **Revisão final e commit** ✅
   - Revisar com `git diff` para garantir apenas alterações de SEO.
   - Confirmar que Lighthouse >=90 em SEO/performance.

