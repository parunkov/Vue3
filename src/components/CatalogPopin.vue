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
      <div class="kam-112908-button kam-112908-button_color_first kam-112908-button_active">
        Начать
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      stage: 'begin',
      isHeader: false,
      headerTitle: '',
      headerText: '',
      isArrow: false,
      firstButton: {
        color: 'first',
        text: 'Начать',
        active: false,
      },
    };
  },
};
</script>
<style></style>
