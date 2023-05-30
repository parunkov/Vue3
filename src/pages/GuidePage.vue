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
              active: false,
            },
            {
              color: 'second',
              text: 'Heets',
              type: 'changeStiks',
              active: false,
            },
            {
              color: 'second',
              text: 'Fiit',
              type: 'changeStiks',
              active: false,
            },
          ],
          firstButton: {
            color: 'first',
            text: 'Продолжить',
            type: 'selectStiks',
            active: false,
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
              active: false,
            },
            {
              color: 'second',
              text: 'Без ментола',
              type: 'changeMentol',
              active: false,
            },
            {
              color: 'second',
              text: 'С ментолом',
              type: 'changeMentol',
              active: false,
            },
          ],
          firstButton: {
            color: 'first',
            text: 'Продолжить',
            type: 'selecteMentol',
            active: false,
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
              active: false,
            },
            {
              color: 'fourth',
              text: 'Фруктовые',
              type: 'selectAroma',
              active: false,
            },
            {
              color: 'fifth',
              text: 'Древесные',
              type: 'selectAroma',
              active: false,
            },
            {
              color: 'sixth',
              text: 'Пряные',
              type: 'selectAroma',
              active: false,
            },
            {
              color: 'seventh',
              text: 'Цитрусовые',
              type: 'selectAroma',
              active: false,
            },
            {
              color: 'eighth',
              text: 'Ореховые',
              type: 'selectAroma',
              active: false,
            },
            {
              color: 'ninth',
              text: 'Свежие травы',
              type: 'selectAroma',
              active: false,
            },
            {
              color: 'tenth',
              text: 'Цветочные',
              type: 'selectAroma',
              active: false,
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
      this.changeButton(event, 'changeStiks', this.sections.stiks);
      this.changeButton(event, 'changeMentol', this.sections.mentol);
      if (event.type === 'selectStiks' && event.active) {
        this.sections.stiks.active = false;
        this.sections.mentol.active = true;
        this.sections.mentol.selected = true;
      }
    },
    changeButton(event, eventType, object) {
      if (event.type === eventType) {
        object.buttons.forEach((item) => (item.active = false));
        object.buttons.find((item) => item.text === event.text).active = true;
        object.firstButton.active = true;
      }
    },
  },
};
</script>
<style lang="scss"></style>
