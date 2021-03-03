<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import BaseIcon from '@/components/base/Icon.vue';

import en2mmNum from '@/lib/en2mmNum';
import { en2mmDay } from '@/lib/en2mmDate';

export default defineComponent({
  name: 'PateeListItem',
  components: {
    BaseIcon,
  },
  props: {
    day: { type: [Number, String], default: 0 },
    title: { type: String, default: '' },
    countLoop: { type: Number, default: 0 },
    dayOfWeek: { type: String, default: 'monday' },
    isVegetarianDay: { type: Boolean, default: false },
    description: { type: String, default: '' },
    isFinished: { type: Boolean, default: false },
  },
  methods: {
    en2mmNum,
    en2mmDay,
  },
  setup() {
    return {};
  },
});
</script>

<template>
  <div
    class="relative cursor-pointer p-4 rounded-lg border-2 border-red-500 text-red-500"
    @click="$emit('click')"
  >
    <base-icon
      v-if="isFinished"
      class="absolute top-4 right-4"
      icon-name="done_all"
    />

    <p v-if="isVegetarianDay" class="mb-2 font-bold">
      သတ်သတ်လွတ်စားရမည်။
    </p>
    <p class="text-sm text-gray-800">{{ en2mmNum(day) }} ရက်မြောက်နေ့</p>
    <h2 class="my-2 font-bold text-lg text-gray-800">
      {{ title }} - {{ en2mmNum(countLoop) }} ပတ်
    </h2>
    <p class="text-sm text-gray-800">
      <span class="font-bold">{{ en2mmDay(dayOfWeek) }}နေ့</span>တွင် စိပ်ရမည်။
    </p>
    <p v-if="description.length > 0" class="text-gray-800">{{ description }}</p>
  </div>
</template>

<style scoped>
div {
  user-select: none;
}

div * {
  user-select: none;
}
</style>
