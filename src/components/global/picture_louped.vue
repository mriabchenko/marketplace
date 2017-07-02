<template>
  <div class="picture_louped">
    <div class="picture_louped__wrapper">
      <img
        ref="origin"
        @mousemove="handleMouse"
        @mouseenter="showLoupedArea = true"
        @mouseleave="showLoupedArea = false"
        @wheel="handleWheel"
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
        lastMouseMoveEvent: undefined,
        scale : {
  				current: 2,
          max: 10,
          min: 2
				},
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
  			//saving event
  			this.lastMouseMoveEvent = e;
        //defining origin size
				this.origin.height = e.target.clientHeight;
				this.origin.width = e.target.clientWidth;
				//defining mouse position
				this.origin.mx = e.offsetX;
				this.origin.my = e.offsetY;
				//defining loupedArea size using scale.current parameter
				this.loupedAreaStyle.height = this.origin.height / this.scale.current + 'px';
				this.loupedAreaStyle.width = this.origin.width / this.scale.current + 'px';
				//defining loupedArea position
				this.loupedAreaStyle.top = this.origin.my - parseInt(this.loupedAreaStyle.height) / 2 + 'px';
				this.loupedAreaStyle.left = this.origin.mx - parseInt(this.loupedAreaStyle.width) / 2 + 'px';
				//defining loupedPicture parameters
				this.loupedPictureStyle.backgroundSize = parseInt(this.origin.width) * this.scale.current + 'px ' + parseInt(this.origin.height) * this.scale.current + 'px';
				this.loupedPictureStyle.backgroundPositionY = ((-1) * this.scale.current * parseInt(this.loupedAreaStyle.top)) + 'px';
				this.loupedPictureStyle.backgroundPositionX = ((-1) * this.scale.current * parseInt(this.loupedAreaStyle.left)) + 'px';

				//console.log(this.origin.mx / this.origin.width,':',this.origin.my / this.origin.height);
      },
      handleWheel(e){
  			if (e.deltaY < 0) this.scale.current++
        else if (e.deltaY > 0) this.scale.current--;
      },
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
      //x coordinate
			'loupedPictureStyle.backgroundPositionX'(newValue){
				if (parseInt(newValue) > 0) this.loupedPictureStyle.backgroundPositionX = 0;
				if (parseInt(newValue) < ((-1) * parseInt(this.origin.width) * (this.scale.current - 1) )) this.loupedPictureStyle.backgroundPositionX = (-1) * parseInt(this.origin.width) * (this.scale.current - 1)  + 'px';
      },
			//y coordinate
			'loupedPictureStyle.backgroundPositionY'(newValue){
				if (parseInt(newValue) > 0) this.loupedPictureStyle.backgroundPositionY = 0;
				if (parseInt(newValue) < ((-1) * parseInt(this.origin.height) * (this.scale.current - 1) )) this.loupedPictureStyle.backgroundPositionY = (-1) * parseInt(this.origin.height) * (this.scale.current - 1)  + 'px';
			},
      'scale.current'(newValue){
				if (newValue < this.scale.min) this.scale.current = this.scale.min;
				if (newValue > this.scale.max) this.scale.current = this.scale.max;
				this.handleMouse(this.lastMouseMoveEvent);
      }
    },
  }
</script>