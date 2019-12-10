<template>
  <v-layout class="list-window" column ref="listWindow" style="height: calc(100vh - 64px)">
    <div xs12 class="title-area">
      <v-flex style="color: #aaa; font-weight: 500;">{{moment(today).format('YYYY/MM/DD')}}</v-flex>
      <v-spacer></v-spacer>
      <v-btn dark color="rgba(33,40,73, 0.9)" small @click="moveCalendarView">달력뷰 보기</v-btn>
    </div>
    <v-layout class="date-area" align-center my-3 style="flex: 1;">
      <v-flex style="font-size: 32px; font-weight: 600; color: #444;">list view</v-flex>
      <v-spacer></v-spacer>
      <div class="filter-button-area" v-for="emo in filter.emotions" :key="emo.value">
        <a-icon class="filterButton" :type="emo.icon" theme="filled"
          :click="emo.click" @click="filterByEmoticion(emo.value)"/>
      </div>
      <a-icon class="filterButton" type="reload" style="margin: 0 8px;" @click="filterByEmoticion('all')"/>
    </v-layout>
    <div class="list-area">
      <div class="container" ref="container" style="margin: 0 16px;">
        <image-view v-for="(d, i) in uiData" :key="'diary-'+d._id + i"
          :diary="d" type="list"></image-view>
        <!-- <div class="diaries" style="border: solid 1px;" v-for="(d, i) in uiData" :key="d._id + i">{{d.textAttr.text}}</div> -->
      </div>
       <!-- <v-flex class="list-item" pa-4 mb-4 v-for="(d, i) in uiData" :key="'data'+i"
        :style="{width: '280px', minWidth: '280px', maxWidth: '280px'}">
        <div class="date">{{d.textAttr.text}}</div>
        <div class="date">{{d.emotion}}</div>
      </v-flex> -->
    </div>
  </v-layout>
</template>
<script src='./list.ts'>

</script>
<style lang='scss' scoped>
@import "./list.scss";
</style>
