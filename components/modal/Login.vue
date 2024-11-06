<template>
  <transition name="modal-fade">
    <div 
      v-if="isVisible" 
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" 
      @click.self="closeModal"
    >
      <article class="bg-white rounded-2xl shadow-xl max-w-sm w-full p-8 relative transition-transform transform duration-300 ease-in-out">
        <button 
          @click="closeModal" 
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-lg"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        <header class="flex flex-col items-center text-center mb-6">
          <img src="https://via.placeholder.com/50" alt="Logo" class="mb-4 rounded-full shadow-md" />
          <h2 class="text-2xl font-semibold text-gray-800">
            La mejor manera de aprender ingeniería de software.
          </h2>
        </header>

        <section>
          <button @click.prevent class="flex items-center w-full justify-center border border-gray-300 rounded-full py-3 mb-4 hover:bg-gray-100 transition" aria-label="Iniciar sesión con Google">
            <img src="/icons/google.svg" alt="" class="mr-3" width="25" height="25" />
            <span class="text-gray-700 font-medium">Iniciar sesión con Google</span>
          </button>

          <button @click.prevent class="flex items-center w-full justify-center border border-gray-300 rounded-full py-3 mb-4 hover:bg-gray-100 transition" aria-label="Iniciar sesión con Facebook">
            <img src="/icons/facebook.svg" alt="" class="mr-3" width="25" height="25" />
            <span class="text-gray-700 font-medium">Iniciar sesión con Facebook</span>
          </button>

          <button @click.prevent class="flex items-center w-full justify-center bg-gray-900 text-white rounded-full py-3 mb-4 hover:bg-gray-800 transition" aria-label="Iniciar sesión con Correo">
            <span class="font-medium">Iniciar sesión con Correo</span>
          </button>
        </section>

        <footer class="text-sm text-gray-500 mt-4 text-center">
          ¿Nuevo usuario? <a href="#" class="text-blue-500 hover:underline">Registrarse</a>
        </footer>
      </article>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  isVisible: Boolean,
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<style scoped>
.modal-fade-enter-active, .modal-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.modal-fade-enter-from, .modal-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

