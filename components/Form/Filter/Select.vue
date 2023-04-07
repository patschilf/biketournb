<template>
  <div>
    <label class="block px-4 mb-4 font-bold text-gray-600" :for="`filter-${name}`">{{ label }}</label>
    <div class="block relative">
      <select
        :id="`filter-${name}`"
        :name="name"
        :disabled="!options"
        class="block w-full appearance-none border py-3 px-4 pr-8 rounded leading-tight"
        @input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      >
        <option v-if="empty" value="">
          {{ empty }}
        </option>
        <option v-for="{value, label: option} of options" :key="`${value}`" :selected="modelValue === value" :value="value">
          {{ option }}
        </option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 flex right-0 items-center px-2">
        <svg class="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  options: {
    type: Array<{value: String, label: String}>,
    required: false,
    default() {
      return []
    },
  },
  empty: {
    type: String,
    required: false,
    default: `Please select`,
  },
  modelValue: {
    type: String,
    required: false,
    default: ``,
  },
})
defineEmits([`update:modelValue`])
</script>
