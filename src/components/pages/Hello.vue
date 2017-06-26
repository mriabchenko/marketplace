<template>
  <div class="page page_hello">
    <div>
      <img src="../../assets/logo.png">
    </div>
    <h1>{{ msg }}</h1>
    <h2>Странички</h2>
    <ul>
      <router-link to="/home">Главная</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Клаент сайд маркетплейса'
    }
  }
}
</script>
