<template>
  <div class="image-view-wrapper" ref="wrapper">
    <div class="image-zone">
      {{text}}
    </div>
    
  </div>
</template>

<script src="./image-view.ts"/>

<style lang="scss" scoped>
.image-view-wrapper {
  .image-zone {
    border: solid 1px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>