<template>
  <div class="detail-view-wrapper" v-if="ui.open"  @click.self="off">
    <div class="detail-view" ref="detailView" :style="{
        backgroundImage: diary?`url(${diary.imageAttr.imageURL})`:'',
        fontSize: diary.textAttr.fontSize + 'px',
        fontWeight: diary.textAttr.fontWeight,
        color: diary.textAttr.color,
        fontStyle: diary.textAttr.italic ? 'italic' : '',
        textDecoration: diary.textAttr.underline? 'underline' : '',
        alignItems: diary.textAttr.alignVertical,
        justifyContent: diary.textAttr.alignHorizontal,
      }">{{diary.textAttr.text}}
      <div class="date-area hover">{{moment(diary.createdAt).format('YYYY/MM/DD')}}</div>
      <div class="button-area hover">
        <v-btn dark icon x-large><v-icon>edit</v-icon></v-btn>
        <v-btn @click="off" dark icon x-large><v-icon>clear</v-icon></v-btn>
      </div>
      <div class="emotion-area hover">
        <a-icon :type="emotionIcon"></a-icon>
      </div>
      
    </div>

  </div>
</template>

<script src="./detail-view.ts"/>
<style lang="scss" scoped>
@import '../../style/mediaQuery.scss';

.detail-view-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 900;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  .detail-view {
    @media #{$phone} {
      width: 100%;
      height: 50%;
    }
    @media #{$desktop} {
      width: 80%;
      height: 80%;
    }
    background-position: center;
    background-size: cover;
    position: relative;
    display: flex;
    &:hover {
      .hover {
        display: flex;
      }
    }
    .date-area {
      display: none;
      position: absolute;
      top: 16px;
      left: 20px;
      font-size: 20px;
      font-weight: 600;
      color: #777;
    }
    .button-area {
      display: none;
      position: absolute;
      top: 12px;
      right: 12px;
    }
    .emotion-area {
      display: none;
      position: absolute;
      bottom: 12px;
      right: 12px;
    }
    
  }
}
</style>