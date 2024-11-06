import { KnowledgeNode } from '@/models/NodeModel';

export class NodeViewModel {
    node: KnowledgeNode | null = null;
    isLoading: boolean = false;
    error: string | null = null;

    async loadNode(nodeNumber: string) {
        this.isLoading = true;
        this.error = null;

        try {
            const nodeData = await import(`../data/nodo_${nodeNumber}.json`);
            this.node = new KnowledgeNode(nodeData.default);
        } catch (error) {
            this.error = 'Error al cargar los datos del nodo';
            console.error(error);
        } finally {
            this.isLoading = false;
        }
    }
}