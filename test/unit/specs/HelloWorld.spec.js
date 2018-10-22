import Vue from 'vue'
import Question1 from '@/components/Question1'

describe('Question1.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Question1)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
