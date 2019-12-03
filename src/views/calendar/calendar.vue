<template>
  <v-layout class="calendar-window" column style="height: calc(100vh - 64px)">
    <div xs12 class="title-area">
      <v-flex class="title" style="color: #aaa; font-weight: 500;">calendar</v-flex>
      <v-spacer></v-spacer>
      <v-btn color="primary" small @click="moveListView">리스트뷰 보기</v-btn>
    </div>
    <v-layout class="filter-area" align-center my-3 style="flex: 1;">

      <v-flex style="font-size: 24px; font-weight: 600; color: #444;">{{today}}</v-flex>
      <v-spacer></v-spacer>
      <v-btn v-if="ui.filterNone" text small @click="ui.filterNone = !ui.filterNone">전체 날짜 보기</v-btn>
      <v-btn v-else text small @click="ui.filterNone = !ui.filterNone">업로드 날짜 보기</v-btn>
      <a-range-picker size="small" class="ml-4"
        :defaultValue="[moment('2015/01/01', 'YYYY/MM/DD'), moment(today, 'YYYY/MM/DD')]"
        format="YYYY/MM/DD"/>
    </v-layout>
    <v-layout class="calendar-area" ref="calendar"
      style="width: 100%; overflow-x: auto; flex: 11; border: dashed 1px #aaa;">
      <v-flex class="calendar-item-area"
        v-for="(d, i) in data" :key="'data'+i"
        v-show="!(ui.filterNone && d.count === 0)"
        pa-4 style="min-width: 300px;">
        <div class="date">{{d.text}}</div>
        <v-flex class="calendar-item">
          <image-view :imageWidth="100" :width="200" :text="d.count"
            v-for="i in d.count" :key="'imageview-'+d.text+'-'+i"
            style="margin: 8px;"></image-view>
        </v-flex>
        
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script src="./calendar.ts">
</script>

<style lang="scss" scoped>
@import './calendar.scss';
</style>