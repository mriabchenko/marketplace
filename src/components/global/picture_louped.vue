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
        v-if="showLoupedArea">
      </div>
      <div
        class="picture_louped__louped"
        v-if="showLoupedArea"
        title="image.alt"
        :style="loupedPictureStyle"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
  	data(){
  		return {
  			showLoupedArea: false,
        scale: 2,
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
        },
        loupedPictureStyle: {
  				backgroundImage: 'url(' + this.image.src + ')',
          backgroundSize: undefined,
          backgroundPositionX: undefined,
          backgroundPositionY: undefined,
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
        //defining origin size
				this.origin.height = e.target.clientHeight;
				this.origin.width = e.target.clientWidth;
				//defining mouse position
				this.origin.mx = e.offsetX;
				this.origin.my = e.offsetY;
				//defining loupedArea size using scale parameter
				this.loupedAreaStyle.height = this.origin.height / this.scale + 'px';
				this.loupedAreaStyle.width = this.origin.width / this.scale + 'px';
				//defining loupedArea position
				this.loupedAreaStyle.top = this.origin.my - parseInt(this.loupedAreaStyle.height) / 2 + 'px';
				this.loupedAreaStyle.left = this.origin.mx - parseInt(this.loupedAreaStyle.width) / 2 + 'px';
				//defining loupedPicture parameters
				this.loupedPictureStyle.backgroundSize = parseInt(this.origin.width) * this.scale + 'px ' + parseInt(this.origin.height) * this.scale + 'px';
				this.loupedPictureStyle.backgroundPositionX = ((-1) * this.scale * parseInt(this.loupedAreaStyle.top)) + 'px';
				this.loupedPictureStyle.backgroundPositionY = ((-1) * this.scale * parseInt(this.loupedAreaStyle.left)) + 'px';

				//console.log(this.origin.mx / this.origin.width,':',this.origin.my / this.origin.height);
      },
      init(){

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
			},
			//loupedAreaBGposition
			'loupedPictureStyle.backgroundPositionX'(){}
    },
    mounted(){
  		this.init()
    }
  }
</script>