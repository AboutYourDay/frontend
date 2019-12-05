<template>
  <div class="image-view-wrapper" ref="wrapper">
    <div class="image-zone" @click="openDetailView"
    :style="{
      backgroundImage: `url(${diary.imageURL})`,
      fontWeight: diary.textAttr.fontWeight,
      alignItems: diary.textAttr.alignVertical,
      justifyContent: diary.textAttr.alignHorizontal,
      color: diary.textAttr.color,
      fontStyle: diary.textAttr.italic ? 'italic' : '',
      textDecoration: diary.textAttr.underline? 'underline' : '',
      }">{{diary.textAttr.text}}
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
    border: solid 1px #ddd;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>