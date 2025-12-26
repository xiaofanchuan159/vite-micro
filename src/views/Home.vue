<template>
  <div class="home">
    <h1>微应用首页</h1>
    <p>欢迎来到微应用的首页！</p>
    <div class="info">
      <h3>功能说明：</h3>
      <el-button type="success" @click="navigateToContact">跳转详情</el-button>
      <ul>
        <li>这是一个独立的Vue3微应用</li>
        <li>可以通过主应用的event bus接收路由参数</li>
        <li>支持多个页面导航</li>
        <li>当前页面：首页</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useTabHook } from '@/hooks/web/useTabHook';

const navigateToAbout = () => {
  useTabHook('/about');
};

const navigateToContact = () => {
  useTabHook('/contact', {
    query: {
      source: 'home',
      timestamp: Date.now(),
      message: '来自首页的访问'
    }
  });
};

const navigateToProfile = () => {
  useTabHook('/profile');
};
</script>

<style scoped>
.home {
  padding: 20px;
}

.info {
  margin-top: 20px;
  text-align: left;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 8px;
}

.info ul {
  margin: 10px 0;
  padding-left: 20px;
}

.info li {
  margin: 5px 0;
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