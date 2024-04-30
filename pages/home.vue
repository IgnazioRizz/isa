<template>
    <div class="homepage-container">
        <div class="menu-container">
<<<<<<< HEAD
            <ul class="menu flex flex-col">
                <li @click="scrollToElement('chi_sono')">CHI SONO</li>
                <li @click="scrollToElement('shop')">SHOP</li>
                <li @click="scrollToElement('custom')">CUSTOMIZATION</li>
                <li @click="scrollToElement('contact')">CONTACT</li>
            </ul>
        </div>
    </div>
    <div class="image-bg">
        <div class="container" id="chi_sono">
            <div>
                <Title title="CHI SONO" />
                <span style="font-size: 38px;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem modi quidem illum atque dicta sit error, fugiat est harum quas!
                </span>
                <div style="float: right; width: 50%; margin: 2rem 0;">
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
=======
            <ul class="menu">
                <li>CHI SONO</li>
                <li>SHOP</li>
                <li>CUSTOMIZATION</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </div>
    <div class="container">
        <div>
            <Title title="CHI SONO" />
            <span style="font-size: 38px;">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem modi quidem illum atque dicta sit error, fugiat est harum quas!
            </span>
            <div style="float: right; width: 50%; margin: 2rem 0;">
                <span style="font-size: 40px;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, earum.
                </span>
                <span style="font-size: 30px;">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis impedit cumque natus obcaecati?
                    Maiores labore, exercitationem repudiandae magnam itaque et!
                </span>
            </div>
            <div style="display: inline-flex; position: relative;">
                <div v-for="(i, index) of image_whoami" class="image-container"
                    :style="{ textAlign: index > 1 ? 'end' : '' }">
                    <Image :image_source="i" />
>>>>>>> e28160c (first commit)
                </div>
            </div>
        </div>
    </div>
<<<<<<< HEAD

    <div class="container" id="shop" style="margin-top: 160px;">
=======
    <div class="container">
>>>>>>> e28160c (first commit)
        <Title title="SHOP" />
        <div
            style="width: 100%;display: flex; position: relative; flex-direction: row; justify-content: space-between;">
            <div style="display: flex; justify-content: center; align-items: center;">
<<<<<<< HEAD
                <Button title="ENTRA NEL CATALOGO" href="/shop" />
=======
                <button type="button" class="button-shop">
                    ENTRA NEL CATALOGO
                </button>
>>>>>>> e28160c (first commit)
            </div>
            <div style="">
                <ul style="font-size: 50px" class="shop-instruction">
                    <li><span>1</span> VISITA LO SHOP</li>
                    <li><span>2</span> SCEGLI IL CAPO CHE PREFERISCI</li>
                    <li><span>3</span> CONTATTAMI SU IG PER L'ACQUISTO</li>
                </ul>
            </div>
        </div>
    </div>
<<<<<<< HEAD
    <div class="container" id="custom">
=======
    <div class="container">
>>>>>>> e28160c (first commit)
        <Title title="CUSTOMIZATION" />
        <span style="font-size: 38px;">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Inventore magnam animi ipsam numquam non ratione vitae dolores minima eum est!
        </span>
        <div style="display: grid; gap: 2rem; grid-template-columns: auto auto;">
            <p v-for="(i, index) of image_customization" :key="index" class="image-item">
                <Image :image_source=" i" />
            </p>
        </div>
    </div>
<<<<<<< HEAD
    <div class="container" id="contact">
=======
    <div class="container">
>>>>>>> e28160c (first commit)
        <Title title="CONTACT" />
        <span style="font-size: 38px;">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Inventore magnam animi ipsam numquam non ratione vitae dolores minima eum est!
        </span>
<<<<<<< HEAD
        <div>
            <Card />
        </div>
=======
>>>>>>> e28160c (first commit)
    </div>
    <footer class="footer">
        <span>nome facebook</span>
        <span>instagram</span>
        <span>email</span>
        <span>telefono</span>
    </footer>
</template>

<script setup>
import Title from '~/components/Title.vue';
<<<<<<< HEAD
import Button from '~/components/Button.vue';
=======
>>>>>>> e28160c (first commit)


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

<<<<<<< HEAD

function scrollToElement(title) {
    const element = document.getElementById(title);
    element.scrollIntoView({behavior: "smooth"});
}

</script>

<style>
html {
=======
</script>

<style>
body {
>>>>>>> e28160c (first commit)
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
.menu{
    list-style: none;
    color: white;
    font-size: 40px;
    text-align: center;
    transform: rotate(-10deg);
    padding: 0;
}
.menu li{
    margin-bottom: 3rem;
}
.container{
<<<<<<< HEAD
=======
    max-width: 100vw;
>>>>>>> e28160c (first commit)
    margin: 50px 200px;
}
 .image-container {
    width: 50%;
    
} 
.image-container:nth-child(2){
    position: absolute;
    z-index: 999;
    top: 10rem;
    left: 26rem;
}
.image-item {
   width: 80%;
}
<<<<<<< HEAD
=======
.button-shop{
    width: 645px;
    height: 150px;
    box-shadow: 0px 0px 25px rgb(58, 133, 255);
    background-color: transparent;
    border: 4px solid #3A86FF;
    border-radius: 30px;
    font-size: 50px;
}
>>>>>>> e28160c (first commit)
.shop-instruction li{
    list-style: none;
}
.shop-instruction span{
    color: #3A86FF;
    text-shadow: 0px 0px 10px rgb(58, 133, 255);
    font-size: 90px;
    margin-right: 1rem;
}
.footer{
    background-color: black;
    font-size: 40px;
    color: white;
    text-align: center;
}
.footer span{
    margin: 2rem 2rem;
}
</style>