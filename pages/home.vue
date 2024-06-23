<template>
    <div class="homepage-container relative w-full h-screen overflow-hidden">
        <img class=" md:w-full md:h-screen" src="/image-home.jpg" alt="">
        <video autoplay loop muted playsinline class="md:hidden absolute top-0 left-0 w-full h-full object-cover">
            <source src="/video_homepage.mp4" type="video/mp4">
        </video>
        <div class="absolute left-1/3 md:left-1/2 bottom-1">
            <img src="/arrow.gif" alt="">
        </div>
    </div>
    <div class="image-bg">
        <div class="lg:mx-52 lg:my-14 mx-10 my-1 flex items-center justify-center" id="chi_sono">
            <div>
                <Title title="CHI SONO" />
                <span class="text-2xl lg:text-3xl text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem modi quidem illum atque dicta sit error, fugiat est harum quas!
                </span>
                <div v-if="image_whoami.length > 0" class="lg:hidden mt-4">
                    <Image :image_source="image_whoami[0]" />
                </div>
                <div class="float-right mt-8 mb-4 lg:w-1/2 w-full">
                    <span class="block text-3xl lg:text-4xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, earum.
                    </span>
                    <span class="block text-xl lg:text-2xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit cumque natus
                        obcaecati?
                        Maiores labore, exercitationem repudiandae magnam itaque et!
                    </span>
                </div>
                <div class="hidden lg:inline-flex relative mt-8 gap-4">
                    <div v-for="(i, index) in image_whoami" :key="index" class="image-container"
                        :class="{ 'text-right': index > 1 }">
                        <Image :image_source="i" />
                    </div>
                </div>
                <div v-if="image_whoami.length > 1" class="lg:hidden mt-4">
                    <Image :image_source="image_whoami[1]" />
                </div>
            </div>
        </div>
    </div>

    <div class="lg:mx-52 lg:my-14 mx-10 my-1" id="shop">
        <Title title="SHOP" />
        <div class="flex lg:flex-row flex-col justify-between">
            <div class="flex items-center justify-center">
                <Button title="ENTRA" href="/shop" class="flex justify-center items-center " />
            </div>
            <div>
                <ul class="mt-5 shop-instruction text-3xl lg:text-4xl flex flex-col gap-y-5">
                    <li><span>1</span> VISITA LO SHOP</li>
                    <li><span>2</span> SCEGLI IL CAPO CHE PREFERISCI</li>
                    <li><span>3</span> CONTATTAMI SU IG PER L'ACQUISTO</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="lg:mx-52 lg:my-14 mx-10 my-1" id="custom">
        <Title title="CUSTOM" />
        <div class="mb-4">
            <span class="text-3xl lg:text-4xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore magnam animi ipsam numquam non ratione vitae dolores minima eum est!
            </span>
        </div>
        <div class="hidden lg:grid lg:gap-8 lg:grid-cols-2">
            <p v-for="(i, index) of image_customization" :key="index" class="image-item">
                <Image :image_source="i" class="" />
            </p>
        </div>
        <div class="lg:hidden image-hor mt-3 p-6 md:p-10 border-5 border-transparent inline-block">
            <UCarousel ref="carouselRefHome" v-slot="{ item }" :items="image_customization" :ui="{ item: 'basis-full' }"
                class="rounded-lg overflow-hidden block max-w-full border-5 border-transparent">
                <img :src="item.src" :width="item.width" :height="item.height" class="w-full h-auto" draggable="false"
                    alt="">
            </UCarousel>
        </div>
    </div>
    <div class="lg:mx-52 lg:my-14 mx-10 my-1" id="contact">
        <Title title="CONTACT US" />
        <div class="mb-8">
            <span class="text-3xl lg:text-4xl">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore magnam animi ipsam numquam non ratione vitae dolores minima eum est!
            </span>
        </div>
        <div class="overflow-x-auto flex flex-row justify-between gap-x-4 w-full
        ">
            <p v-for="card of cards_data">
                <Card :data="card" />
            </p>
        </div>
    </div>
    <div class="lg:mx-52 lg:my-14 mx-10 my-1">
        <Title title="FAQs" />
        <div>
            <UAccordion color="blue" variant="ghost" size="lg" class="text-lg"
                :items="[{ label: '1. What is Nuxt UI?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: '2. Getting Started', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: '3. Theming', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: '4. Components', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }]" />
        </div>
    </div>

    <footer class="footer mt-3 lg:text-3xl text-xl md:flex md:flex-row md:justify-between">
        <div class="flex flex-row">
            <span>Seguici su:</span>
            <span>
                <Icon icon="devicon:facebook" class="rounded-lg" />
            </span>
            <span>
                <Icon icon="skill-icons:instagram" />
            </span>
        </div>
        <div class="flex flex-row">
            <span class="text-left">Contattaci su:</span>
            <div class="flex flex-col text-xl">
                <span>
                    email@email.com
                </span>
                <span>
                    +39 1234567890
                </span>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue';

import Title from '~/components/Title.vue';
import Button from '~/components/Button.vue';

const carouselRefHome = ref();
const image_whoami = ref([
    {
        src: './jovanotti.jpg', width: '100%', height: 'auto'
    },
    {
        src: './jovanotti.jpg', width: '100%', height: 'auto'
    },
    {
        src: './jovanotti.jpg', width: '100%', height: 'auto'
    }
])

const image_customization = ref([
    {
        src: './jovanotti.jpg', width: '100%', height: 'auto'
    },
    {
        src: './jovanotti.jpg', width: '100%', height: 'auto'
    },
    {
        src: './jovanotti.jpg', width: '80%', height: 'auto'
    },
    {
        src: './jovanotti.jpg', width: '100%', height: 'auto'
    },
])

const cards_data = ref([
    {
        title: 'Recensione 1',
        description: 'Qua poi mettiamo le foto delle recensioni'
    },
    {
        title: 'Recensione 1',
        description: 'Articolo veramente bello'
    },
    {
        title: 'Recensione 1',
        description: 'Articolo veramente bello'
    },
    {
        title: 'Recensione 1',
        description: 'Articolo veramente bello'
    }])

onMounted(() => {
    setInterval(() => {
        if (!carouselRefHome.value) return

        if (carouselRefHome.value.page === carouselRefHome.value.pages) {
            return carouselRefHome.value.select(0)
        }

        carouselRefHome.value.next()
    }, 3000)
})
</script>

<style>
html {
    margin: 0;
}   

.menu-container {
  background-color: black;
  opacity: 0.9;
  width: 22.5vw;
  height: 150vh;
  transform: rotate(10deg) translate3d(-125px, -125px, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
    list-style: none;
    color: white;
    font-size: 40px;
    text-align: center;
    transform: rotate(-10deg);
    padding: 0;
}

.menu li {
    margin-bottom: 3rem;
}

.image-container {
    width: 50%;

}

.image-container:nth-child(2) {
    position: absolute;
    z-index: 999;
    top: 10rem;
    left: 26rem;
}

.image-item {
    width: 80%;
}

.shop-instruction li {
    list-style: none;
}

.shop-instruction span {
    color: #3A86FF;
    text-shadow: 0 0 10px rgb(58, 133, 255);
    font-size: 50px;
    margin-right: 1rem;
}

.footer {
    background-color: rgba(0, 0, 0, 0.800);
        color: white;
    text-align: center;
}

.footer span {
    margin: 1rem;
}
</style>