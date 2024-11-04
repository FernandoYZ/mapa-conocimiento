<template>
  <footer class="w-full bg-gradient-to-r from-purple-950 to-neutral-950 text-white">
    <div class="container mx-auto px-4 md:px-8 lg:px-16 xl:px-52 py-12">
      <!-- Redes Sociales -->
      <nav class="flex justify-center mb-10 space-x-4 py-4">
        <a
          v-for="(link, index) in footer.social"
          :key="index"
          :href="link.url"
          :aria-label="link.alt"
          target="_blank" rel="noopener noreferrer"
          class="transition transform hover:scale-105 hover:opacity-90"
        >
          <img :src="link.icon" :alt="link.alt" class="w-7 h-7" />
        </a>
      </nav>

      <section class="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div class="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img src="/icons/google.svg" alt="Logo" class="w-40 mb-4 opacity-90" />
          <p class="text-neutral-400 leading-relaxed max-w-md">
            {{ footer.description }}
          </p>
        </div>

        <aside class="text-center md:text-right w-full md:w-auto">
          <h4 class="text-lg font-semibold mb-4 text-neutral-100">Información de Contacto</h4>
          <ul class="space-y-2 text-neutral-400">
            <li>Email: <a :href="'mailto:' + footer.contacto.email" class="hover:text-white underline transition">{{ footer.contacto.email }}</a></li>
            <li>Teléfono: <a :href="'tel:' + footer.contacto.telefono" class="hover:text-white underline transition">{{ footer.contacto.telefono }}</a></li>
            <li>Dirección: {{ footer.contacto.direccion }}</li>
          </ul>
        </aside>
      </section>

      <div class="text-center mt-10 text-neutral-500 border-t border-neutral-700 pt-6">
        <p>© 2024 IngenioMap. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { IndexViewModel } from '@/viewmodel/IndexViewModel';
import { IndexModel } from '@/models/IndexModel';

export default defineComponent({
  name: 'Footer',
  setup() {
    const viewModel = new IndexViewModel();
    const footer = reactive<IndexModel['footer']>({
      description: '',
      social: [],
      contacto: { email: '', telefono: '', direccion: '' },
    });

    const loadData = async () => {
      await viewModel.loadData();
      if (viewModel.model) {
        Object.assign(footer, viewModel.model.footer);
      }
    };

    onMounted(loadData);

    return { footer };
  },
});
</script>
