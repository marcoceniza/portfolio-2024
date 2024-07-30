import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCustomStore = defineStore('custom', () => {
    const fullText = ref('WEB DEVELOPER');
    const typedText = ref('');

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

  return { fullText, typedText, scrollToSection }
})
