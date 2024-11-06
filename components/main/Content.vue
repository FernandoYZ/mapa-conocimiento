<template>
    <div v-if="node" class="">
        <SectionPrincipal 
            :titulo="node.home.titulo"
            :descripcion="node.home.descripcion"
            :imagen="node.home.imagen"
        />
        
        <!-- Sección de tarjetas de videos -->
        <SectionContent
            v-if="node.section_card_video"
            :titulo="node.section_card_video.titulo"
            :descripcion="node.section_card_video.descripcion"
            :cards="node.section_card_video.cards"
        />

        <!-- Sección de contenido medio -->
        <SectionMedio
            v-if="node.section_medio"
            :titulo="node.section_medio.titulo"
            :descripcion="node.section_medio.descripcion"
            :contenido="node.section_medio.contenido"
        />

        <!-- Sección de herramientas de aseguramiento de calidad -->
        <SectionFeature
            v-if="node.section_video_modal"
            :titulo="node.section_video_modal.titulo"
            :cards="node.section_video_modal.cards"
        />
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { KnowledgeNode } from '@/models/NodeModel'; 

const props = defineProps<{ node: KnowledgeNode }>();
</script>
