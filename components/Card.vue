<template>
    <UCard class="card">
        <template #header>
            <div>
                <span>{{ data.title }}</span>
            </div>
        </template>

        <div>
            <span>{{ data.description }}</span>
        </div>

        <template #footer>
            <span>
                <Icon icon="noto:star" />
            </span>
        </template>
    </UCard>
</template>


<script setup>
import { Icon } from '@iconify/vue';

const { data } = defineProps(['data'])
</script>

<style>
.card{
    width: 300px;
    height: 250px;
}
</style>