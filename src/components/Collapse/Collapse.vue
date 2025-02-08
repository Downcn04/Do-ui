<script setup lang='ts'>
import type { CollapseItem, CollapseProps, nameType } from './types'
import { provide, ref, watch } from 'vue'
import { CollapseContextKey } from './types'

defineOptions({
  name: 'DoCollapse',
})
const props = defineProps<CollapseProps>()
const openList = defineModel<nameType[]>({ default: [] })
const _openList = ref<nameType[] >([])
// 通过watch来监听是否传入v-model
watch(() => openList.value, () => {
  _openList.value = openList.value
})
function handleClick(item: CollapseItem): void {
  if (props.accordion) {
    if (_openList.value.includes(item.name)) {
      _openList.value = []
      console.warn(1)
    }
    else {
      _openList.value = [item.name]
      console.warn(2)
    }
  }
  else {
    if (_openList.value.includes(item.name)) {
      _openList.value.splice(_openList.value.indexOf(item.name), 1)
    }
    else {
      _openList.value.push(item.name)
    }
  }
}
provide(CollapseContextKey, { _openList, handleClick })
</script>

<template>
  <div class="do-collapse">
    <slot />
  </div>
</template>

<style scoped>

</style>
