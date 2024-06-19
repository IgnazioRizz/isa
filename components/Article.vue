<template>
    <div class="flex justify-center">
        <div class="w-full lg:w-2/3 xl:w-1/2">
            <h2 class="text-4xl lg:text-6xl text-center mb-0">{{ article.title }}</h2>
            <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden"
                indicators>
                <img :src="item" class="w-full h-auto" draggable="false">
            </UCarousel>
        </div>
    </div>

    <div class="title-container w-full mt-8 text-center">
        <h3 class="text-3xl lg:text-4xl mb-2">{{ article.description }}</h3>
        <p class="text-lg lg:text-xl text-justify">{{ article.long_description }}</p>
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