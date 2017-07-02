<template>
  <div class="picture_louped">
    <div class="picture_louped__wrapper">
      <img
        ref="origin"
        @mousemove="handleMouse"
        @mouseenter="showLoupedArea = true"
        @mouseleave="showLoupedArea = false"
        class="picture_louped__origin"
        :src="image.src"
        :alt="image.alt">
      <div
        class="louped-area"
        :style="loupedAreaStyle"
        v-if="showLoupedArea"></div>
    </div>
    <div class="picture_louped__louped"></div>
  </div>
</template>

<script>
  export default {
  	data(){
  		return {
  			showLoupedArea: false,
  			origin: {
  				height: undefined,
          width: undefined,
          mx: undefined,//mouse x position relative to image
          my: undefined //mouse y position relative to image
        },
        loupedAreaStyle: {
          height: undefined,
          width: undefined,
          top: undefined,
          left: undefined
        }
      }
    },
  	props: {
  		image: {
  			type: Object,
        required: true
      }
    },
    methods:{
  		handleMouse(e){
        this.origin.mx = e.offsetX;
        this.origin.my = e.offsetY;
				this.origin.height = e.target.clientHeight;
				this.origin.width = e.target.clientWidth;
				this.loupedAreaStyle.top = this.origin.my - parseInt(this.loupedAreaStyle.height) / 2 + 'px';
				this.loupedAreaStyle.left = this.origin.mx - parseInt(this.loupedAreaStyle.width) / 2 + 'px';
  			//console.log(this.origin.mx / this.origin.width,':',this.origin.my / this.origin.height);
      },
      init(){
  			this.loupedAreaStyle.height = '100px';
  			this.loupedAreaStyle.width = '100px';
      }
    },
    watch: {
			//imposing restrictions on loupedArea position
			//horizontal position
  		'loupedAreaStyle.left'(newValue){
  			if( parseInt(newValue) <= 0 ) this.loupedAreaStyle.left = 0;
  			if( parseInt(newValue) >= (this.origin.width - parseInt(this.loupedAreaStyle.width))) this.loupedAreaStyle.left = this.origin.width - parseInt(this.loupedAreaStyle.width) + 'px';
  		},
			//vertical position
			'loupedAreaStyle.top'(newValue){
				if( parseInt(newValue) <= 0 ) this.loupedAreaStyle.top = 0;
				if( parseInt(newValue) >= (this.origin.height - parseInt(this.loupedAreaStyle.height))) this.loupedAreaStyle.top = this.origin.height - parseInt(this.loupedAreaStyle.height) + 'px';
			}
    },
    mounted(){
  		this.init()
    }
  }
</script>