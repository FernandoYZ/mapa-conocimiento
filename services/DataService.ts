export const obtenerDatos = async <T>(source: string | T): Promise<T> => {
    try {
        if (typeof source === 'string') {
            const response = await fetch(source);
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
