<template>
    <section class="container mx-auto px-4 md:px-8 lg:px-16 xl:px-52 py-16 bg-white">
        <h3 class="text-3xl font-semibold text-center text-tintin-600 mb-10">
            Explora las características de nuestro mapa de conocimiento
        </h3>
        
        <div v-if="!data" class="text-center">
            <p>Cargando características...</p>
        </div>
    
        <div v-else>
            <div v-if="data?.featureCards?.length" class="grid md:grid-cols-3 gap-10">
            <CardFeature
                v-for="(card, index) in data.featureCards"
                :key="index"
                :icon="card?.icon"
                :title="card?.title"
                :description="card?.description"
            />
            </div>
    
            <p v-else class="text-center">No hay características disponibles en este momento.</p>
        </div>
    </section>
</template>
  
<script setup>
defineProps({
    data: {
        type: Object,
        required: true,
    }
});
</script>
  