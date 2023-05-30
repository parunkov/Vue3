<template>
  <div class="kam-112908-page">
    <div class="kam-112908-page__container">
      <div class="kam-112908-page__title">Выберите параметры</div>
      <div class="kam-112908-page__text">
        <span class="kam-112908-page__step"
          >Шаг <span class="kam-112908-page__step-number">1</span>: </span
        ><span class="kam-112908-page__step-content">Табачные стики</span>
      </div>
      <guide-section
        v-for="(section, key) in sections"
        :key="section"
        :modifier="key"
        :image="section.image"
        :title="section.title"
        :text="section.text"
        :class="{
          'kam-112908-section_active': section.active,
          'kam-112908-section_selected': section.selected,
        }"
      >
        <guide-buttons-block
          :buttons="section.buttons"
          :firstButton="section.firstButton"
          @buttonClick="onButtonClick"
        />
      </guide-section>
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
              type: 'changeStiks',
            },
            {
              color: 'second',
              text: 'Heets',
              type: 'changeStiks',
            },
            {
              color: 'second',
              text: 'Fiit',
              type: 'changeStiks',
            },
          ],
          firstButton: {
            color: 'first',
            text: 'Продолжить',
            type: 'selectStiks',
          },
          active: true,
          selected: true,
        },
        mentol: {
          image: mentolImage,
          title: 'Ментол',
          text: 'Выберите один параметр',
          buttons: [
            {
              color: 'second',
              text: 'Не важно',
              type: 'changeMentol',
            },
            {
              color: 'second',
              text: 'Без ментола',
              type: 'changeMentol',
            },
            {
              color: 'second',
              text: 'С ментолом',
              type: 'changeMentol',
            },
          ],
          firstButton: {
            color: 'first',
            text: 'Продолжить',
            type: 'selecteMentol',
          },
          active: false,
          selected: false,
        },
        aroma: {
          image: aromaImage,
          title: 'Ароматические ноты',
          text: 'Можно выбрать несколько',
          buttons: [
            {
              color: 'thrid',
              text: 'Ягодные',
              type: 'selectAroma',
            },
            {
              color: 'fourth',
              text: 'Фруктовые',
              type: 'selectAroma',
            },
            {
              color: 'fifth',
              text: 'Древесные',
              type: 'selectAroma',
            },
            {
              color: 'sixth',
              text: 'Пряные',
              type: 'selectAroma',
            },
            {
              color: 'seventh',
              text: 'Цитрусовые',
              type: 'selectAroma',
            },
            {
              color: 'eighth',
              text: 'Ореховые',
              type: 'selectAroma',
            },
            {
              color: 'ninth',
              text: 'Свежие травы',
              type: 'selectAroma',
            },
            {
              color: 'tenth',
              text: 'Цветочные',
              type: 'selectAroma',
            },
          ],
          firstButton: null,
          active: false,
          selected: false,
        },
      },
    };
  },
  components: { GuideSection, GuideButtonsBlock },
  methods: {
    onButtonClick(event) {
      // console.log(event);
      if (event.type === 'selectStiks' && event.active) {
        console.log(2222);
        this.sections.stiks.active = false;
        this.sections.mentol.active = true;
        this.sections.mentol.selected = true;
      }
    },
  },
};
</script>
<style lang="scss"></style>
