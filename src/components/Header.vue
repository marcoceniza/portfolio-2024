<template>
    <div class="bg-[#313131]">
        <div class="wrapper flex justify-between items-center mx-auto px-4 min-h-[65px]">
            <a class="textColor text-white cursor-pointer font-bold text-[35px]" @click="$router.push('/')">MC</a>
            <ul class="flex text-white gap-5">
                <li><a class="cursor-pointer hover:underline" @click="$router.push('/'); customStore.scrollToSection('banner')">HOME</a></li>
                <li><a class="cursor-pointer hover:underline" @click="$router.push('/'); customStore.scrollToSection('main')">ABOUT</a></li>
                <li><a class="cursor-pointer hover:underline" @click="$router.push('/'); customStore.scrollToSection('bottom')">WORKS</a></li>
                <li><a class="cursor-pointer hover:underline" @click="$router.push('/')">RESUME</a></li>
                <li><a class="cursor-pointer hover:underline" @click="$router.push('/'); customStore.scrollToSection('footer')">CONTACT</a></li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { useCustomStore } from '@/stores/customStore';

const customStore = useCustomStore();

</script>