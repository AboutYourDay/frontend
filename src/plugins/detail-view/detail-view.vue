<template>
  <div class="detail-view-wrapper" v-if="ui.open"  @click.self="off">
    <div class="detail-view" ref="detailView">
      <div class="background" :style="{
        backgroundImage: diary?`url(${diary.imageAttr.imageURL})`:'',
        backgroundColor: diary? '' : '#ccc',
        filter: `blur(${diary.textAttr.blur / 10}px)`,
      }"></div>
      <div class="text" ref="textView" :style="{
        fontSize: diary.textAttr.fontSize + 'px',
        fontWeight: diary.textAttr.fontWeight,
        color: diary.textAttr.color,
        fontStyle: diary.textAttr.italic ? 'italic' : '',
        textDecoration: diary.textAttr.underline? 'underline' : '',
        alignItems: diary.textAttr.alignVertical,
        justifyContent: diary.textAttr.alignHorizontal,
      }">{{diary.textAttr.text}}</div>
      
      <div class="date-area hover">{{moment(diary.createdAt).format('YYYY/MM/DD')}}</div>
      <div class="button-area hover">
        <v-btn @click="goEditPage" dark icon x-large><v-icon>edit</v-icon></v-btn>
        <v-btn @click="off" dark icon x-large><v-icon>clear</v-icon></v-btn>
      </div>
      <div class="emotion-area hover" v-if="emotionIcon" style="font-size: 28px;"
        :style="{ color: diary.textAttr.color }">
        <a-icon :type="ui.emotionIcon"></a-icon>
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
    position: relative;
    .background {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: cover;
    }
    .text {
      position: absolute;
      display: flex;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;

    }

    position: relative;
    display: flex;
    &:hover {
      .hover {
        display: flex;
      }
    }
    .date-area {
      @media #{$phone} {
        display: flex;
        font-size: 12px;
      }
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
      @media #{$phone} {
        display: flex;
        width: 30px;
        height: 40px;
        justify-content: flex-end;
        align-items: flex-end;
        :only-child {
          width: 20px;
          font-size: 16px;
        }
      }
    }
    .emotion-area {
      @media #{$phone} {
        display: flex;
        font-size: 12px;
      }
      display: none;
      position: absolute;
      bottom: 12px;
      right: 12px;
    }
    
  }
}
</style>