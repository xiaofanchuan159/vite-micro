import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(ElementPlus)

// 监听来自主应用的参数
import { usemicroState } from './views/micro/libs/microStore'

// 如果是在wujie环境中，监听event bus
if (window.$wujie) {
  console.log('检测到wujie环境，注册event bus监听')
  
  // 监听route-change事件
  window.$wujie.bus.$on('route-change', (data) => {
    if (data) {
      console.log('微应用通过event bus接收到路由参数:', data)
      
      // 将数据保存到Pinia store
      const microStore = usemicroState()
      microStore.setRouteChangeData(data.message)
      
      router.replace(data.message.microPath)
    }
  })
  
  // 监听sendMicroMessage-micro-app事件
  window.$wujie.bus.$on('sendMicroMessage-micro-app', (data) => {
    if (data && data.type === 'router') {
      console.log('微应用接收到统一格式的路由参数:', data)
      
      // 将数据保存到Pinia store
      const microStore = usemicroState()
      microStore.setRouteChangeData(data.message)
      
      if (data.message.microPath) {
        router.replace(data.message.microPath)
      }
    }
  })
  
  // 向主应用发送准备就绪的信号
  window.$wujie.bus.$emit('micro-app-ready', {
    appName: 'micro-app',
    timestamp: Date.now()
  })
} else {
  console.log('未检测到wujie环境，运行在独立模式')
}

app.use(router)
app.mount('#app')