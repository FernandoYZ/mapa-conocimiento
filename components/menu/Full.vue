<template>
    <Transition
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
        <div 
            v-show="isVisible"
            class="absolute left-1/2 transform -translate-x-1/2 left-0 w-screen bg-white shadow-lg"
        >
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div class="grid grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-lg font-semibold text-purple-600 mb-4">Hombre</h3>
                        <ul class="grid grid-cols-2 gap-2">
                            <li 
                            v-for="category in categories.hombre" 
                            :key="category"
                            >
                            <NuxtLink 
                                :to="`/categoria/hombre/${category.toLowerCase()}`" 
                                class="text-gray-600 hover:text-purple-600"
                            >
                                {{ category }}
                            </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-purple-600 mb-4">Mujer</h3>
                        <ul class="grid grid-cols-2 gap-2">
                            <li 
                            v-for="category in categories.mujer" 
                            :key="category"
                            >
                            <NuxtLink 
                                :to="`/categoria/mujer/${category.toLowerCase()}`" 
                                class="text-gray-600 hover:text-purple-600"
                            >
                                {{ category }}
                            </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>
  
<script setup>
const categories = {
    hombre: ['Camisetas', 'Pantalones', 'Zapatos', 'Accesorios'],
    mujer: ['Vestidos', 'Blusas', 'Faldas', 'Zapatos', 'Accesorios']
}
  
defineProps({
    isVisible: {
        type: Boolean,
        default: false
    }
})
</script>