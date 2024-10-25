<script setup>
const props = defineProps({});
</script>

<template>
  <li class="p-4 border-b border-slate-200">
    <div class="flex items-center gap-3">
      <img
        class="relative inline-block h-20 w-20 !rounded-full object-cover object-center"
      />

      <div class="flex flex-col">
        <p class="text-sm font-semibold text-slate-700" />
        <p class="text-sm text-slate-500" />
      </div>
    </div>
  </li>
</template>
