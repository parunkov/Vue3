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
import { stiksImage } from '@/assets/images';
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
      },
    };
  },
  components: { GuideSection },
  mounted() {
    console.log(stiksImage);
    console.log(this.sections.stiks.stiksImage);
  },
};
</script>
<style lang="scss"></style>
