<template>
  <div class="kam-112908-popin" id="kameleoonElement-112908">
    <div
      class="kam-112908-popin__arrow"
      v-html="popinArrow"
      @click="onArrowClick"
      :class="`kam-112908-popin__arrow_content_${stage}`"
    ></div>
    <div class="kam-112908-popin__close-button" v-html="popinCross"></div>
    <div class="kam-112908-popin__section" :class="`kam-112908-popin__section_content_${stage}`">
      <div v-if="stage === 'begin'" v-html="popinImage" class="kam-112908-popin__image"></div>
      <div class="kam-112908-popin__title-block">
        <div class="kam-112908-popin__title">{{ stageData.headerTitle }}</div>
        <div class="kam-112908-popin__text">{{ stageData.headerText }}</div>
      </div>
      <stiks-button-block v-if="stage === 'stiks'" @changeFilters="onChangeFilters" />
      <mentol-buttons-block v-if="stage === 'mentol'" @changeFilters="onChangeFilters" />
      <aroma-buttons-block v-if="stage === 'aroma'" @changeFilters="onChangeFilters" />
      <guide-button
        color="first"
        :text="stageData.firstButton.text"
        :active="stageData.firstButton.active"
        type="popin"
        @buttonClick="onButtonClick"
      />
    </div>
  </div>
</template>
<script>
import GuideButton from './UI/GuideButton.vue';
import StiksButtonBlock from '@/components/StksButtonBlock.vue';
import MentolButtonsBlock from '@/components/MentolButtonsBlock.vue';
import { popinImage, popinArrow, popinCross } from '@/assets/images';
import { popinStagesData } from '@/data/data';
import { inject } from 'vue';
import AromaButtonsBlock from './AromaButtonsBlock.vue';

export default {
  setup() {
    const filters = inject('filters');
    return { filters };
  },
  data() {
    return {
      stage: 'begin',
      stages: ['begin', 'stiks', 'mentol', 'aroma', 'end'],
      buttonActive: true,
      stageData: {},
      popinImage,
      popinArrow,
      popinCross,
    };
  },
  components: { GuideButton, StiksButtonBlock, MentolButtonsBlock, AromaButtonsBlock },
  methods: {
    onButtonClick() {
      if (this.stageData.firstButton.active) {
        const currentIndex = this.stages.indexOf(this.stage);
        this.stage = this.stages[currentIndex + 1];
        this.stageData = popinStagesData[this.stage];
      }
    },
    onArrowClick() {
      const currentIndex = this.stages.indexOf(this.stage);
      this.stage = this.stages[currentIndex - 1];
      this.stageData = popinStagesData[this.stage];
      if (this.filters && this.filters[this.stage]) {
        this.stageData.firstButton.active = true;
      }
    },
    onChangeFilters() {
      if (this.filters[this.stage] && typeof this.filters[this.stage] === 'string') {
        this.stageData.firstButton.active = true;
      }
      if (this.filters[this.stage] && typeof this.filters[this.stage] === 'object') {
        if (this.filters[this.stage].length > 0) {
          this.stageData.firstButton.active = true;
        } else {
          this.stageData.firstButton.active = false;
        }
      }
    },
  },
  created() {
    this.stageData = popinStagesData.begin;
    this.currentFilters = this.filters;
  },
};
</script>
<style></style>
