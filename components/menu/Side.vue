
<template>
    <aside class="w-[300px] p-6 bg-gray-100 h-auto shadow-lg overflow-y-auto">
        <h2 class="text-2xl font-bold text-gray-700 mb-6 text-center">Cursos</h2>
        <ul class="space-y-4">
            <li 
                v-for="(course, index) in courses" 
                :key="index" 
                @click="selectCourse(course)"
                class="p-4 rounded-lg cursor-pointer transition duration-200 ease-in-out"
                :class="course === currentCourse ? 'bg-purple-200 text-purple-800 font-semibold' : 'bg-white text-gray-700 hover:bg-purple-100'"
            >
                <div class="flex justify-between items-center">
                    <span>{{ course.title }}</span>
                    <button @click.stop="toggleDropdown(index)" class="text-gray-500 focus:outline-none">
                        <svg 
                            :class="dropdownIndex === index ? 'rotate-180' : 'rotate-0'"
                            class="h-5 w-5 transition-transform duration-200"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
                <!-- Dropdown para mostrar los temas si está abierto -->
                <ul v-show="dropdownIndex === index" class="mt-2 pl-4 text-gray-600">
                    <li v-for="(tema, i) in course.temas" :key="i" class="text-sm list-disc">
                        {{ tema }}
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script setup lang="ts">
import { HomeNode } from '@/models/HomeModel'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    courses: {
        type: Array as () => HomeNode[],
        required: true,
    },
    currentCourse: {
        type: Object as () => HomeNode | null,
        required: true,
    }
});

const emit = defineEmits(['selectCourse']);

const dropdownIndex = ref<number | null>(null);

const selectCourse = (course: HomeNode) => {
    emit('selectCourse', course);
};

const toggleDropdown = (index: number) => {
    dropdownIndex.value = dropdownIndex.value === index ? null : index;
};
</script>
