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
        v-for="(section, key) in sections"
        :key="section"
        :modifier="key"
        :image="section.image"
        :title="section.title"
        :text="section.text"
      >
        <GuideButtonsBlock :buttons="section.buttons" :firstButton="section.firstButton" />
      </GuideSection>
    </div>
  </div>
</template>
<script>
import { stiksImage, mentolImage, aromaImage } from '@/assets/images';
import GuideButtonsBlock from '@/components/GuideButtonsBlock.vue';
import GuideSection from '@/components/GuideSection.vue';

export default {
  data() {
    return {
      sections: {
        stiks: {
          image: stiksImage,
          title: 'Табачные стики',
          text: 'Выберите один параметр',
          buttons: [
            {
              color: 'second',
              text: 'Все',
            },
            {
              color: 'second',
              text: 'Heets',
            },
            {
              color: 'second',
              text: 'Fiit',
            },
          ],
          firstButton: {
            color: 'first',
            text: 'Продолжить',
          },
        },
        mentol: {
          image: mentolImage,
          title: 'Ментол',
          text: 'Выберите один параметр',
          buttons: [
            {
              color: 'second',
              text: 'Не важно',
            },
            {
              color: 'second',
              text: 'Без ментола',
            },
            {
              color: 'second',
              text: 'С ментолом',
            },
          ],
          firstButton: {
            color: 'first',
            text: 'Продолжить',
          },
        },
        aroma: {
          image: aromaImage,
          title: 'Ароматические ноты',
          text: 'Можно выбрать несколько',
          buttons: [
            {
              color: 'thrid',
              text: 'Ягодные',
            },
            {
              color: 'fourth',
              text: 'Фруктовые',
            },
            {
              color: 'fifth',
              text: 'Древесные',
            },
            {
              color: 'sixth',
              text: 'Пряные',
            },
            {
              color: 'seventh',
              text: 'Цитрусовые',
            },
            {
              color: 'eighth',
              text: 'Ореховые',
            },
            {
              color: 'ninth',
              text: 'Свежие травы',
            },
            {
              color: 'tenth',
              text: 'Цветочные',
            },
          ],
          firstButton: null,
        },
      },
    };
  },
  components: { GuideSection, GuideButtonsBlock },
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
