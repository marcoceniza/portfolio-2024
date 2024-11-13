<template>
    <div class="bg-[#3A3A3A]">
        <div class="wrapper flex justify-center items-center mx-auto h-[700px]">
            <div class="relative">
                <h2 class="textColor text-[30px] font-bold block relative leading-[100%]">My Works</h2>
                <p class="text-white mt-[40px] mb-[50px] mx-auto w-[600px] max-w-full">Throughout my career as a web developer, I have created several simple sample projects, which I would like to share.</p>
                <div class="flex justify-between gap-4 relative project_wrap">
                    <figure class="w-[320px] max-w-full relative"><img src="../images/main_img2.jpg" alt="todo app" class="rounded-[5px]"><a href="https://todo.mc-dev.site/" target="_blank">View Project &raquo;</a></figure>
                    <figure class="w-[320px] max-w-full"><img src="../images/main_img3.jpg" alt="JavaScript"></figure>
                    <figure class="w-[320px] max-w-full"><img src="../images/main_img4.jpg" alt="Tailwind CSS"></figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
h2:after {content: ''; width: 70px; height: 7px; position: absolute; background: linear-gradient(to right, #B0FCB0, #12E0F3); left: 0; bottom: -25px; right: 0; margin: 0 auto;}
.project_wrap figure:before {content:'';background:rgba(0,0,0,0.3);position:absolute;top:0;left:0;width:320px;z-index:1;height:100%;max-width:100%;border-radius: 5px;}
.project_wrap figure a {color:#fff;position:absolute;left:0;right:0;height:100%;display:flex;justify-content:center;align-items:center;bottom:0;z-index:2;}
.project_wrap figure a:hover{background:rgba(0,0,0,0.5);border-radius: 5px;}
</style>