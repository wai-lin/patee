<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import BaseHeader from '@/components/base/Header.vue';
import PateeCounter from '@/components/PateeCounter.vue';

import en2mmNum from '@/lib/en2mmNum';

import data from '@/data';

export default defineComponent({
  name: 'PagesPateeId',
  components: { BaseHeader, PateeCounter },
  methods: { en2mmNum },
  setup(_props, { root }) {
    const currentPatee = root.$route.params.patee;
    const currentPateeId = root.$route.params.id.split('_');
    const pateeData = data[currentPatee as keyof typeof data];

    const currentPateeStep = computed(() => {
      const stepIdx = parseInt(currentPateeId[0]) - 1;
      return pateeData.steps[stepIdx].filter(
        s => s.day.toString() === currentPateeId[1],
      )[0];
    });

    const currentPateeMeaning = computed(() => {
      return pateeData.words.filter(
        w => w.title === currentPateeStep.value.title,
      )[0];
    });

    return {
      currentPatee,
      currentPateeId,
      currentPateeStep,
      currentPateeMeaning,
    };
  },
});
</script>

<template>
  <div class="h-screen grid grid-rows-4 place-items-center">
    <base-header
      class="row-span-1 self-start"
      :title="currentPateeMeaning.title"
    />

    <div class="row-span-1 px-10 text-center">
      <h1 class="text-xl font-bold">အဓိပ္ပါယ်</h1>
      <p class="my-4 font-base">{{ currentPateeMeaning.meaning }}</p>
      <p class="font-sm font-bold">
        ပုတီးစိပ်ရမည့်အပတ်စဉ် - {{ en2mmNum(currentPateeStep.countLoop) }}ပတ်
      </p>
    </div>

    <patee-counter
      class="row-span-2"
      :total-count-loop="currentPateeStep.countLoop"
      size="w-40 h-40 rounded-full bg-red-600 text-white text-3xl"
    />
  </div>
</template>
