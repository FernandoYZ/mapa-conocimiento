<template>
    <div 
        class="fixed top-11"
        v-show="isVisible"
    >
        <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
        >
            <div 
                v-show="isVisible"
                class="relative bg-white shadow-lg"
                role="menu"
                aria-orientation="horizontal"
            >
                <div class="max-w-7xl mx-auto">
                    <div class="relative z-40 bg-white">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            <h1 class="w-full text-center text-xl font-extrabold text-gray-500 bg-gray-100 mb-4 py-3 rounded-md">
                                Explora según tus intereses
                            </h1>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <section>
                                    <h3 class="text-lg font-black bg-amber-100 py-1 px-3 rounded-md text-center text-amber-600 mb-4 flex items-center justify-center">
                                        <svg class="w-6 h-6 text-center mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                            <path fill="currentColor" d="M27,4H5C3.3,4,2,5.3,2,7v18c0,1.7,1.3,3,3,3h22c1.7,0,3-1.3,3-3V7C30,5.3,28.7,4,27,4z M9.1,7.6c0.1-0.1,0.1-0.2,0.2-0.3
                                                c0.1-0.1,0.2-0.2,0.3-0.2C10,6.9,10.4,7,10.7,7.3c0.1,0.1,0.2,0.2,0.2,0.3C11,7.7,11,7.9,11,8c0,0.3-0.1,0.5-0.3,0.7
                                                C10.5,8.9,10.3,9,10,9C9.7,9,9.5,8.9,9.3,8.7C9.1,8.5,9,8.3,9,8C9,7.9,9,7.7,9.1,7.6z M6,8c0-0.3,0.1-0.5,0.3-0.7
                                                c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1C6.7,7,6.7,7,6.8,7c0.1,0,0.3,0,0.4,0c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1
                                                c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.2,0.3C8,7.7,8,7.9,8,8c0,0.1,0,0.3-0.1,0.4C7.9,8.5,7.8,8.6,7.7,8.7C7.5,8.9,7.3,9,7,9
                                                S6.5,8.9,6.3,8.7C6.1,8.5,6,8.3,6,8z M11.7,21.3c0.4,0.4,0.4,1,0,1.4C11.5,22.9,11.3,23,11,23s-0.5-0.1-0.7-0.3l-3-3
                                                c-0.4-0.4-0.4-1,0-1.4l3-3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L9.4,19L11.7,21.3z M12.6,8.9c-0.1-0.1-0.2-0.1-0.3-0.2
                                                c-0.1-0.1-0.2-0.2-0.2-0.3C12,8.3,12,8.1,12,8c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.3c0.4-0.4,1-0.4,1.4,0
                                                c0.1,0.1,0.2,0.2,0.2,0.3C14,7.7,14,7.9,14,8c0,0.1,0,0.3-0.1,0.4c-0.1,0.1-0.1,0.2-0.2,0.3C13.5,8.9,13.3,9,13,9
                                                C12.9,9,12.7,9,12.6,8.9z M18.9,15.4l-4,8C14.7,23.8,14.4,24,14,24c-0.2,0-0.3,0-0.4-0.1c-0.5-0.2-0.7-0.8-0.4-1.3l4-8
                                                c0.2-0.5,0.8-0.7,1.3-0.4C18.9,14.4,19.1,15,18.9,15.4z M24.7,19.7l-3,3C21.5,22.9,21.3,23,21,23s-0.5-0.1-0.7-0.3
                                                c-0.4-0.4-0.4-1,0-1.4l2.3-2.3l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3,3C25.1,18.7,25.1,19.3,24.7,19.7z"/>
                                        </svg>
                                        Ingeniería de Software
                                    </h3>
                                    <nav>
                                        <ul class="grid grid-cols-2 gap-2">
                                            <li 
                                                v-for="category in categories.hombre" 
                                                :key="category"
                                                role="none"
                                            >
                                                <NuxtLink 
                                                    :to="`/categoria/hombre/${category.toLowerCase()}`" 
                                                    class="block text-gray-600 hover:text-purple-600 hover:bg-gray-50 p-2 rounded-md transition-colors duration-150"
                                                    role="menuitem"
                                                >
                                                    {{ category }}
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </section>
                                <section>
                                    <h3 class="text-lg font-black bg-blue-100 py-1 px-3 rounded-md text-center text-blue-600 mb-4 flex items-center justify-center">
                                        <svg class="w-6 h-6 text-center mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 16C10.6193 16 9.5 17.1193 9.5 18.5C9.5 19.8807 10.6193 21 12 21C13.3807 21 14.5 19.8807 14.5 18.5C14.5 17.1193 13.3807 16 12 16ZM12 16V12M5.5 8C6.88071 8 8 6.88071 8 5.5C8 4.11929 6.88071 3 5.5 3C4.11929 3 3 4.11929 3 5.5C3 6.88071 4.11929 8 5.5 8ZM5.5 8V8.8C5.5 9.92011 5.5 10.4802 5.71799 10.908C5.90973 11.2843 6.21569 11.5903 6.59202 11.782C7.01984 12 7.57989 12 8.7 12H15.3C16.4201 12 16.9802 12 17.408 11.782C17.7843 11.5903 18.0903 11.2843 18.282 10.908C18.5 10.4802 18.5 9.92011 18.5 8.8V8M18.5 8C19.8807 8 21 6.88071 21 5.5C21 4.11929 19.8807 3 18.5 3C17.1193 3 16 4.11929 16 5.5C16 6.88071 17.1193 8 18.5 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        Ingeniería de Sistemas
                                    </h3>
                                    <nav>
                                        <ul class="grid grid-cols-2 gap-2">
                                            <li 
                                                v-for="category in categories" 
                                                :key="category"
                                                role="none"
                                            >
                                                <NuxtLink 
                                                    :to="`/categoria/${category.toLowerCase().replace(/ /g, '-')}`" 
                                                    class="block text-gray-600 hover:text-purple-600 hover:bg-gray-50 p-2 rounded-md transition-colors duration-150"
                                                    role="menuitem"
                                                >
                                                    {{ category }}
                                                </NuxtLink>
                                            </li>
                                        </ul>
                                    </nav>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Backdrop overlay -->
                <div 
                    class="fixed inset-0 bg-black bg-opacity-25" 
                    aria-hidden="true"
                    style="margin-top: 4rem;"
                ></div>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { getAllCategories } from '~/data/categorias'

const categories = ref([])

onMounted(async () => {
    try {
        categories.value = await getAllCategories()
    } catch (error) {
        console.error('Error loading categories:', error)
    }
})

defineProps({
    isVisible: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped>
.fixed {
    position: fixed;
}


</style>