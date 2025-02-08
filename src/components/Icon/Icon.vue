<script setup lang='ts'>
import type { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { computed } from 'vue'
// 防止组件穿透到根组件
defineOptions({
  name: 'DoIcon',
  inheritAttrs: false,
})
const props = defineProps<IconProps>()
const _colorItem = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>

<template>
  <!-- $attrs所穿透的属性是被defineOptions过滤的属性 -->
  <i class="do-icon" :class="{ [`do-icon--${type}`]: type }" :style="_colorItem" v-bind="$attrs">
    <!-- 通过v-bind 所有传递给该组件的属性都可以直接使用 -->
    <FontAwesomeIcon v-bind="$props" />
  </i>
</template>

<style scoped>

</style>
