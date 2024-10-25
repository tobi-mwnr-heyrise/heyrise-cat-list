<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    required: false,
    default: '',
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const handleSearchInput = (event) => {
  emit('update:modelValue', event.target.value);
};
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <form>
      <div class="relative">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-500 mb-6"
          :class="{ 'border-gray-300': props.disabled }"
          :value="props.modelValue"
          :placeholder="props.placeholder"
          :disabled="props.disabled"
          @input="handleSearchInput"
        />
      </div>
    </form>
  </div>
</template>
