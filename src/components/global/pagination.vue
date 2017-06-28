<template>
  <div class="pagination">
    <div class="pagination__item"
         v-for="index in itemsNumber"
         :class="(index - 1) == activeItem?'pagination__item_active':''">
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
			}
		}
	}
</script>