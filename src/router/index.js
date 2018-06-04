import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Input from '@/components/Input'
import Display from '@/components/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/common/route1',
      name: 'Input',
      component: Input
    },
    {
      path: '/common/route2',
      name: 'Display',
      component: Display
    }
  ]
})
