<template>
  <div class="kam-112908-page">
    <div class="kam-112908-page__container">
      <div class="kam-112908-page__title">Выберите параметры</div>
      <div class="kam-112908-page__text">
        <span class="kam-112908-page__step"
          >Шаг <span class="kam-112908-page__step-number">{{ stepNumber }}</span
          >: </span
        ><span class="kam-112908-page__step-content">{{ stepText }}</span>
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
        class="kam-112908-section_type_main"
      >
        <guide-buttons-block
          :buttons="section.buttons"
          :firstButton="section.firstButton"
          @buttonClick="onButtonClick"
        />
        <guide-button
          v-if="section.firstButton"
          :color="section.firstButton.color"
          :text="section.firstButton.text"
          :type="section.firstButton.type"
          :active="section.firstButton.active"
          :selected="section.firstButton.selected"
          @buttonClick="onButtonClick"
        />
      </guide-section>
      <guide-button
        :color="findButton.color"
        :text="findButton.text"
        :type="findButton.type"
        :active="findButton.active"
        @buttonClick="onButtonClick"
        class="kam-112908-button_type_main"
      />
    </div>
  </div>
</template>
<script>
import { stiksImage, mentolImage, aromaImage } from '@/assets/images';
import GuideButtonsBlock from '@/components/GuideButtonsBlock.vue';
import GuideSection from '@/components/GuideSection.vue';
import GuideButton from '@/components/UI/GuideButton.vue';

export default {
  data() {
    return {
      sections: {
        stiks: {
          value: '',
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
            selected: false,
          },
          active: true,
          selected: true,
        },
        mentol: {
          value: '',
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
            type: 'selectMentol',
            active: false,
            selected: false,
          },
          active: false,
          selected: false,
        },
        aroma: {
          values: [],
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
      stepNumber: '1',
      stepText: 'Табачные стики',
      findButton: {
        color: 'first',
        text: 'Показать результат',
        type: 'findSticks',
        active: false,
      },
    };
  },
  components: { GuideSection, GuideButtonsBlock, GuideButton },
  methods: {
    onButtonClick(event) {
      console.log(event);
      this.changeButton(event, 'changeStiks', this.sections.stiks);
      this.changeButton(event, 'changeMentol', this.sections.mentol);
      this.enterButton(event, 'selectStiks');
      this.enterButton(event, 'selectMentol');
      this.changeSectionButton(event, 'changeStiksSection');
      this.changeSectionButton(event, 'changeMentolSection');
      this.changeAromaButton(event);
      this.findButtonClick(event);
    },
    changeButton(event, eventType, object) {
      if (event.type === eventType) {
        object.buttons.forEach((item) => (item.active = false));
        object.buttons.find((item) => item.text === event.text).active = true;
        object.firstButton.active = true;
        object.value = event.text;
      }
    },
    changeAromaButton(event) {
      if (event.type === 'selectAroma') {
        const button = this.sections.aroma.buttons.find((item) => item.text === event.text);
        if (button) {
          button.active = !button.active;
          if (button.active && !this.sections.aroma.values.includes(button.text))
            this.sections.aroma.values.push(button.text);
          if (!button.active)
            this.sections.aroma.values = this.sections.aroma.values.filter(
              (item) => item !== button.text,
            );
        }
        this.findButton.active = this.sections.aroma.values.length > 0;
      }
    },
    enterButton(event, eventType) {
      if (event.type === eventType && event.active) {
        const oldSection = eventType === 'selectStiks' ? this.sections.stiks : this.sections.mentol;
        const newSection = eventType === 'selectStiks' ? this.sections.mentol : this.sections.aroma;
        const newType = eventType === 'selectStiks' ? 'changeStiksSection' : 'changeMentolSection';
        oldSection.text = oldSection.value;
        oldSection.firstButton.selected = true;
        oldSection.firstButton.text = 'Изменить';
        oldSection.firstButton.type = newType;
        oldSection.active = false;
        newSection.active = true;
        newSection.selected = true;
        this.stepNumber = eventType === 'selectStiks' ? '2' : '3';
        this.stepText = eventType === 'selectStiks' ? 'Ментол' : 'Ароматические ноты';
      }
    },
    changeSectionButton(event, eventType) {
      if (event.type === eventType) {
        this.sections.aroma.active = false;
        this.sections.aroma.selected = false;
        if (eventType === 'changeStiksSection') this.sections.mentol.active = false;
        if (eventType === 'changeStiksSection') this.sections.mentol.selected = false;
        const section =
          eventType === 'changeStiksSection' ? this.sections.stiks : this.sections.mentol;
        section.active = true;
        this.sections.mentol.firstButton.text = 'Продолжить';
        this.sections.mentol.firstButton.type = 'selectMentol';
        this.sections.mentol.firstButton.selected = false;
        this.sections.mentol.text = 'Выберите один параметр';
        if (eventType === 'changeStiksSection') {
          this.sections.stiks.firstButton.text = 'Продолжить';
          this.sections.stiks.firstButton.type = 'selectStiks';
          this.sections.stiks.firstButton.selected = false;
          this.sections.stiks.text = 'Выберите один параметр';
        }
        this.stepNumber = eventType === 'changeStiksSection' ? '1' : '2';
        this.stepText = eventType === 'changeStiksSection' ? 'Табачные стики' : 'Ментол';
      }
    },
    findButtonClick(event) {
      if (event.type === 'findSticks' && event.active) {
        console.log('find!!!');
      }
    },
  },
};
</script>
<style lang="scss"></style>
