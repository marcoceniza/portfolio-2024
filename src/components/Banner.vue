<template>
    <div class="bg-[#3A3A3A]">
        <div class="wrapper flex justify-between mx-auto h-[700px] items-center">
            <section class="text-left text-white">
                <h2 class="animate__animated animate__fadeIn text-[22px]">MARCO CENIZA <strong class="textColor text-[65px] font-bold block relative leading-[100%]">{{ customStore.typedText }} <span class="blink">|</span></strong></h2>
                <p class="animate__animated animate__fadeIn animate__delay-1s text-[20px] mt-[40px] mb-[25px]">I'm a Web Developer with extensive experience for over 6 years.</p>
                <button class="animate__animated animate__fadeIn animate__delay-2s mt-[50px] bgColor block w-[150px] h-[50px] text-[#313131] text-[16px] font-bold rounded-[4px]">CONTACT ME</button>
            </section>
            <section class="animate__animated animate__fadeIn mr-[90px]">
                <figure class="w-[300px] rotate-[-43deg] overflow-hidden rounded-[20px] max-w-full "><img src="../images/bnr_img.jpg" alt="man wearing eyeglasses" class="rotate-[43deg] scale-[1.4]"></figure>
            </section>
        </div>
    </div>
</template>

<script setup>
import { useCustomStore } from '@/stores/customStore';

const customStore = useCustomStore();

</script>

<style scoped>
section h2 strong:after {content: ''; width: 70px; height: 7px; position: absolute; background: linear-gradient(to right, #B0FCB0, #12E0F3); left: 0; bottom: -25px;}
section h2 span {animation: blink .5s step-end infinite alternate;}

@keyframes blink {
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
</style>