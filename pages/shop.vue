<template>
    <NuxtLink to="/home">
        <div class="m-6 flex flex-row gap-x-2 text-xl">
            <Icon icon="mingcute:arrow-left-fill" />
            <span>TORNA INDIETRO</span>
        </div>
    </NuxtLink>
    <div class="flex flex-col justify-center items-center">
        <Title title="CATALOGO" />
    </div>
    <div v-for="article of article_data" :key="article.id"
        :class="[isEven(article.id) ? 'flex flex-col lg:flex-row-reverse justify-start m-8' : 'flex flex-col lg:flex-row m-8']">
        <Article :article="article" />
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import Title from '~/components/Title.vue';
import Article from '../components/Article.vue';

const article_data = ref([
    {   
        id: 1,
        title: 'Nome capo',
        description: 'Breve Descrizione capo',
        long_description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolore cupiditate deleniti est! Tenetur modi eius, aspernatur alias nam nisi',
        image: './article-1.jpg',
    },
    {
        id: 2,
        title: 'Nome capo',
        description: 'Breve Descrizione capo',
        long_description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolore cupiditate deleniti est! Tenetur modi eius, aspernatur alias nam nisi',
        image: './article-1.jpg',
    }, 
    {
        id: 3,
        title: 'Nome capo',
        description: 'Breve Descrizione capo',
        long_description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolore cupiditate deleniti est! Tenetur modi eius, aspernatur alias nam nisi',
        image: './article-1.jpg',
    }, 
    {
        id: 4,
        title: 'Nome capo',
        description: 'Breve Descrizione capo',
        long_description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum dolore cupiditate deleniti est! Tenetur modi eius, aspernatur alias nam nisi',
        image: './article-1.jpg',
    }
]);

function isEven(id){
    return id % 2 === 0;
}
</script>

<style>
</style>