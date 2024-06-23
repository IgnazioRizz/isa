<template>
    <span style="font-size: 75px;">{{ title }}</span>
    <div class="first-rect"></div>
    <div class="second-rect"></div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true 
    }
});
</script>

<style>
.first-rect{
    background-color: #D9D9D9;
    width: 125px;
    height: 5px;
    margin-bottom: 1rem;
}
.second-rect{
    background-color: #3A86FF;
    width: 250px;
    height: 10px;
    margin-bottom: 3rem;
}
</style>