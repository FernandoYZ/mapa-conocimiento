import IndexData from '../data/index.json'

export const obtenerDatos = async (source: string | any): Promise<any> => {
    try {
        if (typeof source === 'string') {
            const response = await fetch(source, { cache: 'no-store' });
            if (!response.ok) {
                throw new Error(`Error en la carga de datos desde ${source}`);
            }
            return await response.json();
        }
        return source;
    } catch (error) {
        console.error('Error al cargar datos:', error);
        throw error;
    }
};

export const DatosIndex = async (): Promise<any> => {
    return new Promise((resolve) => {
      resolve(IndexData);
    });
};
