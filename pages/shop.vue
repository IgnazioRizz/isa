<template>
    <div class="title">
        <Title title="Catalogo" />
    </div>
    <div v-for="article of article_data" :key="article.id"
        :class="[isEven(article.id) ? 'article-container-even' : 'article-container']">
        <Article :article="article" />
    </div>
</template>

<script setup>
import Title from '~/components/Title.vue';

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
    return id % 2 == 0;
}
</script>

<style>
.title{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
}
.article-container {
    display: flex;
    flex-direction: row;
    margin: 2rem;
}
.article-container-even {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
    margin: 2rem;
}
</style>