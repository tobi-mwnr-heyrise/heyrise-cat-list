<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <header>
    <h2 class="flex flex-row flex-nowrap items-center my-8">
      <span class="flex-grow block border-t border-black" />
      <span
        class="flex-none block mx-4 px-4 py-2.5 text-xs leading-none font-medium uppercase bg-black text-white" v-text="props.title"
      />
      <span class="flex-grow block border-t border-black" />
    </h2>
  </header>
</template>
