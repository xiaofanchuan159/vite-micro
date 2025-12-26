import { createRouter, createWebHistory } from 'vue-router'
import { usemicroState } from '../views/micro/libs/microStore'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

// 添加路由守卫
router.beforeEach((to, from, next) => {
  // 拦截/contact路由
  if (to.path === '/contact') {
    const microStore = usemicroState()
    const routeChangeData = microStore.getRouteChangeData
    
    console.log('路由守卫拦截/contact，获取到的数据:', routeChangeData)
    
    if (routeChangeData) {
      // 从Pinia中获取数据并添加query参数
      const query = {
        ...to.query,
        source: routeChangeData.source,
        timestamp: routeChangeData.timestamp,
        message: routeChangeData.message
      }
      
      console.log('添加query参数后的路由:', { path: to.path, query })
      
      // 使用新的query参数跳转
      next({ path: to.path, query: query, replace: true })
      
      // 清除已使用的数据
      microStore.clearRouteChangeData()
      return
    }
  }
  
  next()
})

export default router