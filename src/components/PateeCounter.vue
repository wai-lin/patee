<script lang="ts">
import { defineComponent, watch, watchEffect } from '@vue/composition-api';
import { reactifyObject, useCounter } from '@vueuse/core';

import useAudio from '@/lib/useAudio';
import en2mmNum from '@/lib/en2mmNum';

const isProd = process.env.NODE_ENV === 'production';

const audioUrls = {
  clickSound: {
    dev:
      'https://githubraw.com/wai-lin/patee/gh-pages/audio/mixkit-mouse-click-close-1113.mp3',
    prod:
      'https://cdn.githubraw.com/wai-lin/patee/gh-pages/audio/mixkit-mouse-click-close-1113.mp3',
  },
  finishSound: {
    dev:
      'https://githubraw.com/wai-lin/patee/gh-pages/audio/mixkit-positive-interface-click-1112.mp3',
    prod:
      'https://cdn.githubraw.com/wai-lin/patee/gh-pages/audio/mixkit-positive-interface-click-1112.mp3',
  },
};

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

    // ? counters
    const { count: currentLoop, inc: incCurrentLoop } = useCounter();
    const {
      count,
      inc: incCount,
      set: setCount,
      reset: resetCount,
    } = useCounter();

    // ? sound
    const clickSound = useAudio(
      isProd ? audioUrls.clickSound.prod : audioUrls.clickSound.dev,
    );
    const finishClickSound = useAudio(
      isProd ? audioUrls.finishSound.prod : audioUrls.finishSound.dev,
    );

    watchEffect(() => {
      // * reset counter
      if (count.value === pateeLength) {
        setCount(0);
        incCurrentLoop();
      }

      // * when done
      if (currentLoop.value === totalCountLoop) {
        resetCount();
        emit('done');
      }
    });
    // watch(count, newCount => {
    // });

    // watch(currentLoop, newCurrentLoop => {
    // });

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
