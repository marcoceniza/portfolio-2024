<template>
  <div class="text-center">
    <Banner id="banner"/>
    <Main id="main"/>
    <Bottom id="bottom"/>
    <Footer id="footer"/>
  </div>
</template>

<script setup>
import Main from '@/components/Main.vue';
import Banner from '@/components/Banner.vue';
import Bottom from '@/components/Bottom.vue';
import Footer from '@/components/Footer.vue';
import { onMounted, ref } from 'vue';
import 'animate.css';

onMounted(() => {
  const srList = ['#main', '#bottom', '#footer']

  srList.forEach(className => {
    ScrollReveal().reveal(className, { delay: 500 });
  });
});
</script>