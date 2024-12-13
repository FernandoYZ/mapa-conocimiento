<template>
    <div 
        class="relative group"
        @mouseenter="showTooltip"
        @mouseleave="hideTooltip"
    >
        <slot></slot>
        <div 
            v-if="visible" 
            class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-max bg-black text-gray-100 text-xs rounded-md shadow-lg border border-gray-300 py-2 px-4"
            :style="{ opacity: visible ? 1 : 0 }"
        >
            <div class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-full w-4 h-4 bg-black border-gray-300 rotate-45 shadow-lg"></div>
            {{ text }}
        </div>
    </div>
</template>

<script setup>  
const props = defineProps({
    text: {
        type: String,
        required: true
    }
});

const visible = ref(false);

const showTooltip = () => visible.value = true;
const hideTooltip = () => visible.value = false;
</script>
  
<style scoped>
.tooltip-enter-active,
.tooltip-leave-active {
    transition: opacity 0.5s ease-in-out;
}
  
.tooltip-enter,
.tooltip-leave-to {
    opacity: 10;
}
</style>
  