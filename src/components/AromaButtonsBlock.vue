<template>
  <div class="kam-112908-popin__buttons-block">
    <guide-button
      v-for="button in buttons"
      :key="button.text"
      :color="button.color"
      :text="button.text"
      type="changeAromaFilter"
      :active="button.active"
      @buttonClick="onButtonClick"
    />
  </div>
</template>
<script>
import GuideButton from './UI/GuideButton.vue';
import { inject } from 'vue';

export default {
  setup() {
    const filters = inject('filters');
    const updateFilters = inject('updateFilters');
    return {
      filters,
      updateFilters,
    };
  },
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
  methods: {
    onButtonClick(event) {
      const button = this.buttons.find((item) => item.text === event.text);
      button.active = !button.active;
      //   const isActiveButton = this.buttons.some((item) => item.active);
      const newFilters = this.filters;
      newFilters.aroma = this.buttons.filter((item) => item.active).map((item) => item.text);
      this.updateFilters(newFilters);
      console.log(this.filters);
      this.$emit('changeFilters');
    },
  },
};
</script>
