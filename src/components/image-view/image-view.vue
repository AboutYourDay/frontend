<template>
  <div class="image-view-wrapper" ref="wrapper">
    <div class="image-zone" @click="openDetailView"
    :style="{
      width: type === 'calendar' ? '240px' : '320px',
      height: type === 'calendar' || diary.imageAttr.height == 0 ? 240*3/4+'px' :  diary.imageAttr.height+'px',
    }">
      <div class="background" :style="{    
        backgroundImage: `url(${diary.imageAttr.imageURL})`,
        filter: `blur(${diary.textAttr.blur/10}px)`
      }"></div>
      <div class="text" :style="{
        fontWeight: diary.textAttr.fontWeight,
        alignItems: diary.textAttr.alignVertical,
        justifyContent: diary.textAttr.alignHorizontal,
        color: diary.textAttr.color,
        fontStyle: diary.textAttr.italic ? 'italic' : '',
        textDecoration: diary.textAttr.underline? 'underline' : '',
      }">{{diary.textAttr.text}}</div>
    </div>
  </div>
</template>

<script src="./image-view.ts"/>

<style lang="scss" scoped>
@import '../../style/mediaQuery.scss';
.image-view-wrapper {
  :hover {
    cursor: pointer;
  }
  .image-zone {
    @media #{$phone} {
      width: 280px !important;
      overflow: hidden;
    }
    border: solid 1px #ddd;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .background {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
      
    }
    .text {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      display: flex;
    }
  }
}
</style>