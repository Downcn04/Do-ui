<script setup lang="ts">
import type { ButtonInstance } from './components/Button/types'
import { ref } from 'vue'
import DoButton from './components/Button/Button.vue'
import Docollapse from './components/Collapse/Collapse.vue'
import DocollapseItem from './components/Collapse/CollapseItem.vue'
import DoIcon from './components/Icon/Icon.vue'

const buttonRef = ref<ButtonInstance>()
</script>

<template>
  <DoIcon icon="coffee" type="warning" color="black" />
  <div style="display: flex; ">
    <DoButton ref="buttonRef" loading>
      Click me
    </DoButton>
    <DoButton type="primary" icon="coffee">
      Click me
    </DoButton>
    <DoButton type="info">
      Click me
    </DoButton>
    <DoButton type="warning">
      Click me
    </DoButton>
    <DoButton type="danger">
      Click me
    </dobutton>
    <DoButton type="success">
      Click me
    </DoButton>
  </div>
  <div>
    <Docollapse accordion>
      <DocollapseItem title="laoda" name="12">
        <template #title>
          11
        </template>
        <p>content dasdas1</p>
      </DocollapseItem>
      <DocollapseItem title="laoda" name="1">
        <template #title>
          11
        </template>
        <p>content dasdas1</p>
      </DocollapseItem>
    </Docollapse>
  </div>
</template>

<style scoped></style>
