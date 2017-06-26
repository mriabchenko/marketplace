<template>
  <div
    :title="alt"
    class="block_image"
    :style="{backgroundImage: 'url(' + img_src + ')'}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    img_src: {
      type: String,
      default: "/static/images/noimagefound.jpg"
    },
    alt: {
      type: String,
      default: "Market place"
    }
  },
}
</script>
