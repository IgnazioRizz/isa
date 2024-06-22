<template>
    <NuxtLink type="button" class="button-shop" :to="props.href">
        {{ props.title }}
    </NuxtLink>
</template>

<script setup>

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    href:{
        type: String,
    },
});
</script>

<style>
.button-shop {
    width: 645px;
    height: 100px;
    box-shadow: 0 0 25px rgb(58, 133, 255);
    background-color: transparent;
    border: 4px solid #3A86FF;
    border-radius: 30px;
    font-size: 50px;
}
</style>