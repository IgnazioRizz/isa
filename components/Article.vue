<template>
    <div class=" w-full lg:w-4/12">
        <h2 class="text-4xl lg:text-6xl text-center mb-0">{{ article.title }}</h2>
        <div class="relative">
            <div class="image-frame p-6 md:p-10 border-5 border-transparent inline-block">
                <UCarousel ref="carouselRef" v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }"
                    class="rounded-lg overflow-hidden block max-w-full border-5 border-transparent">
                    <img :src="item" draggable="false" class="w-full h-auto" alt="">
                </UCarousel>
            </div>
        </div>
    </div>

    <div class="w-full lg:w-4/12 mt-14 mx-4">
        <h3 class="text-3xl lg:text-4xl mb-2 text-center">{{ article.description }}</h3>
        <p class="text-lg lg:text-xl text-justify">{{ article.long_description }}</p>
    </div>
</template>

<script setup>
const { article } = defineProps(['article']);
const carouselRef = ref();
const items = [
'https://picsum.photos/600/800?random=1',
'https://picsum.photos/600/800?random=2',
'https://picsum.photos/600/800?random=3',
'https://picsum.photos/600/800?random=4',
'https://picsum.photos/600/800?random=5',
'https://picsum.photos/600/800?random=6'
]

onMounted(() => {
    setInterval(() => {
        if (!carouselRef.value) return

        if (carouselRef.value.page === carouselRef.value.pages) {
            return carouselRef.value.select(0)
        }

        carouselRef.value.next()
    }, 3000)
})
</script>

<style>
.title-container {
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: 5.5rem 0 0 3rem;
    gap: 2rem;
}

.image-frame {
    background-image: url('/frame-verticale.png');
    background-size: cover;
}

</style>