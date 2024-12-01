<template>
    <section class="py-8 bg-purple-700">
        <h2 class="lg:text-6xl text-5xl text-center font-bold pt-7 text-white">Alcance</h2>
        <div class="w-full mx-auto max-w-screen-xl">
            <div class="py-8 flex flex-col md:flex-row justify-center gap-8 overflow-hidden md:px-48 px-0">
                <article 
                    v-for="(item, index) in data.alcance" 
                    :key="index" 
                    class="flex items-center p-6 flex-col lg:flex-row"
                >
                    <img 
                    :src="item.icon" 
                    :alt="item.alt" 
                    class="w-20 h-20 object-contain mr-6"
                    />
                    <div class="text-2xl text-center md:text-left text-white flex-col lg:flex-row ">
                    <p class="font-light max-w-xs">{{ item.text }}</p>
                    <div class="font-semibold tracking-wider">{{ item.value }}</div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
  
<script setup>
defineProps({
    data: {
        type: Object,
        required: true
    }
});
</script>
  