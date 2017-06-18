<template>
  <div class="page page_hello">
    <img src="./../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Pages</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="sass"></style>
