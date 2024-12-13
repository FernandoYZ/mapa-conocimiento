export const getAllCategories = async () => {
    const modules = import.meta.glob('/data/nodo-*.json')
    const categories = new Set()
    
    for (const path in modules) {
        const module = await modules[path]()
        if (module.categorias) {
            module.categorias.forEach(category => categories.add(category))
        }
    }
    
    return Array.from(categories).sort()
}