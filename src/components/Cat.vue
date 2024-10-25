<script setup>
import { computed } from 'vue';

const props = defineProps({
  imageUrl: {
    type: String,
    reuired: true
  },
  id: {
    type: String,
    required: true
  },
  isGray: {
    type: Boolean,
    required: false,
    default: false
  }
});

const catEmail = computed(() => `${props.id}@heyrise.com`);
</script>

<template>
  <li class="p-4 border-b border-slate-200" :class="{ 'bg-gray-200': props.isGray }">
    <div class="flex items-center gap-3">
      <img class="relative inline-block h-20 w-20 !rounded-full object-cover object-center" :src="props.imageUrl" :alt="props.id" />

      <div class="flex flex-col">
        <p class="text-sm font-semibold text-slate-700" v-text="props.id" />
        <p class="text-sm text-slate-500" v-text="catEmail" />
      </div>
    </div>
  </li>
</template>
