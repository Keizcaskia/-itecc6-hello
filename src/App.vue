<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://www.facebook.com/zehranyxjiya/" target="_blank">
      <img src="./assets/Me.JPG" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Greetings! I am Criza Fe B. Liquigan" />
</template>

<style scoped>
.logo {
  height: 20em;
  width: 20em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: 50%;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
