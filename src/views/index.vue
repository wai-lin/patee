<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import BaseHeader from '@/components/base/Header.vue';

export default defineComponent({
  name: 'PagesIndex',
  components: {
    BaseHeader,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div class="flex flex-col items-center justify-center">
    <base-header title="ပုတီး" sticky>
      <template #prefix><div /></template>
    </base-header>

    <div class="mt-28" />

    <div
      class="my-4 select-none cursor-pointer w-4/5 p-8 rounded border-2 border-red-500 text-red-500 text-center font-bold"
      v-ripple
      @click="$router.push('/koenawin')"
    >
      ကိုးနဝင်း
    </div>
  </div>
</template>
