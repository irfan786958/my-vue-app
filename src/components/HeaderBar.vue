<template>
  <header class="header">
    <h1>{{ pageTitle }}</h1>
    <div class="right">
      <span class="user">👤 Irfan</span>
      <button class="logout">Logout</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderBar",
  computed: {
    pageTitle() {
      return this.$route.name || "Dashboard";
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background: #f5f5f5;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  position: sticky;
  top: 0;
  z-index: 100;
}
.right {
  display: flex;
  align-items: center;
  gap: 10px;
}
.logout {
  padding: 6px 12px;
  background-color: #d9534f;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
