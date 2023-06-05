<template>
  <div class="kam-112908-popin" id="kameleoonElement-112908">
    <div class="kam-112908-popin__section" :class="`kam-112908-popin__section_content_${stage}`">
      <div class="kam-112908-popin__arrow" v-html="popinArrow"></div>
      <div class="kam-112908-popin__close-button" v-html="popinCross"></div>
      <div v-if="stage === 'begin'" v-html="popinImage"></div>
      <div class="kam-112908-popin__section kam-112908-popin__section_content_stiks">
        <div class="kam-112908-popin__title-block">
          <div class="kam-112908-popin__title">{{ headerTitle }}</div>
          <div class="kam-112908-popin__text">{{ headerText }}</div>
        </div>
        <StiksButtonBlock v-if="satge === 'stiks'" />
        <guide-button
          color="first"
          :text="firstButton.text"
          :active="firstButton.active"
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

export default {
  data() {
    return {
      stage: 'begin',
      isHeader: false,
      headerTitle: 'Гид по вкусам',
      headerText: 'Палитра вкусов, собранная специально для вас',
      isArrow: false,
      firstButton: {
        text: 'Начать',
        active: true,
      },
      popinImage,
      popinArrow,
      popinCross,
    };
  },
  components: { GuideButton, StiksButtonBlock },
  methods: {
    onButtonClick() {},
  },
};
</script>
<style></style>
