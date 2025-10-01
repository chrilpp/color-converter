<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <RouterLink to="/color-converter">Color Converter</RouterLink>
    </div>
    <ul class="navbar-links">
      <li><RouterLink to="/color-converter">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333;
  color: #fff;
  padding: 0.5rem 1rem;
}

.navbar a {
  color: #fff;
  text-decoration: none;
}

.navbar-logo a {
  font-weight: bold;
  font-size: 1.2rem;
}

.navbar-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-links li {
  margin-left: 1rem;
}

.navbar-links a:hover {
  text-decoration: underline;
}
</style>
