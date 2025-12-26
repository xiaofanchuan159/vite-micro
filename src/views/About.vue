<template>
  <div class="about">
    <h1>关于我们</h1>
    <p>这是微应用的关于页面</p>
    <div class="content">
      <h3>微应用介绍</h3>
      <p>这个微应用演示了以下技术：</p>
      <ul>
        <li>Vue 3 Composition API</li>
        <li>Vue Router 4</li>
        <li>Vite 构建工具</li>
        <li>与主应用的通信机制</li>
        <li>微前端架构</li>
      </ul>
    </div>
    <div class="navigation">
      <h3>页面导航：</h3>
      <div class="nav-buttons">
        <el-button type="primary" @click="navigateToHome">返回首页</el-button>
        <el-button type="success" @click="navigateToContact">详情</el-button>
        <el-button type="info" @click="navigateToProfile">个人中心</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTabHook } from '@/hooks/web/useTabHook';

const navigateToHome = () => {
  useTabHook('/');
};

const navigateToContact = () => {
  useTabHook('/contact');
};

const navigateToProfile = () => {
  useTabHook('/profile');
};
</script>

<style scoped>
.about {
  padding: 20px;
}

.content {
  margin-top: 20px;
  text-align: left;
  background-color: #e8f4fd;
  padding: 15px;
  border-radius: 8px;
}

.content ul {
  margin: 10px 0;
  padding-left: 20px;
}

.content li {
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