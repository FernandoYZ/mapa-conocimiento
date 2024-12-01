<template>
    <div>
        <SectionWelcome
            :titulo="data.header.title"
            :subtitulo="data.header.subtitle"
            :bienvenida="data.welcomeMessage"
        />

        <SectionCards :data="data" />
        <SectionAlcance :data="data" />
    </div>
</template>

<script setup>
import IndexData from '~/data/index.json'

const { data } = await useAsyncData('index-page', () => {
    return new Promise((resolve) => {
        resolve(IndexData)
    })
})
// const data = ref(IndexData)
</script>