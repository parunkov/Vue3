<template>
  <popin-buttons-block
    :buttons="buttons"
    type="changeStiksFilter"
    @changeFilters="onChangeFilters"
  />
</template>
<script>
import { inject } from 'vue';
import PopinButtonsBlock from './PopinButtonsBlock.vue';

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
          text: 'Все',
          active: false,
        },
        {
          text: 'Heets',
          active: false,
        },
        {
          text: 'Fiit',
          active: false,
        },
      ],
    };
  },
  components: { PopinButtonsBlock },
  methods: {
    onChangeFilters(event) {
      const newFilters = JSON.parse(JSON.stringify(this.filters));
      newFilters.sticks = event.text;
      this.updateFilters(newFilters);
    },
  },
};
</script>
