<template>
    <div 
      class="bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
    >
      <component :is="IconComponent" class="h-12 w-12 text-blue-500 mb-4" />
      <h3 class="text-xl font-semibold text-tintin-600 mb-2">
        {{ title }}
      </h3>
      <p class="text-gray-600">
        {{ description }}
      </p>
    </div>
</template>

<script setup>
import { BookOpenIcon, SearchIcon, BookmarkIcon } from 'lucide-vue-next'

const props = defineProps({
icon: {
    type: String,
    default: 'BookOpenIcon'
},
title: {
    type: String,
    default: 'Título por defecto'
},
description: {
    type: String,
    default: 'Descripción por defecto' 
},
})

const IconComponent = computed(() => {
return {
    BookOpenIcon,
    SearchIcon,
    BookmarkIcon,
}[props.icon]
})
</script>