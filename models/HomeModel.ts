interface Tema {
    title: string;
}

export class HomeNode {
    title: string;
    description: string;
    image: string;
    nodeNumber: string;
    temas: string[];

    constructor(data: any) {
        this.title = data.title || 'Título por defecto';
        this.description = data.description || 'Descripción por defecto';
        this.image = data.image || '';
        this.nodeNumber = data.nodeNumber || 'Nodo';
        this.temas = data.temas || [];
    }
}
