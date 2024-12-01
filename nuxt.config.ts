export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Learnix - Mapa de Conocimiento en Ingeniería',
            meta: [
                { name: 'description', content: 'Descubre Learnix: una plataforma de aprendizaje que fusiona recursos académicos con cursos interactivos en matemáticas, ciencia y tecnología. Mejora tus habilidades con contenidos prácticos y desafiantes.' },
                { name: 'keywords', content: 'ingeniería, mapa de conocimiento, aprendizaje, estudiantes, profesores, educación, tecnología, habilidades en ingeniería' },
                { name: 'robots', content: 'index, follow' },
                { property: 'og:title', content: 'Learnix - Mapa de Conocimiento en Ingeniería' },
                { property: 'og:description', content: 'Explora rutas de aprendizaje y guía tu conocimiento en ingeniería con Learnix, el recurso ideal para estudiantes y profesores.' },
                { property: 'og:image', content: 'https://Learnix.com/logo.jpg' },
                { property: 'og:url', content: 'https://Learnix.com' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: 'Learnix - Mapa de Conocimiento en Ingeniería' },
                { name: 'twitter:description', content: 'Encuentra guías y rutas de aprendizaje en ingeniería con Learnix.' },
                { name: 'twitter:image', content: 'https://Learnix.com/logo.jpg' },
            ],
            script: [
                {
                    type: 'application/ld+json',
                    children: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Learnix",
                        "url": "",
                        "author": [
                            {
                                "@type": "Person",
                                "name": "FernandoYZ",
                                "url": "https://github.com/FernandoYZ"
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
    modules: ['@nuxtjs/tailwindcss','shadcn-nuxt'],
    shadcn: {
        prefix: '',
        componentDir: './components/ui'
    },
    ssr: true,
    nitro: {
        preset: 'static',
    },
    dir: {
        public: 'public',
    }
});