<template>
  <popin-buttons-block
    :buttons="buttons"
    type="changeStiksFilter"
    @changeFilters="onChangeFilters"
  />
</template>
<script>
import PopinButtonsBlock from './PopinButtonsBlock.vue';

export default {
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
      console.log('2 - ', event);
      console.log(2222);
    },
  },
};
</script>
