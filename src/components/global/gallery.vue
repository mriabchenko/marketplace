<template>
  <section class="gallery">
      <div class="col-md-12 image-wrap" v-for="image in images">
        <div class="image" :style="{ backgroundImage: 'url(' + image + ')' }">
        </div>
      </div>
      <button class="button__back button__back-transparent" @click="navigateBack">{{button_back}}</button>
    </div>
  </section>
</template>
<script>
  import pagination from './pagination.vue';
  import block_image from '../global/image_block.vue'
  export default {
    props: {
      images: {
        type: Array,
        required: true
      },
      items: {
        type: Object,
      },
      button_back: ''
    },
    components: {
      appBlockImage: block_image
    }
  }
</script>
<style lang="sass" src="./../../assets/style/global__gallery.sass"></style>