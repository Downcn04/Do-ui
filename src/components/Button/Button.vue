<script setup lang="ts">
import type { ButtonProps } from './types'
import { ref } from 'vue'
import Icon from '../Icon/Icon.vue'

defineOptions({
  name: 'DoButton',
})
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})
const _ref = ref<HTMLButtonElement>()
defineExpose({
  ref: _ref,
})
</script>

<template>
  <div>
    <button
      ref="_ref" class="do-button" :class="{
        [`do-button--${type}`]: type,
        [`do-button--${size}`]: size,
        'is-disabled': disabled,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      }" :disabled="disabled || loading" :autofocus="autoFocus" :type="nativeType"
    >
      <span>
        <slot />
      </span>
      <Icon v-if="icon" :icon="icon" />
      <Icon v-if="loading" icon="spinner" spin />
    </button>
  </div>
</template>

<style></style>
