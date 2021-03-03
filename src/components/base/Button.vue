<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { reactifyObject } from '@vueuse/core';

export default defineComponent({
  name: 'BaseButton',
  props: {
    circle: { type: Boolean, default: false },
  },
  setup(props) {
    // ? props
    const { circle: isCircle } = reactifyObject(props);

    const buttonClassNames = computed(() => {
      return isCircle ? 'w-8 h-8 rounded-full grid place-items-center' : '';
    });

    return {
      buttonClassNames,
    };
  },
});
</script>

<template>
  <button
    class="outline-none focus:outline-none"
    :class="buttonClassNames"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>
