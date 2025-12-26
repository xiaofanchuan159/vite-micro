<template>
  <div class="contact">
    <h1>详情</h1>
    <p>这是微应用的联系页面</p>
    <div class="contact-info">

      <div class="info-item">
       111 {{ route.query }} 333
        <strong>当前路由：</strong> {{ $route.path }}
      </div>
      <div class="info-item" v-if="$route.query.source">
        <strong>访问来源：</strong> {{ $route.query.source }}
      </div>
      <div class="info-item" v-if="$route.query.timestamp">
        <strong>访问时间：</strong> {{ formatTimestamp($route.query.timestamp) }}
      </div>
      <div class="info-item" v-if="$route.query.message">
        <strong>传递消息：</strong> {{ $route.query.message }}
      </div>
    </div>
    <div class="navigation">
      <h3>页面导航：</h3>
      <div class="nav-buttons">
        <el-button type="primary" @click="navigateToHome">返回首页</el-button>
        <el-button type="success" @click="navigateToAbout">关于我们</el-button>
        <el-button type="info" @click="navigateToProfile">个人中心</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTabHook } from '@/hooks/web/useTabHook';
import { useRoute as vueRoute } from 'vue-router';
import { useRoute } from '@/utils/wujieQuery';

const route = useRoute();
const vueroute = vueRoute();
console.log('route.query',route,route.query);
console.log('vue.query',vueroute,vueroute.query);
const formatTimestamp = (timestamp) => {
  if (!timestamp) return '';
  const date = new Date(parseInt(timestamp));
  return date.toLocaleString('zh-CN');
};

const navigateToHome = () => {
  useTabHook('/');
};

const navigateToAbout = () => {
  useTabHook('/about');
};

const navigateToProfile = () => {
  useTabHook('/profile');
};
</script>

<style scoped>
.contact {
  padding: 20px;
}

.contact-info {
  margin-top: 20px;
  text-align: left;
  background-color: #fff3e0;
  padding: 15px;
  border-radius: 8px;
}

.info-item {
  margin: 10px 0;
  padding: 8px;
  background-color: white;
  border-radius: 4px;
}

.navigation {
  margin-top: 20px;
  text-align: left;
  background-color: #fff3cd;
  padding: 15px;
  border-radius: 8px;
}

.nav-buttons {
  margin-top: 10px;
}

.nav-buttons .el-button {
  margin-right: 10px;
  margin-bottom: 5px;
}
</style>