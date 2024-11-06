<template>
  <div class="bg-white rounded-[2rem] border-2 hover:border-gray-300 p-6 flex flex-col h-full">
      <img :src="image" alt="Course Image" class="rounded-t-3xl w-full h-32 object-cover mb-4" />

      <div class="flex-1">
          <div class="flex items-baseline justify-center mb-2">
              <span class="bg-purple-400 text-white text-xs font-bold rounded-full px-3 py-1">{{ nodeNumber }}</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-700 mb-2">{{ title }}</h3>
          <p class="text-gray-500 mb-4">{{ description }}</p>

          <h4 class="font-semibold text-lg mt-4">Temas:</h4>
          <ul class="list-disc list-inside text-gray-600">
              <li v-for="(tema, index) in temas" :key="index">{{ tema }}</li>
          </ul>
      </div>

      <div class="mt-4">
          <button 
              @click="$emit('select')"
              class="bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 rounded-full w-full transition duration-300 ease-in-out"
          >
              Ver Nodo
          </button>
      </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  nodeNumber: { type: String, required: true },
  temas: { type: Array, required: true },
});
</script>

