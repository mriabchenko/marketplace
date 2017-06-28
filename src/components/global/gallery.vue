<template>
  <section class="gallery">
    <img
      class="gallery__image"
      :src="images[currentImage].src"
      :alt="images[currentImage].alt">
    <button class="gallery__button gallery__button_prev" @click="currentImage--"><-</button>
    <button class="gallery__button gallery__button_next" @click="currentImage++">-></button>
    <pagination
      :itemsNumber="images.length"
      :activeItem="currentImage"
    ></pagination>
  </section>
</template>
<script>
  import pagination from './pagination.vue'
  export default {
  	data(){
  		return {
  			currentImage: 0
			}
    },
    props: {
			images: {
				type: Array,
				required: true
			},
      startFrom: {
				type: Number,
        default: 0
      }
		},
    methods: {
  		init(){
  			this.currentImage = this.startFrom;
      }
    },
    watch:{
  		currentImage(v){
  			if (v < 0) this.currentImage = this.images.length - 1
        if (v > this.images.length - 1) this.currentImage = 0
      }
    },
    mounted(){
			this.init();
    },
    components: {
    	pagination
    }
  }
</script>