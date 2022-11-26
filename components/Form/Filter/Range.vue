<template>
  <div>
    <label class="block px-4 mb-4 font-bold text-gray-600" :for="`filter-${name}`">{{ label }}</label>
    <div class="block relative">
      <div class="flex items-center bg-gray-200 px-4 py-3">
        <input type="range" class="w-full"
          :id="`filter-${name}`"
          :name="name"
          :min="min"
          :max="max"
          :step="step"
          :value="modelValue"
          @input="$emit('update:modelValue', Number($event.target.value))" />
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps(['name', 'label', 'min', 'max', 'step', 'modelValue'])
  defineEmits(['update:modelValue'])
</script>