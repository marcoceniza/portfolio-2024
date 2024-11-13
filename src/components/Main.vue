<template>
    <div class="bg-[#4B4B4B]">
        <div class="wrapper flex justify-between mx-auto h-[700px] items-center text-left">
            <section class="w-[70%] text-white">
                <h2 class="textColor text-[30px] font-bold block relative leading-[100%]">About Me</h2>
                <p class="mt-[40px] font-bold text-[20px] mb-[8px]">I'm a Web Developer having 6 Years of Experience</p>
                <p>With more than six years of experience as a web developer, I have become proficient in a range of coding languages and frameworks, including HTML, CSS, JavaScript, Vue.js. I have also worked with content management systems like WordPress and utilized Laravel and CodeIgniter for web application development. In addition to my coding skills, I am well-versed in version control using Git, file management through FileZilla, and database management with MySQL and Firebase. I continue to adapt and grow in this ever-evolving field to deliver successful web solutions.</p>
                <ul class="columns-2 relative mt-[32px]">
                    <li class="relative pl-[30px]"><MapIcon class="h-6 w-6 text-white absolute left-0" /> <strong>Location:</strong> Cebu City, Cebu</li>
                    <li class="relative pl-[30px]"><EnvelopeIcon class="h-6 w-6 text-white absolute left-0" /> <strong>Email:</strong>  marcoceniza15@gmail.com</li>
                </ul>
                <button class="bgColor mt-[50px] block w-[220px] h-[50px] text-[#313131] text-[19px] font-bold rounded-[4px]">Download Resume</button>
            </section>
            <section class="w-[25%]">
                <figure><img src="../images/main_img1.jpg" alt="HTML 5"></figure>
            </section>
        </div>
    </div>
</template>

<script setup>
import { MapIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';

</script>

<style scoped>
section h2:after {content: ''; width: 70px; height: 7px; position: absolute; background: linear-gradient(to right, #B0FCB0, #12E0F3); left: 0; bottom: -25px;}
</style>