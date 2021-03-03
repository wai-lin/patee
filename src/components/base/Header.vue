<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';
import { reactifyObject } from '@vueuse/core';

import BaseButton from './Button.vue';
import BaseIcon from './Icon.vue';

export default defineComponent({
  name: 'BaseHeader',
  components: {
    BaseButton,
    BaseIcon,
  },
  props: {
    title: { type: String, default: '' },
    sticky: { type: Boolean, default: false },
  },
  setup(props, { root }) {
    // ? root ctx
    const { $router } = root;
    // ? props
    const { sticky } = reactifyObject(props);

    const stickyClassNames = computed(() =>
      sticky ? 'fixed top-0 inset-x-0 bg-white z-10' : '',
    );

    function backToRoute() {
      $router.back();
    }

    return { stickyClassNames, backToRoute };
  },
});
</script>

<template>
  <nav
    class="grid grid-cols-5 w-full h-20 border-b border-red-500"
    :class="stickyClassNames"
  >
    <div class="col-span-1 grid place-items-center">
      <slot name="prefix">
        <base-button v-ripple circle @click="backToRoute">
          <base-icon class="text-red-500" icon-name="arrow_back" size="lg" />
        </base-button>
      </slot>
    </div>
    <div class="col-span-3 grid place-items-center">
      <slot v-bind:title="title">
        <h2 class="text-2xl text-center font-bold">{{ title }}</h2>
      </slot>
    </div>
    <div class="col-span-1 grid place-items-center">
      <slot name="postfix"></slot>
    </div>
  </nav>
</template>
