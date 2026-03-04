# Proposal: optimize-project-seo

## O quê

Avaliar a base de código atual do site *image-spliter* e aplicar uma série de técnicas de SEO avançadas para melhorar sua visibilidade em mecanismos de busca, experiência do usuário e desempenho geral.

### Includes

- Auditoria de conteúdo e estrutura HTML (títulos, cabeçalhos, alt, links, semântica).
- Inclusão/atualização de metadados (title, description, open graph, twitter cards).
- Geração de `sitemap.xml` e `robots.txt` apropriados.
- Otimização de velocidade de carregamento (minificação, lazy loading, compressão de imagens, carregamento assíncrono de scripts).
- Ajustes para mobile-first e responsividade (meta viewport, testes de Lighthouse).
- Melhores práticas de performance (preconnect, font-display, caching).
- Implementação de marcação schema.org onde fizer sentido (WebPage, SiteNavigation).

## Por quê

O projeto é uma ferramenta útil mas, sem atenção a SEO, não alcança o público-alvo. Os mecanismos de busca priorizam páginas rápidas, bem estruturadas e com metadados completos. Melhorar o SEO:

1. Aumenta o tráfego orgânico e o alcance da ferramenta.
2. Melhora a usabilidade e a acessibilidade para todos os usuários.
3. Fortalece a qualidade técnica do código e torna o projeto um exemplo de boas práticas para desenvolvedores.

## Metas

1. Obter pontuação de desempenho e SEO >= 90 no Google Lighthouse para a página principal.
2. Garantir que todas as imagens tenham `alt` descritivo e tamanho adequado.
3. Disparar um crawler local que valide `sitemap.xml` e `robots.txt` gerados.
4. Documentar as alterações e fornecer recomendações para futuras páginas.

## Não metas

- Não redesenhar a interface visual do splitter.
- Não migrar para um CMS ou redeploy a outra plataforma.
- Não escrever conteúdo novo para além dos metadados e textos existentes.