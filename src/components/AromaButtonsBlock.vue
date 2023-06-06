<template>
  <div class="kam-112908-popin__buttons-block">
    <guide-button
      v-for="button in buttons"
      :key="button.text"
      color="second"
      :text="button.text"
      :type="type"
      :active="button.active"
      @buttonClick="onButtonClick"
    />
  </div>
</template>
<script>
import GuideButton from './UI/GuideButton.vue';

export default {
  data() {
    return {
      buttons: [
        {
          color: 'thrid',
          text: 'Ягодные',
          active: false,
        },
        {
          color: 'fourth',
          text: 'Фруктовые',
          active: false,
        },
        {
          color: 'fifth',
          text: 'Древесные',
          active: false,
        },
        {
          color: 'sixth',
          text: 'Пряные',
          active: false,
        },
        {
          color: 'seventh',
          text: 'Цитрусовые',
          active: false,
        },
        {
          color: 'eighth',
          text: 'Ореховые',
          active: false,
        },
        {
          color: 'ninth',
          text: 'Свежие травы',
          active: false,
        },
        {
          color: 'tenth',
          text: 'Цветочные',
          active: false,
        },
      ],
    };
  },
  components: { GuideButton },
};
</script>
