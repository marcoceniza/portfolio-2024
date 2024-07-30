<template>
  <div class="text-center">
    <Header :class="{ toggle: toggleNavbar }" id="header"/>
    <Banner id="banner"/>
    <Main id="main"/>
    <Bottom id="bottom"/>
    <Footer id="footer"/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Banner from '@/components/Banner.vue';
import Main from '@/components/Main.vue';
import Bottom from '@/components/Bottom.vue';
import Footer from '@/components/Footer.vue';
import { onMounted, ref } from 'vue';
import 'animate.css';

const toggleNavbar = ref(false);

window.addEventListener('scroll', function() {
  let currentScroll = window.scrollY;
  let currentWidth = window.innerWidth;

  if (currentScroll > 200 && currentWidth !== 1000) toggleNavbar.value = true;
  else toggleNavbar.value = false;
});

onMounted(() => {
  const srList = ['#main', '#bottom', '#footer']

  srList.forEach(className => {
    ScrollReveal().reveal(className, { delay: 500 });
  });
});
</script>

<style>
.toggle{position: fixed; left: 0; right: 0; margin: 0 auto; top: 0; z-index: 3;}
</style>