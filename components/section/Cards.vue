<template>
    <section class="container mx-auto px-4 md:px-8 lg:px-16 xl:px-52 py-16 bg-white">
        <h3 class="text-3xl font-semibold text-center text-tintin-600 mb-10">
            Explora las características de nuestro mapa de conocimiento
        </h3>
        <div class="grid md:grid-cols-3 gap-10">
            <CardFeature 
                v-for="(card, index) in featureCards"
                :key="index"
                :icon="card.icon" 
                :title="card.title" 
                :description="card.description"
            />
        </div>
    </section>
</template>

<script lang="ts">
import { IndexViewModel } from '@/viewmodel/IndexViewModel';

export default defineComponent({
    name: 'SectionCard',
    setup() {
        const viewModel = new IndexViewModel();
        const featureCards = reactive([] as Array<{ icon: string, title: string, description: string }>);

        const loadData = async () => {
            await viewModel.loadData();
            if (viewModel.model) {
                featureCards.push(...viewModel.model.featureCards);
            }
        };

        onMounted(loadData);

        return { featureCards };
    },
});
</script>
