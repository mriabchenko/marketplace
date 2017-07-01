<template>
  <div class="picture_louped">
    <img
      class="picture_louped__origin"
      :src="image.src"
      :alt="image.alt">
  </div>
</template>

<script>
  export default {
  	props: {
  		image: {
  			type: Object,
        required: true
      }
    }
  }
</script>