<script lang="ts">
import { defineComponent, watch } from '@vue/composition-api';
import { reactifyObject, useCounter } from '@vueuse/core';

import useAudio from '@/lib/useAudio';
import en2mmNum from '@/lib/en2mmNum';

export default defineComponent({
  name: 'PateeCounter',
  props: {
    totalCountLoop: { type: Number, default: 0 },
    pateeLength: { type: Number, default: 108 },
    size: { type: String, default: 'w-40 h-40' },
  },
  methods: {
    en2mmNum,
  },
  setup(props, { emit }) {
    // ? props
    const { totalCountLoop, pateeLength } = reactifyObject(props);

    // ? sound
    const clickSound = useAudio('/audio/mixkit-mouse-click-close-1113.mp3');
    const finishClickSound = useAudio(
      '/audio/mixkit-positive-interface-click-1112.mp3',
    );

    // ? counters
    const { count: currentLoop, inc: incCurrentLoop } = useCounter();
    const {
      count,
      inc: incCount,
      set: setCount,
      reset: resetCount,
    } = useCounter();

    // * reset counter
    watch(count, newCount => {
      if (newCount === pateeLength) {
        setCount(0);
        incCurrentLoop();
      }
    });

    // * when done
    watch(currentLoop, newCurrentLoop => {
      if (newCurrentLoop === totalCountLoop) {
        resetCount();
        emit('done');
      }
    });

    function clickHandler() {
      if (currentLoop.value < totalCountLoop) {
        incCount();
        clickSound.play();
        return;
      }
      finishClickSound.play();
    }

    return { currentLoop, count, clickHandler };
  },
});
</script>

<template>
  <div class="flex flex-col justify-center items-center">
    <p class="my-4 text-center text-red-700 font-bold">
      အပတ်စဉ် {{ en2mmNum(currentLoop) }}
    </p>
    <div
      class="select-none cursor-pointer rounded-lg grid place-items-center"
      :class="size"
      v-ripple
      @click="clickHandler"
    >
      {{ currentLoop === totalCountLoop ? 'ပြီးပါပြီ' : en2mmNum(count) }}
    </div>
  </div>
</template>
