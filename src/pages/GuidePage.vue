<template>
  <div class="kam-112908-page">
    <div class="kam-112908-page__container">
      <div class="kam-112908-page__title">Выберите параметры</div>
      <div class="kam-112908-page__text">
        <span class="kam-112908-page__step"
          >Шаг <span class="kam-112908-page__step-number">1</span>: </span
        ><span class="kam-112908-page__step-content">Табачные стики</span>
      </div>
      <GuideSection
        v-for="section in sections"
        :key="section"
        :image="section.image"
        :title="section.title"
        :text="section.text"
      ></GuideSection>
    </div>
  </div>
</template>
<script>
import { stiksImage, mentolImage, aromaImage } from '@/assets/images';
import GuideSection from '@/components/GuideSection.vue';

export default {
  data() {
    return {
      sections: {
        stiks: {
          image: stiksImage,
          title: 'Табачные стики',
          text: 'Выберите один параметр',
        },
        mentol: {
          image: mentolImage,
          title: 'Ментол',
          text: 'Выберите один параметр',
        },
        aroma: {
          image: aromaImage,
          title: 'Ароматические ноты',
          text: 'Можно выбрать несколько',
        },
      },
    };
  },
  components: { GuideSection },
  mounted() {
    const sticksSection = document.querySelector('.kam-112908-section_content_stiks');
    if (sticksSection) {
      sticksSection.classList.add('kam-112908-section_selected');
      sticksSection.classList.add('kam-112908-section_active');
    }
  },
};
</script>
<style lang="scss"></style>
