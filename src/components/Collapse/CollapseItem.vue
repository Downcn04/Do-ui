<script setup lang='ts'>
import type { CollapseItem } from './types'
import { computed, inject } from 'vue'
import Icon from '../Icon/Icon.vue'
import { CollapseContextKey } from './types'

defineOptions({
  name: 'DoCollapseItem',
})
const props = defineProps<CollapseItem>()
const injectOpenList = inject(CollapseContextKey)
function openClick(props: CollapseItem): void {
  injectOpenList?.handleClick(props)
}
const ifslot = computed<boolean>(() => !!props.title)
const open = computed<boolean>(() => {
  return injectOpenList?._openList.value.includes(props.name) ?? false
})
// provide和inject传递时只有当对象和数组时才可以修改
// 此时当动画结束后应该清楚属性
const sliderStyle: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px'
    el.style.overflow = 'hidden'
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`
  },
  afterEnter(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`
    el.style.overflow = 'hidden'
  },
  leave(el) {
    el.style.height = '0px'
  },
  afterLeave(el) {
    el.style.height = ''
    el.style.overflow = ''
  },
}
</script>

<template>
  <div class="do-collapse-item">
    <div class="do-collapse-item_header" :class="{ 'is-active': open, 'is-disabled': disabled }" @click="openClick(props)">
      <div v-if="!ifslot">
        <slot name="title" />
      </div>
      {{ props.title }}
      <Icon icon="angle-right" class="header_angle" />
    </div>
    <Transition name="slider" v-on="sliderStyle">
      <div v-show="open" class="do-collapse-item_wrapper">
        <div
          class="do-collapse-item_content"
        >
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>

</style>
