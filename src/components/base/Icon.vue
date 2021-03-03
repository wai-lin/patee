<script lang="ts">
import { defineComponent } from '@vue/composition-api';

import '@/assets/css/icons.css';

export default defineComponent({
  name: 'BaseIcon',
  props: {
    iconName: { type: String, default: '' },
    size: { type: [String, Number], default: '16' },
  },
});
</script>

<template>
  <i class="patee-icon" :class="`icon-${iconName} patee-icon-${size}`" />
</template>
