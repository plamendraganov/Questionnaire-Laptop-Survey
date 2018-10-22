import Vue from 'vue'
import Router from 'vue-router'
import Question1 from '@/components/Question1'
import Question2 from '@/components/Question2'
import Question3 from '@/components/Question3'
import Question4 from '@/components/Question4'
import Intro from '@/components/Intro'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Question1',
      component: Question1
    },
    {
      path: '/q2',
      name: 'Question2',
      component: Question2
    },
    {
      path: '/q3',
      name: 'Question3',
      component: Question3
    },
    {
      path: '/intro',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/q4',
      name: 'Question4',
      component: Question4
    }
  ]
})
