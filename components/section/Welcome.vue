<template>
    <section class="relative h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-20 xl:px-32 overflow-hidden">
      <BgAnimated />
      <header class="relative z-10">
        <h1 class="text-5xl md:text-6xl font-extrabold text-white drop-shadow-md">
          {{ header.title }}
        </h1>
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-100 mt-4 drop-shadow-sm">
          {{ header.subtitle }}
        </h2>
      </header>
      <p class="relative z-10 text-xl mt-6 max-w-2xl text-neutral-300 leading-relaxed drop-shadow-sm">
        {{ welcomeMessage }}
      </p>
      <div class="relative z-10 mt-8">
        <button @click="goToMap" class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
          Explorar el Mapa
        </button>
      </div>
  
      <div class="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30"></div>
    </section>
  </template>
  
  <script lang="ts">
  import { IndexViewModel } from '@/viewmodel/IndexViewModel';
  
  export default defineComponent({
    name: 'SectionWelcome',
    setup() {
      const viewModel = new IndexViewModel();
      
      const header = reactive({
        title: '',
        subtitle: ''
      });


      const welcomeMessage = ref('');
  
      const loadData = async () => {
        await viewModel.loadData();
        if (viewModel.model) {
          Object.assign(header, viewModel.model.header);
          welcomeMessage.value = viewModel.model.welcomeMessage;
        }
      };
  
      onMounted(loadData);
  
      const goToMap = () => {
        console.log('Explorar el Mapa');
      };
  
      return { header, welcomeMessage, goToMap };
    },
  });
  </script>
  