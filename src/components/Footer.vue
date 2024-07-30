<template>
    <div class="bg-[#4B4B4B]">
        <div class="wrapper flex justify-center items-center mx-auto h-[700px]">
            <div class="relative">
                <h2 class="textColor text-[30px] font-bold block relative leading-[100%]">Contact Me</h2>
                <p class="text-white mt-[40px] mb-[50px] mx-auto w-[700px] max-w-full">If you have any questions or inquiries, please feel free to fill in the form below. I'll get back to you as soon as possible to assist you further. Thank you for reaching out!</p>
                <div class="flex justify-between flex-wrap gap-4 relative">
                    <input type="text" placeholder="Name*" class="w-[48%] p-[12px]">
                    <input type="text" placeholder="Email*" class="w-[48%] p-[12px]">
                    <input type="text" placeholder="Address*" class="w-full p-[12px]">
                    <textarea cols="30" rows="5" placeholder="Message*" class="w-full p-[12px]"></textarea>
                </div>
                <button class="mt-[35px] bgColor block w-[175px] h-[50px] text-[#313131] text-[19px] font-bold rounded-[4px]">Send Message</button>
            </div>
        </div>
        <p class="bg-[#595959] text-white py-[12px] px-[4px]">CopyRight &copy; {{ new Date().getFullYear() }} Marco Ceniza All Rights Reserved</p>
    </div>
</template>

<script setup>

</script>

<style scoped>
h2:after {content: ''; width: 70px; height: 7px; position: absolute; background: linear-gradient(to right, #B0FCB0, #12E0F3); left: 0; bottom: -25px; right: 0; margin: 0 auto;}
</style>