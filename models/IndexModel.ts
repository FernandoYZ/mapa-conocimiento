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
    footer: Footer;

    constructor(data: any) {
        this.title = data.title || 'Título por defecto';
        this.description = data.description || 'Descripción por defecto';
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
                direccion: data.footer?.contacto?.direccion || 'Algún lugar xd',
            },
        };
    }
}
