interface Card {
    titulo: string;
    descripcion: string;
    video_url?: string;
    imagen?: string;
}

interface Contenido {
    imagen: String,
    descripcion: String,
    titulo: String,
}

interface SectionCardVideo {
    titulo: string;
    descripcion: string;
    cards: Card[];
}

interface SectionMedio {
    titulo: string;
    descripcion: string;
    contenido: Card[];
}

interface SectionVideoModal {
    titulo: string;
    cards: Card[];
}

export class KnowledgeNode {
    home: {
        titulo: string;
        descripcion: string;
        imagen: string;
    };
    section_card_video?: SectionCardVideo;
    section_medio?: SectionMedio;
    section_video_modal?: SectionVideoModal;

    constructor(data: any) {
        this.home = {
            titulo: data.home?.titulo || '',
            descripcion: data.home?.descripcion || '',
            imagen: data.home?.imagen || '',
        };

        this.section_card_video = data.section_card_video
            ? {
                  titulo: data.section_card_video.titulo,
                  descripcion: data.section_card_video.descripcion,
                  cards: data.section_card_video.cards || [],
              }
            : undefined;

        this.section_medio = data.section_medio
            ? {
                  titulo: data.section_medio.titulo || 'Título por defecto del contenido',
                  descripcion: data.section_medio.descripcion || 'Descripción por defecto del contenido',
                  contenido: data.section_medio.contenido || [],
              }
            : undefined;

        this.section_video_modal = data.section_video_modal
            ? {
                  titulo: data.section_video_modal.titulo,
                  cards: data.section_video_modal.cards || [],
              }
            : undefined;
    }
}