<template>
  <div class="kam-112908-page">
    <div class="kam-112908-page__container">
      <div v-if="!result">
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
          <guide-buttons-block :buttons="section.buttons" @buttonClick="onButtonClick" />
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
        <div
          class="kam-112908-section kam-112908-section_type_addition"
          :class="[
            { 'kam-112908-section_hidden': additionSections.hidden },
            { 'kam-112908-section_active': additionSections.active },
            { 'kam-112908-section_selected': additionSections.active },
          ]"
        >
          <div class="kam-112908-section__mobile-title">
            Вы можете указать дополнительные параметры для более точной рекомендации:
          </div>
          <div class="kam-112908-section__container">
            <guide-section-title
              :image="additionSections.capsule.image"
              :title="additionSections.capsule.title"
              :text="additionSections.capsule.text"
            />
            <guide-buttons-block
              :buttons="additionSections.capsule.buttons"
              @buttonClick="onButtonClick"
            />
          </div>
          <div class="kam-112908-section__container">
            <guide-section-title
              :image="additionSections.taste.image"
              :title="additionSections.taste.title"
              :text="additionSections.taste.text"
            />
            <div class="kam-112908-section__content-block">
              <div class="kam-112908-section__line-block">
                <div
                  v-for="dot in additionSections.taste.dots"
                  :key="dot.id"
                  :class="[
                    { 'kam-112908-section__dot': dot.type === 'dot' },
                    { 'kam-112908-section__line': dot.type === 'line' },
                    { 'kam-112908-section__dot_active': dot.type === 'dot' && dot.active },
                    { 'kam-112908-section__dot_selected': dot.type === 'dot' && dot.selected },
                    { 'kam-112908-section__line_selected': dot.type === 'line' && dot.selected },
                    dot.class,
                  ]"
                  :data-type="dot.type"
                  :data-value="dot.text"
                  :data-id="dot.id"
                  @click="onDotClick"
                ></div>
              </div>
              <div class="kam-112908-section__comments-block">
                <div
                  v-for="dot in dotComments"
                  :key="dot.id"
                  class="kam-112908-section__coment"
                  :class="`kam-112908-section__coment_position_${dot.modifier}`"
                  :data-type="dot.type"
                  :data-value="dot.text"
                  :data-id="dot.id"
                  @click="onDotClick"
                >
                  {{ dot.text }}
                </div>
              </div>
            </div>
            <guide-button
              :color="additionSections.taste.firstButton.color"
              :text="additionSections.taste.firstButton.text"
              :type="additionSections.taste.firstButton.type"
              :active="additionSections.taste.firstButton.active"
              @buttonClick="onButtonClick"
              class="kam-112908-button_type_cancel"
            />
          </div>
        </div>
      </div>
      <div v-else>
        <div v-if="resultFiit.length > 0">
          <div class="flavor-results__list__price" style="background-color: #1253a1" id="fpr">
            <span class="flavor-results__list__price-text"> 740₸ </span>
            <span class="flavor-results__list__price-ds">
              цена <br />
              за пачку
            </span>
          </div>
          <div class="flavor-results__list__grid">
            <div v-for="stik in resultFiit" :key="stik.name" class="flavor-results__product">
              <guide-result-item :stik="stik" />
            </div>
          </div>
        </div>
        <div v-if="resultSticks.length > 0">
          <div class="flavor-results__list__price" style="background-color: #ef8727" id="hpr">
            <span class="flavor-results__list__price-text"> 770₸ </span>
            <span class="flavor-results__list__price-ds">
              цена <br />
              за пачку
            </span>
          </div>
          <div class="flavor-results__list__grid">
            <div v-for="stik in resultSticks" :key="stik.name" class="flavor-results__product">
              <guide-result-item :stik="stik" />
            </div>
          </div>
        </div>
        <guide-button
          :color="returnButton.color"
          :text="returnButton.text"
          :type="returnButton.type"
          :active="returnButton.active"
          @buttonClick="onButtonClick"
          class="kam-112908-button_type_main"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { data } from '@/data/data';
import { stiksImage, mentolImage, aromaImage, capsuleImage, tasteImage } from '@/assets/images';
import GuideButtonsBlock from '@/components/GuideButtonsBlock.vue';
import GuideSection from '@/components/GuideSection.vue';
import GuideSectionTitle from '@/components/GuideSectionTitle.vue';
import GuideButton from '@/components/UI/GuideButton.vue';
import GuideResultItem from '@/components/GuideResultItem.vue';

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
      additionSections: {
        capsule: {
          value: '',
          image: capsuleImage,
          title: 'Капсула',
          text: 'Вы можете дополнительно указать этот параметр для более точной рекомендаци',
          buttons: [
            {
              color: 'second',
              text: 'Не важно',
              type: 'changeCapsule',
              active: false,
            },
            {
              color: 'second',
              text: 'Без капсулы',
              type: 'changeCapsule',
              active: false,
            },
            {
              color: 'second',
              text: 'С капсулой',
              type: 'changeCapsule',
              active: false,
            },
          ],
        },
        taste: {
          value: '',
          image: tasteImage,
          title: 'Насыщенность вкуса',
          text: 'Вы можете дополнительно указать этот параметр для более точной рекомендаци',
          dots: [
            {
              id: 1,
              type: 'dot',
              modifier: 'first',
              text: 'Деликатный',
              active: false,
              selected: false,
              class: 'kam-112908-section__dot_position_first',
            },
            {
              id: 2,
              type: 'line',
              modifier: 'first',
              selected: false,
              class: 'kam-112908-section__line_position_first',
            },
            {
              id: 3,
              type: 'dot',
              modifier: 'second',
              text: 'Сбалансированный',
              active: false,
              selected: false,
              class: 'kam-112908-section__dot_position_second',
            },
            {
              id: 4,
              type: 'line',
              modifier: 'second',
              selected: false,
              class: 'kam-112908-section__line_position_second',
            },
            {
              id: 5,
              type: 'dot',
              modifier: 'thrid',
              text: 'Интенсивный',
              active: false,
              selected: false,
              class: 'kam-112908-section__dot_position_thrid',
            },
          ],
          firstButton: {
            color: 'none',
            text: 'Отменить',
            type: 'cancelTaste',
            active: false,
            selected: false,
          },
        },
        hidden: true,
        active: false,
      },
      stepNumber: '1',
      stepText: 'Табачные стики',
      findButton: {
        color: 'first',
        text: 'Показать результат',
        type: 'findSticks',
        active: false,
      },
      result: false,
      resultSticks: [],
      resultFiit: [],
      returnButton: {
        color: 'first',
        text: 'Изменить параметры',
        type: 'return',
        active: true,
      },
    };
  },
  components: { GuideSection, GuideButtonsBlock, GuideButton, GuideSectionTitle, GuideResultItem },
  computed: {
    dotComments() {
      return this.additionSections.taste.dots.filter((item) => item.type === 'dot');
    },
  },
  methods: {
    onButtonClick(event) {
      // console.log(event);
      this.onChangeButtonClick(event, 'changeStiks', this.sections.stiks);
      this.onChangeButtonClick(event, 'changeMentol', this.sections.mentol);
      this.onChangeButtonClick(event, 'changeCapsule', this.additionSections.capsule);
      this.onEnterButtonClick(event, 'selectStiks');
      this.onEnterButtonClick(event, 'selectMentol');
      this.onChangeSectionButtonClick(event, 'changeStiksSection');
      this.onChangeSectionButtonClick(event, 'changeMentolSection');
      this.onChangeAromaButtonClick(event);
      this.onFindButtonClick(event);
      this.onCancelButtonClick(event);
      this.onReturnButtonClick(event);
    },
    onDotClick(event) {
      const id = +event.target.dataset?.id;
      const dot = this.additionSections.taste.dots.find(
        (item) => item.type === 'dot' && item.id === id,
      );
      if (dot) {
        const savedDotActive = dot.active;
        for (const key in this.additionSections.taste.dots) {
          this.additionSections.taste.dots[key].active = false;
          this.additionSections.taste.dots[key].selected = false;
          if (key < id - 1) this.additionSections.taste.dots[key].selected = true;
        }
        this.additionSections.taste.value = dot.text;
        if (id === 1 && savedDotActive) {
          this.additionSections.taste.value = '';
          dot.active = false;
        } else {
          dot.active = true;
        }
      }
    },
    onChangeButtonClick(event, eventType, object) {
      if (event.type === eventType) {
        object.buttons.forEach((item) => (item.active = false));
        object.buttons.find((item) => item.text === event.text).active = true;
        if (object.firstButton) {
          object.firstButton.active = true;
        }
        object.value = event.text;
      }
    },
    onChangeAromaButtonClick(event) {
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
        this.additionSections.active = this.sections.aroma.values.length > 0;
      }
    },
    onEnterButtonClick(event, eventType) {
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

        if (eventType === 'selectStiks') {
          this.additionSections.hidden = !(this.sections.stiks.value === 'Heets');
        } else {
          this.findButton.active = this.sections.aroma.values.length > 0;
          this.additionSections.active = this.sections.aroma.values.length > 0;
        }
      }
    },
    onChangeSectionButtonClick(event, eventType) {
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
        this.findButton.active = false;
        this.additionSections.active = false;
      }
    },
    onCancelButtonClick(event) {
      if (event.type === 'cancelTaste') {
        for (const key in this.additionSections.taste.dots) {
          this.additionSections.taste.dots[key].active = false;
          this.additionSections.taste.dots[key].selected = false;
        }
        this.additionSections.taste.value = '';
      }
    },
    onFindButtonClick(event) {
      if (event.type === 'findSticks' && event.active) {
        // console.log(data);
        const filteredData = Object.keys(data)
          .filter((item) =>
            this.sections.stiks.value === 'Все'
              ? item
              : data[item].stiks === this.sections.stiks.value,
          )
          .filter((item) =>
            this.sections.mentol.value === 'Не важно'
              ? item
              : data[item].mentol === this.sections.mentol.value,
          )
          .filter((item) =>
            data[item].aroma.some((item) => this.sections.aroma.values.includes(item)),
          );
        const fiitData = filteredData.filter((item) => data[item].stiks === 'Fiit');
        const heetsData = filteredData.filter((item) => data[item].stiks === 'Heets');
        fiitData.forEach((item) => {
          this.resultFiit.push(data[item]);
        });
        heetsData.forEach((item) => {
          this.resultSticks.push(data[item]);
        });
        this.result = true;
      }
    },
    onReturnButtonClick(event) {
      if (event.type === 'return') {
        this.result = false;
        this.resultSticks = [];
        this.resultFiit = [];
      }
    },
  },
};
</script>
<style lang="scss"></style>
