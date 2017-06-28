<template>
  <div class="pagination">
    <div
      class="pagination__item"
      v-for="index in itemsNumber"
      :style="thumbnails.length !== 0 ? {'background-image' : 'url('+thumbnails[index - 1]+')'} : {}"
      :class="(index - 1) == activeItem?'pagination__item_active':''"
      @click="$emit('pick',index-1)"
    >
    </div>
  </div>
</template>

<script>
	export default {
		props: {
			itemsNumber: {
				type: Number,
				required: true
			},
			activeItem: {
				type: Number,
				default: 0
			},
			thumbnails: {
				type: Array,
        default: function () {
          return []
				}
			}
		}
	}
</script>