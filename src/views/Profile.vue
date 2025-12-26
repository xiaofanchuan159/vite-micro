<template>
  <div class="profile">
    <h1>个人中心</h1>
    <p>这是微应用的个人中心页面</p>
    <div class="profile-card">
      <div class="avatar">
        <div class="avatar-placeholder">👤</div>
      </div>
      <div class="user-info">
        <h3>微应用用户</h3>
        <p><strong>用户ID：</strong> micro-user-001</p>
        <p><strong>权限：</strong> 微应用访问权限</p>
        <p><strong>当前页面：</strong> {{ $route.path }}</p>
        <p><strong>应用类型：</strong> Vue3 微应用</p>
      </div>
    </div>
    <div class="navigation">
      <h3>页面导航：</h3>
      <div class="nav-buttons">
        <el-button type="primary" @click="navigateToHome">返回首页</el-button>
        <el-button type="success" @click="navigateToAbout">关于我们</el-button>
        <el-button type="info" @click="navigateToContact">详情</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTabHook } from '@/hooks/web/useTabHook';

const navigateToHome = () => {
  useTabHook('/');
};

const navigateToAbout = () => {
  useTabHook('/about');
};

const navigateToContact = () => {
  useTabHook('/contact');
};
</script>

<style scoped>
.profile {
  padding: 20px;
}

.profile-card {
  margin-top: 20px;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.avatar {
  flex-shrink: 0;
}

.avatar-placeholder {
  width: 80px;
  height: 80px;
  background-color: #6c757d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: white;
}

.user-info {
  text-align: left;
}

.user-info p {
  margin: 8px 0;
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