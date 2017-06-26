<template>
  <div class="modal">
    <button class="modal__close" @click="$emit('close')">
      <svg class="svg-close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"  viewBox="0 0 14.3 14.3" style="enable-background:new 0 0 14.3 14.3;" xml:space="preserve">
        <polygon class="svg-close__line" points="14.3,13.4 7.9,7.2 14.3,0.9 13.4,0 7,6.3 0.9,0.3 0,1.2 6.1,7.2 0,13.1 0.9,14 7,8.1 13.4,14.3"/>
      </svg>
    </button>
    <div class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>