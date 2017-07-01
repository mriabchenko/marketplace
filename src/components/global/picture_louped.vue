<template>
  <div class="picture_louped">
    <div class="picture_louped__wrapper">
      <img @mousemove="handleMouse"
        class="picture_louped__origin"
        :src="image.src"
        :alt="image.alt">
      <div class="louped-area" :style="loupedAreaStyle"></div>
    </div>
    <div class="picture_louped__louped"></div>
  </div>
</template>

<script>
  export default {
  	data(){
  		return {
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
  			console.log(this.origin.mx / this.origin.width,':',this.origin.my / this.origin.height);
      },
      init(){
  			this.loupedAreaStyle.height = '10px';
  			this.loupedAreaStyle.width = '10px';
      }
    },
    mounted(){
  		this.init()
    }
  }
</script>