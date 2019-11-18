// file created at 2019. 11. 17.
// Auto-generated files list.vue

<template>
  <v-layout class="list-window" column style="border: solid 1px;">
    <div xs12 class="title-area">
      <v-flex class="title" style="color: #aaa; font-weight: 500;">list view</v-flex>
      <v-spacer></v-spacer>
      <v-btn color="primary" small>달력뷰 보기</v-btn>
    </div>
    <v-layout class="date-area" align-center my-3>
      <v-flex style="font-size: 24px; font-weight: 600; color: #444;">abc</v-flex>
      <v-spacer></v-spacer>
      <v-btn fab width="40" height="40"
        @click="filterByEmoticion('all')"><v-icon>fiber_manual_record</v-icon></v-btn>
      <v-btn v-for="emotion in filter.emoticons" :key="emotion.value"
        fab width="40" height="40" style="margin-left: 8px;"
        @click="filterByEmoticion(emotion.value)">
        <v-icon>{{emotion.icon}}</v-icon>
      </v-btn>
    </v-layout>
    <v-layout class="list-area">
       <v-flex class="list-item" pa-4 mb-4 v-for="(d, i) in uiData" :key="'data'+i"
        :style="{width: d.width + 'px', minWidth: d.width + 'px', maxWidth: d.width + 'px'}">
        <div class="date">{{d.text}}</div>
        <div class="date">{{d.emoticon}}</div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<script src='./list.ts'>

</script>
<style lang='scss' scoped>
@import "./list.scss";
</style>
