export default {
  css: ['~/assets/css/global.css'],
  target: 'static',
  router: {
    base: '/ByteMeuh/', // Fonctionne pour GitHub Pages
  },
  modules: ['@nuxtjs/sitemap'],
  site : {
    url : 'https://byte-meuh.tech',
  },
  sitemap: {
    siteUrl: 'https://byte-meuh.tech', // URL de ton site
    gzip: true, // Sitemap compressé (optionnel)
    sitemaps: true,
    urls: async () => {
      const routes = [
        { url: '/', lastmod: '2024-12-18', priority: 1.0 },
        { url: '/articles', lastmod: '2024-12-18', priority: 0.8 },
        { url: '/articles/troupeaux', lastmod: '2024-12-17', priority: 0.7 },
        { url: '/articles/vaches', lastmod: '2024-12-16', priority: 0.7 },
        { url: '/articles/alimentation', lastmod: '2025-01-11', priority: 0.7 },
        { url: '/articles/sante', lastmod: '2025-01-11', priority: 0.7 },
        { url: '/articles/bien-etre', lastmod: '2025-01-11', priority: 0.7 },
      ];
      return routes;
    },
  },
  app: {
    head: {
      title: 'Byte Meuh - La technologie au service de l\'agriculture',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          hid: 'description',
          name: 'description',
          content: 'Byte Meuh - Découvrez nos articles sur l\'élevage bovin, la santé des vaches et l\'agriculture durable. Expertise et conseils pour les éleveurs.' 
        },
        { name: 'author', content: 'Byte Meuh Team' },
        { property: 'og:title', content: 'Byte Meuh - La technologie au service de l\'agriculture' },
        { property: 'og:description', content: 'Byte Meuh apporte des solutions technologiques pour une gestion intelligente des troupeaux et une agriculture durable.' },
        { property: 'og:image', content: './img/vache.jpg' },
        { property: 'og:url', content: 'https://byte-meuh.tech' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:site_name', content: 'Byte Meuh' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Byte Meuh - La technologie au service de l\'agriculture' },
        { name: 'twitter:description', content: 'Optimisez la gestion de votre ferme avec Byte Meuh et ses solutions innovantes.' },
        { name: 'twitter:image', content: 'https://byte-meuh.tech' },
        { name: 'twitter:site', content: '@bytemeuh' },
        { name: 'twitter:creator', content: '@bytemeuh' }
      ],
      link: [
        { rel: 'canonical', href: 'https://byte-meuh.tech' }
      ]
    },
  },
  generate: {
    dir: 'dist', // Dossier de sortie
  },
};
