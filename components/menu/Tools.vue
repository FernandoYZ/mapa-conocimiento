<template>
    <Transition
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
    >
        <div 
            v-if="isVisible"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1"
        >
            <NuxtLink
                v-for="tool in tools"
                :key="tool.name"
                :to="tool.href"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-100"
            >
                {{ tool.name }}
                </NuxtLink>
        </div>
    </Transition>
</template>
  
<script setup>
const tools = [
    { name: 'Flashcard', href: '/herramientas/flashcard' },
    { name: 'TutorIA', href: '/herramientas/tutoria' },
    { name: 'Preguntas', href: '/herramientas/preguntas' },
]
  
defineProps({
    isVisible: {
        type: Boolean,
        default: false
    }
})
</script>