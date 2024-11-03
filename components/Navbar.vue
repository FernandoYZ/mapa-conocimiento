<template>
<section>
<nav class="navbar font-semibold translate-y-[20px] z-40 fixed top-0 left-1/2 -translate-x-1/2 rounded-full bg-white max-w-screen-xl transition-shadow">
    <div class="container mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        <div class="text-black text-sm font-bold">
            <a href="/">IngenioMap</a>
        </div>
        <div class="flex space-x-2 text-xs">
            <a @click="toggleModal(true)" class="rounded-full text-black border-2 border-gray-400 bg-white hover:border-black px-4 py-2 transition">Ingresa</a>
            <a href="#" class="rounded-full text-white border-2 border-purple-600 bg-purple-600 hover:border-purple-500 hover:bg-purple-500 px-4 py-2 transition">Regístrate</a>
        </div>
    </div>
</nav>
<ModalLoginModal :isVisible="isModalVisible" @close="toggleModal(false)" />
</section>
</template>

<script setup>
const isModalVisible = ref(false);

const toggleModal = (visible) => {
    isModalVisible.value = visible;
};

const addShadowOnScroll = () => {
    document.querySelector('.navbar')?.classList.toggle('shadow-lg', window.scrollY > 0);
};

onMounted(() => window.addEventListener('scroll', addShadowOnScroll));
onUnmounted(() => window.removeEventListener('scroll', addShadowOnScroll));
</script>

<style>
.navbar {
    transition: box-shadow 0.3s ease-in-out;
    border: 1.5px solid #fff;
    width: 95%;
}

@media (min-width: 768px) {
    .navbar {
        width: 94%;
    }
}

@media (min-width: 800px) {
    .navbar {
        width: 88%;
    }
}

@media (min-width: 1024px) {
    .navbar {
        width: 82%;
    }
}

@media (min-width: 1530px) {
    .navbar {
        width: 70%;
    }
}
@media (min-width: 1000px) {
    .navbar {
        width: 75%;
    }
}

.shadow-lg {
    border: 1.5px solid #dadadab3;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>