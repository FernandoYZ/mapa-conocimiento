<template>
    <nav class="fixed top-9">
        <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 -translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-1"
        >
            <div 
                v-if="isVisible"
                class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
            >
                <NuxtLink
                    v-for="tool in tools"
                    :key="tool.name"
                    :to="tool.href"
                    class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-purple-100 transition-colors duration-150"
                >
                    <img :src="`/icons/${tool.icon}.svg`" alt="" class="h-5 w-5 mr-2" />
                    {{ tool.name }}
                </NuxtLink>
            </div>
        </Transition>
    </nav>
</template>

<script setup>
const tools = [
    { name: 'Flashcard', href: '/herramientas/flashcard', icon: 'cards' },
    { name: 'TutorIA', href: '/herramientas/tutoria', icon: 'cards' },
    { name: 'Preguntas', href: '/herramientas/preguntas', icon: 'cards' },
]

defineProps({
    isVisible: {
        type: Boolean,
        default: false
    }
})
</script>