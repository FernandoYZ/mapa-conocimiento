export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'IngenioMap - Mapa de Conocimiento en Ingeniería',
      meta: [
        { name: 'description', content: 'IngenioMap es una plataforma de conocimiento en ingeniería diseñada para estudiantes y profesores. Descubre rutas de aprendizaje en diversas áreas de ingeniería para mejorar tus habilidades.' },
        { name: 'keywords', content: 'ingeniería, mapa de conocimiento, aprendizaje, estudiantes, profesores, educación, tecnología, habilidades en ingeniería' },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: 'IngenioMap - Mapa de Conocimiento en Ingeniería' },
        { property: 'og:description', content: 'Explora rutas de aprendizaje y guía tu conocimiento en ingeniería con IngenioMap, el recurso ideal para estudiantes y profesores.' },
        { property: 'og:image', content: 'https://ingeniomap.com/logo.jpg' },
        { property: 'og:url', content: 'https://ingeniomap.com' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'IngenioMap - Mapa de Conocimiento en Ingeniería' },
        { name: 'twitter:description', content: 'Encuentra guías y rutas de aprendizaje en ingeniería con IngenioMap.' },
        { name: 'twitter:image', content: 'https://ingeniomap.com/logo.jpg' },
      ],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "IngenioMap",
            "url": "https://ingeniomap.com",
            "author": [
              {
                "@type": "Person",
                "name": "FernandoYZ",
                "url": "https://github.com/FernandoYZ"
              },
              {
                "@type": "Person",
                "name": "CarolayDS",
                "url": "https://github.com/CarolayDS"
              },
              {
                "@type": "Person",
                "name": "karlaval23",
                "url": "https://github.com/karlaval23"
              },
              {
                "@type": "Person",
                "name": "QuerevaluJesus",
                "url": "https://github.com/QuerevaluJesus"
              },
              {
                "@type": "Person",
                "name": "fabian18P",
                "url": "https://github.com/fabian18P"
              }
            ]
          })
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' },
      ]
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    prefix: '',
    componentDir: './components/ui'
  }
});
