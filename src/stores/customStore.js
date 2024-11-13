import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCustomStore = defineStore('custom', () => {
    const fullText = ref('WEB DEVELOPER');
    const typedText = ref('');
    const toggleNavbar = ref(false);

    const typeWriter = () => {
        let i = 0;

        const typingInterval = setInterval(() => {
            typedText.value += fullText.value[i];
                i++;
            if (i === fullText.value.length) clearInterval(typingInterval);
        }, 200);
    }

    typeWriter();

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    } 

    window.addEventListener('scroll', function() {
        let currentScroll = window.scrollY;
        let currentWidth = window.innerWidth;

        if (currentScroll > 200 && currentWidth !== 1000) toggleNavbar.value = true;
        else toggleNavbar.value = false;
    });

     return { 
        // functions
        scrollToSection,

        // variables 
        fullText, typedText, toggleNavbar
    }
})
