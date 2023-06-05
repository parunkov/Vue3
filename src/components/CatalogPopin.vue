<template>
  <div class="kam-112908-popin" id="kameleoonElement-112908">
    <div class="kam-112908-popin__section" :class="`kam-112908-popin__section_content_${stage}`">
      <div class="kam-112908-popin__arrow" v-html="popinArrow" @click="onArrowClick"></div>
      <div class="kam-112908-popin__close-button" v-html="popinCross"></div>
      <div v-if="stage === 'begin'" v-html="popinImage"></div>
      <div class="kam-112908-popin__section kam-112908-popin__section_content_stiks">
        <div class="kam-112908-popin__title-block">
          <div class="kam-112908-popin__title">{{ stageData.headerTitle }}</div>
          <div class="kam-112908-popin__text">{{ stageData.headerText }}</div>
        </div>
        <StiksButtonBlock v-if="stage === 'stiks'" />
        <guide-button
          color="first"
          :text="stageData.firstButton.text"
          :active="stageData.firstButton.active"
          type="popin"
          @buttonClick="onButtonClick"
        />
      </div>
    </div>
  </div>
</template>
<script>
import GuideButton from './UI/GuideButton.vue';
import StiksButtonBlock from '@/components/StksButtonBlock.vue';
import { popinImage, popinArrow, popinCross } from '@/assets/images';
import { popinStagesData } from '@/data/data';
// import { inject } from 'vue';

export default {
  // setup() {
  //   const filters = inject('filters');
  //   console.log(filters);
  // },
  data() {
    return {
      stage: 'begin',
      stages: ['begin', 'stiks'],
      buttonActive: true,
      stageData: {},
      popinImage,
      popinArrow,
      popinCross,
      currentFilters: {},
    };
  },
  components: { GuideButton, StiksButtonBlock },
  methods: {
    onButtonClick() {
      if (this.stageData.firstButton.active) {
        const currentIndex = this.stages.indexOf(this.stage);
        this.stage = this.stages[currentIndex + 1];
        this.stageData = popinStagesData[this.stage];
        // console.log(this.currentFilters.stiks);
        // this.buttonActive = this.stageData.firstButton.active;
      }
    },
    onArrowClick() {
      const currentIndex = this.stages.indexOf(this.stage);
      this.stage = this.stages[currentIndex - 1];
      this.stageData = popinStagesData[this.stage];
      // console.log(this.currentFilters);
      // this.stageData.firstButton.active = this.buttonActive;
    },
  },
  created() {
    this.stageData = popinStagesData.begin;
    this.currentFilters = this.filters;
  },
};
</script>
<style></style>
