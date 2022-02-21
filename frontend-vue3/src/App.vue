<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/hamsters">Hamsters</RouterLink>
      <RouterLink to="/species">Species</RouterLink>
      <RouterLink to="/admin">Admin</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

header {
  line-height: 3.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(0, 0%, 92%, 0.64);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  border-radius: 5px;
}

nav a.router-link-exact-active {
  color: #e18b58;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: black;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
}
</style>
