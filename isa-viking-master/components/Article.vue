<template>
    <div style="width: 30%;">
        <h2 style="font-size: 70px; text-align: center; margin: 0;">{{ article.title }}</h2>
        <UCarousel v-slot="{ item }" :items="items" :ui="{
            item: 'basis-full',
            container: 'rounded-lg'
        }" :prev-button="{
            color: 'gray',
            icon: 'i-heroicons-arrow-left-20-solid',
            class: '-left-12'
        }" :next-button="{
        color: 'gray',
        icon: 'i-heroicons-arrow-right-20-solid',
        class: '-right-12'
        }" arrows class="w-64 mx-auto">
            <img :src="item" class="w-full" draggable="false">
        </UCarousel>
    </div>
    <div class="title-container">
        <h3 style="font-size: 50px; margin: 0;">{{ article.description }}</h3>
        <span style="font-size: 25px;">{{ article.long_description }}</span>
        <Button title="Acquista" class="button" />
    </div>
</template>

<script setup>
const { article } = defineProps(['article']);


    const items = [
    'https://picsum.photos/600/800?random=1',
    'https://picsum.photos/600/800?random=2',
    'https://picsum.photos/600/800?random=3',
    'https://picsum.photos/600/800?random=4',
    'https://picsum.photos/600/800?random=5',
    'https://picsum.photos/600/800?random=6'
    ]
</script>

<style>
.title-container {
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: 5.5rem 0 0 3rem;
    gap: 2rem;
}

.button {
    width: 90%;
    height: 90px;
    text-align: center;
}
</style>