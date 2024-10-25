<script setup>
const props = defineProps({
  code: {
    type: String,
    required: false,
    default: 0
  },
  title: {
    type: String,
    required: false,
    default: 'Cats found'
  },
  title: {
    type: String,
    required: false,
    default: 'Try the "Get Cat" button'
  },
});
</script>

<template>
  <div class="bg-gray-200 w-full py-16 flex items-center justify-center">
    <div
      class="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
      <p class="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300" v-text="props.code" />

      <p class="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4" v-text="props.title" />

      <p class="text-gray-500 mt-8 py-2 text-center" v-text="props.subtitle" />
    </div>
  </div>
</template>
