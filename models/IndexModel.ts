interface Header {
    title: string;
    subtitle: string;
}

interface FeatureCard {
    icon: string;
    title: string;
    description: string;
}

interface SocialLink {
    alt: string;
    icon: string;
    url: string;
}

interface ContactInfo {
    email: string;
    telefono: string;
    direccion: string;
}

interface Footer {
    description: string;
    social: SocialLink[];
    contacto: ContactInfo;
}

export class IndexModel {
    title: string;
    description: string;
    content: string;
    header: Header;
    welcomeMessage: string;
    featureCards: FeatureCard[];
    footer: Footer;

    constructor(data: any) {
        this.title = data.title || 'Título por defecto';
        this.description = data.description || 'Descripción por defecto';
        this.content = data.content || 'Contenido por defecto';
        this.header = {
            title: data.header?.title || 'Título de encabezado por defecto',
            subtitle: data.header?.subtitle || 'Subtítulo de encabezado por defecto',
        };
        this.welcomeMessage = data.welcomeMessage || 'Mensaje de bienvenida por defecto';
        this.featureCards = data.featureCards?.map((card: any) => ({
            icon: card.icon || 'Icono por defecto',
            title: card.title || 'Título de la tarjeta',
            description: card.description || 'Descripción de la tarjeta',
        })) || [];
        this.footer = {
            description: data.footer?.description || 'Descripción del footer por defecto',
            social: data.footer?.social.map((item: any) => ({
                alt: item.alt || 'Descripción del icono',
                icon: item.icon || '',
                url: item.url || '#',
            })) || [],
            contacto: {
                email: data.footer?.contacto?.email || 'correo@correo.com',
                telefono: data.footer?.contacto?.telefono || '999999999',
                direccion: data.footer?.contacto?.direccion || 'Algún lugar',
            },
        };
    }
}
