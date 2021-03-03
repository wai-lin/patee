<script lang="ts">
import { computed, defineComponent } from '@vue/composition-api';

import BaseHeader from '@/components/base/Header.vue';
import BaseButton from '@/components/base/Button.vue';
import BaseIcon from '@/components/base/Icon.vue';
import PateeListItem from '@/components/PateeListItem.vue';

import en2mmNum from '@/lib/en2mmNum';

import data from '@/data';

export default defineComponent({
  name: 'PagesPatee',
  components: {
    BaseHeader,
    BaseButton,
    BaseIcon,
    PateeListItem,
  },
  methods: {
    en2mmNum,
  },
  setup(_props, { root }) {
    const { $route, $router } = root;

    const patee = computed(() => {
      const keyOfPatee = $route.params.patee;
      return data[keyOfPatee as keyof typeof data];
    });

    type ITEM = typeof patee.value.steps[0][0];

    function listItemClickHander(item: ITEM) {
      $router.push(`/${patee.value.title[0]}/${item.step}_${item.day}`);
    }

    return {
      patee,
      listItemClickHander,
    };
  },
});
</script>

<template>
  <div>
    <base-header :title="patee.title[1]" sticky>
      <template #postfix>
        <base-button v-ripple circle>
          <base-icon class="text-red-500" icon-name="refresh" size="lg" />
        </base-button>
      </template>
    </base-header>

    <div class="mt-28" />

    <div
      v-for="(s, sIdx) in patee.steps"
      :key="`steps${sIdx}`"
      class="my-4 flex flex-col items-center justify-center"
    >
      <h3 class="font-bold text-xl text-red-500">
        အဆင့် {{ en2mmNum(sIdx + 1) }}
      </h3>

      <patee-list-item
        v-ripple
        class="my-4 w-4/5"
        v-for="sItem in s"
        :key="`${sItem.step}-${sItem.day}-${sItem.dayOfWeek}`"
        @click="listItemClickHander(sItem)"
        :is-finished="false"
        :day="sItem.day"
        :title="sItem.title"
        :count-loop="sItem.countLoop"
        :day-of-week="sItem.dayOfWeek"
        :is-vegetarian-day="sItem.isVegetarianDay"
      />
    </div>
  </div>
</template>
