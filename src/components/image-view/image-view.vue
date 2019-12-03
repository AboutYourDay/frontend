<template>
  <div class="image-view-wrapper" ref="wrapper">
    <div class="image-zone"
    :style="{
      backgroundImage: `url(${imageURL})`,
      }">
      {{text}}
    </div>
  </div>
</template>

<script src="./image-view.ts"/>

<style lang="scss" scoped>
.image-view-wrapper {
  :hover {
    cursor: pointer;
  }
  .image-zone {
    background-position: center center;
    background-size: cover;
    border: solid 1px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>