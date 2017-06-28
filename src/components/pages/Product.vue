<template>
  <div class="page page_product">
    <button @click="galleryModalIsOpen = true">Open gallery modal</button>
    <modal v-if="galleryModalIsOpen" @close="galleryModalIsOpen = false">
      <gallery
        :images="galleryImages"
        :thumbnails="galleryThumbnails"
      ></gallery>
    </modal>
  </div>
</template>

<script>
import modal from './../global/modal'
import gallery from './../global/gallery.vue'
export default {
  data () {
    return {
			galleryModalIsOpen: true,
      galleryImages: [
        {src: '/static/images/1.jpg', alt: 'car 1'},
        {src: '/static/images/2.jpg', alt: 'car 2'},
        {src: '/static/images/3.jpg', alt: 'car 3'},
        {src: '/static/images/4.jpg', alt: 'car 4'},
        {src: '/static/images/5.jpg', alt: 'car 5'},
        {src: '/static/images/6.jpg', alt: 'car 6'},
        {src: '/static/images/7.jpg', alt: 'car 7'},
        {src: '/static/images/8.jpg', alt: 'car 8'},
      ],
			galleryThumbnails: [
				'/static/images/thumbnails/1.jpg',
				'/static/images/thumbnails/2.jpg',
				'/static/images/thumbnails/3.jpg',
				'/static/images/thumbnails/4.jpg',
				'/static/images/thumbnails/5.jpg',
				'/static/images/thumbnails/6.jpg',
				'/static/images/thumbnails/7.jpg',
				'/static/images/thumbnails/8.jpg',
			]
    }
  },
  components: {
  	modal,
    gallery
  }
}
</script>
