import { describe, test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
describe('Button', () => {
  test('basic Button', () => {
    const wrapper = mount(Button, {
      props: {  
        type: 'primary',
        size: 'small'
      }, slots: {
        default: 'Button'
      }
    })
    console.log(wrapper.html())
  })
})