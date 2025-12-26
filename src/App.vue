<template>
  <div id="micro-app">
    <nav>
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link> |
      <router-link to="/contact">详情</router-link> |
      <router-link to="/profile">个人中心</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
// 微应用的主组件
</script>

<style scoped>
#micro-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 20px;
}

nav {
  padding: 20px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 0 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>