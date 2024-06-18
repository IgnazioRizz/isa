<template>
    <div class="homepage-container">
        <div class="menu-container">
            <ul class="menu flex flex-col">
                <li @click="scrollToElement('chi_sono')">CHI SONO</li>
                <li @click="scrollToElement('shop')">SHOP</li>
                <li @click="scrollToElement('custom')">CUSTOMIZATION</li>
                <li @click="scrollToElement('contact')">CONTACT</li>
            </ul>
        </div>
    </div>
    <div class="image-bg">
        <div class="lg:mx-52 lg:my-14 mx-2 my-1" id="chi_sono">
            <div>
                <Title title="CHI SONO" />
                <span style="font-size: 38px;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem modi quidem illum atque dicta sit error, fugiat est harum quas!
                </span>
                <div style="float: right; margin: 2rem 0;" class="lg:w-1/2 w-full">
                    <span style="font-size: 40px;">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, earum.
                    </span>
                    <span style="font-size: 30px;">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit cumque natus
                        obcaecati?
                        Maiores labore, exercitationem repudiandae magnam itaque et!
                    </span>
                </div>
                <div style="display: inline-flex; position: relative;">
                    <div v-for="(i, index) of image_whoami" class="image-container"
                        :style="{ textAlign: index > 1 ? 'end' : '' }">
                        <Image :image_source="i" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="lg:mx-52 lg:my-14 mx-10 my-1 w-full" id="shop" style="margin-top: 160px;">
        <Title title="SHOP" />
        <div class="flex lg:flex-row flex-col justify-between">
            <div class="flex justify-center items-center justify-center">
                <Button title="ENTRA NEL CATALOGO" href="/shop" class="flex justify-center items-center" />
            </div>
            <div>
                <ul style="font-size: 50px" class="shop-instruction">
                    <li><span>1</span> VISITA LO SHOP</li>
                    <li><span>2</span> SCEGLI IL CAPO CHE PREFERISCI</li>
                    <li><span>3</span> CONTATTAMI SU IG PER L'ACQUISTO</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="lg:mx-52 lg:my-14 mx-2 my-1" id="custom">
        <Title title="CUSTOMIZATION" />
        <span style="font-size: 38px;">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Inventore magnam animi ipsam numquam non ratione vitae dolores minima eum est!
        </span>
        <div style="display: grid; gap: 2rem; grid-template-columns: auto auto;">
            <p v-for="(i, index) of image_customization" :key="index" class="image-item">
                <Image :image_source="i" class="w-200"/>
            </p>
        </div>
    </div>
    <div class="lg:mx-52 lg:my-14 mx-2 my-1" id="contact">
        <Title title="CONTACT" />
        <div class="mb-8">
            <span style="font-size: 38px;">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore magnam animi ipsam numquam non ratione vitae dolores minima eum est!
            </span>
        </div>
        <div class="flex flex-row justify-between gap-x-4">
            <p v-for="card of cards_data">
                <Card :data="card" />
            </p>
        </div>
    </div>
    <footer class="footer flex flex-row justify-around gap-x-4">
        <p>
            <Icon icon="logos:facebook" /> nome facebook
        </p>
        <p>
            <Icon icon="skill-icons:instagram" /> Instagram
        </p>
        <p>
            <Icon icon="marketeq:email-open" /> email
        </p>
        <p>
            <Icon icon="fluent-emoji-flat:mobile-phone" /> telefono
        </p>
    </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue';

import Title from '~/components/Title.vue';
import Button from '~/components/Button.vue';


const image_whoami = ref([
    {
        src: './jovanotti.jpg', width: '80%', height: 'auto'
    },
    {
        src: './jovanotti.jpg', width: '80%', height: 'auto'
    },
    {
        src: './jovanotti.jpg', width: '80%', height: 'auto'
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
        src: './jovanotti.jpg', width: '100%', height: 'auto'
    },
    {
        src: './jovanotti.jpg', width: '100%', height: 'auto'
    },
])

const cards_data = ref([
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
    },
    {
        title: 'Recensione 1',
        description: 'Articolo veramente bello'
    }])


function scrollToElement(title) {
    const element = document.getElementById(title);
    element.scrollIntoView({ behavior: "smooth" });
}

</script>

<style>
html {
    margin: 0;
}

.homepage-container {
    background-image: url('./image-home.jpg');
    background-size: cover;
    height: 100vh;
    width: 100vw;
    max-height: 100vh;
    max-width: 100vw;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
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

.container {
    margin: 50px 200px;
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
    text-shadow: 0px 0px 10px rgb(58, 133, 255);
    font-size: 90px;
    margin-right: 1rem;
}

.footer {
    background-color: rgba(0, 0, 0, 0.800);
    font-size: 40px;
    color: white;
    text-align: center;
}

.footer span {
    margin: 2rem;
}
</style>