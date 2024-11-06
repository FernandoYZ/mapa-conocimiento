import { HomeNode } from '@/models/HomeModel';
import homeData from '../data/home.json';

export class HomeViewModel {
    nodes: HomeNode[] = [];
    isLoading: boolean = false;
    error: string | null = null;

    loadData() {
        this.isLoading = true;
        this.error = null;

        try {
            this.nodes = homeData.map((nodeData: any) => new HomeNode(nodeData));
        } catch (error) {
            this.error = 'Error al cargar los datos de los nodos';
            console.error(error);
        } finally {
            this.isLoading = false;
        }
    }
}
