<template>
  <div class="kam-112908-popin" id="kameleoonElement-112908">
    <div
      class="kam-112908-popin__section kam-112908-popin__section_content_begin kam-112908-popin__section_hidden"
    >
      <div class="kam-112908-popin__arrow"></div>
      <div class="kam-112908-popin__close-button"></div>
    </div>
    <div class="kam-112908-popin__section kam-112908-popin__section_content_stiks">
      <div class="kam-112908-popin__title-block">
        <div class="kam-112908-popin__title">Табачные стики</div>
        <div class="kam-112908-popin__text">Выберите один параметр</div>
      </div>
      <div class="kam-112908-popin__buttons-block"></div>
      <guide-button
        color="first"
        :text="firstButton.text"
        :active="firstButton.active"
        type="popin"
        @buttonClick="onButtonClick"
      />
    </div>
  </div>
</template>
<script>
import GuideButton from './UI/GuideButton.vue';

export default {
  data() {
    return {
      stage: 'begin',
      isHeader: false,
      headerTitle: '',
      headerText: '',
      isArrow: false,
      firstButton: {
        text: 'Начать',
        active: true,
      },
    };
  },
  components: { GuideButton },
};
</script>
<style></style>
