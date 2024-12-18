export default {
  target: 'static',
  router: {
    base: '/ByteMeuh/',
  },
  modules: ['@nuxtjs/sitemap'],
  sitemap: {
    hostname: 'https://byte-meuh.tech',
    gzip: true,
    routes: async () => {
      // Définir les routes avec leurs balises lastmod et priority
      const routes = [
        { 
          url: '/', 
          lastmod: '2024-12-18', 
          priority: 1.0 
        },
        { 
          url: '/articles', 
          lastmod: '2024-12-18', 
          priority: 0.8 
        },
        { 
          url: '/articles/troupeaux', 
          lastmod: '2024-12-17', 
          priority: 0.7 
        },
        { 
          url: '/articles/vaches', 
          lastmod: '2024-12-16', 
          priority: 0.7 
        },
      ];
      return routes;
    },
  },
};
