import { IndexModel } from '@/models/IndexModel';
import { obtenerDatos } from '@/services/DataService';
import IndexData from '../data/index.json'

export class IndexViewModel {
    model: IndexModel | null = null;
    isLoading: boolean = false;
    error: string | null = null;

    async loadData() {
        this.isLoading = true;
        this.error = null;

        try {
            const data = await obtenerDatos(IndexData);
            this.model = new IndexModel(data);
        } catch (error) {
            this.error = 'Error al cargar datos';
            console.error(error);
        } finally {
            this.isLoading = false;
        }
    }
}

