<template>
  <div class="page page_hello">
    <div>
      <img src="../../assets/logo.png">
    </div>
    <h1>{{ msg }}</h1>
    <h2>Странички</h2>
    <ul>
      <router-link tag="li" to="/home">Главная</router-link>
      <router-link tag="li" to="/product">Карточка товара</router-link>
    </ul>
  </div>
</template>

<script>
console.log('Hello.vue is loaded');
export default {
  data () {
    return {
      msg: 'Клаент сайд маркетплейса'
    }
  }
}
</script>
