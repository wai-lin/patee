<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import BaseHeader from '@/components/base/Header.vue';
import BaseButton from '@/components/base/Button.vue';
import BaseIcon from '@/components/base/Icon.vue';
import PateeCounter from '@/components/PateeCounter.vue';

import usePateeProgressStorage from '@/factories/usePateeProgressStorage';

import en2mmNum from '@/lib/en2mmNum';

import data from '@/data';

export default defineComponent({
  name: 'PagesPateeId',
  components: {
    BaseHeader,
    BaseButton,
    BaseIcon,
    PateeCounter,
  },
  methods: { en2mmNum },
  setup(_props, { root }) {
    const currentPatee = root.$route.params.patee as keyof typeof data;
    const [currentStep, currentDay] = root.$route.params.id.split('_');
    const pateeData = data[currentPatee];

    const pateeProgressStorage = usePateeProgressStorage(currentPatee);
    const isFinishedAlready = computed(() =>
      pateeProgressStorage.isInclude(
        parseInt(currentStep),
        parseInt(currentDay),
      ),
    );

    const currentPateeStep = computed(() => {
      const stepIdx = parseInt(currentStep) - 1;
      return pateeData.steps[stepIdx].filter(
        s => s.day.toString() === currentDay,
      )[0];
    });

    const currentPateeMeaning = computed(() => {
      return pateeData.words.filter(
        w => w.title === currentPateeStep.value.title,
      )[0];
    });

    // ? actions
    function finishHandler() {
      if (isFinishedAlready.value) return;
      pateeProgressStorage.add([parseInt(currentStep), parseInt(currentDay)]);
    }

    return {
      currentPatee,
      isFinishedAlready,
      currentPateeStep,
      currentPateeMeaning,
      finishHandler,
    };
  },
});
</script>

<template>
  <div class="h-screen grid grid-rows-4 place-items-center">
    <base-header :title="currentPateeMeaning.title" sticky>
      <template #postfix>
        <base-button v-ripple circle @click="finishHandler">
          <base-icon
            :class="{ 'text-red-500': isFinishedAlready }"
            icon-name="done_all"
            size="lg"
          />
        </base-button>
      </template>
    </base-header>

    <div class="row-span-1" />

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
      @done="finishHandler"
    />
  </div>
</template>
