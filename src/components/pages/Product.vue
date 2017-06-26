<template>
  <div class="page page_product">
    <button @click="galleryModalIsOpen = true">Open gallery modal</button>
    <modal v-if="galleryModalIsOpen" @close="galleryModalIsOpen = false"></modal>
  </div>
</template>

<script>
import modal from './../global/modal'
export default {
  data () {
    return {
			galleryModalIsOpen: false
    }
  },
  components: {
  	modal
  }
}
</script>
