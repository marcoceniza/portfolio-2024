<template>
  <header class="bg-[#313131]" :class="{ toggle: toggleNavbar }" id="header">
    <div class="wrapper flex justify-between items-center mx-auto px-4 min-h-[65px]">
      <a class="textColor text-white cursor-pointer font-bold text-[35px]" @click="$router.push('/')">MC</a>
      <nav>
        <ul class="flex text-white gap-5">
          <li><a class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('banner')">HOME</a></li>
          <li><a class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('main')">ABOUT</a></li>
          <li><a class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('bottom')">WORKS</a></li>
          <li><a class="cursor-pointer hover:underline" @click="$router.push('/')">RESUME</a></li>
          <li><a class="cursor-pointer hover:underline" @click="$router.push('/'); scrollToSection('footer')">CONTACT</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { RouterView } from 'vue-router';
import { useCustomStore } from '../src/stores/customStore';

const { toggleNavbar } = storeToRefs(useCustomStore());
const { scrollToSection } = useCustomStore();
</script>
