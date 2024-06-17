<template>
    <img 
        :src="image_source.src" 
        :width="image_source.width" 
        :height="image_source.height"
    >
</template>

<script setup>
const { image_source } = defineProps(['image_source'])
</script>

<style></style>