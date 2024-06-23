<template>
    <div class="image-hor p-4 md:p-10 border-5 border-transparent inline-block">
        <img class="block max-w-full border-5 border-transparent"
            :src="image_source.src" 
            :width="image_source.width"
            :height="image_source.height">
    </div>
</template>

<script setup>
const { image_source } = defineProps(['image_source'])
</script>

<style>
.image-hor {
    background-image: url('/frame.png');
    background-size: cover;
}
</style>