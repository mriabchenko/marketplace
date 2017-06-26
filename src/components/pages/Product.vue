<template>
  <div class="page page_product">
    <button @click="galleryModalIsOpen = true">Open gallery modal</button>
    <modal v-if="galleryModalIsOpen" @close="galleryModalIsOpen = false"></modal>
    <block-image
      :img_src="img_src"
    ></block-image>
  </div>
</template>

<script>
import modal from './../global/modal'
import blockImage from './../global/block_image.vue'
export default {
  data () {
    return {
			galleryModalIsOpen: false,
    }
  },
  components: {
  	modal,
    blockImage
  }
}
</script>
