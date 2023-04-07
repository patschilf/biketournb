<template>
  <div>
    <label class="mb-4 block px-4 font-bold text-gray-600" :for="`filter-${name}`">{{ label }}</label>
    <div class="relative block">
      <div class="flex items-center bg-gray-200 px-4 py-3">
        <input
          :id="`filter-${name}`"
          type="range"
          class="w-full"
          :name="name"
          :min="min"
          :max="max"
          :step="step"
          :value="modelValue"
          @input="$emit('update:modelValue', Number($event.target.value))"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
    required: false,
    default: 0,
  },
  max: {
    type: Number,
    required: false,
    default: 100,
  },
  step: {
    type: Number,
    required: false,
    default: 10,
  },
  modelValue: {
    type: Number,
    required: true,
  },
})
defineEmits([`update:modelValue`])
</script>
