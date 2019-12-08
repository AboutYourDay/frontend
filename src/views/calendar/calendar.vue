<template>
  <v-layout class="calendar-window" column style="height: calc(100vh - 64px)">
    <div xs12 class="title-area">
      <v-flex style="color: #aaa; font-weight: 500;">{{moment(today).format('YYYY/MM/DD')}}</v-flex>
      <v-spacer></v-spacer>
      <v-btn color="rgb(243,236,231)" small @click="moveListView">리스트뷰 보기</v-btn>
    </div>
    <v-layout class="filter-area" align-center my-3>
      <v-flex style="font-size: 32px; font-weight: 600; color: #444;">calendar</v-flex>
      <v-spacer></v-spacer>
      <v-btn v-if="ui.filterNone" text small @click="ui.filterNone = !ui.filterNone">전체 날짜 보기</v-btn>
      <v-btn v-else text small @click="ui.filterNone = !ui.filterNone">업로드 날짜 보기</v-btn>
      <a-date-picker v-if="ui.phone" size="small" style="margin-bottom: 8px;" :value="ui.filterDates[0]"/>
      <a-date-picker v-if="ui.phone" size="small" :value="ui.filterDates[1]"/>
      <a-range-picker v-else size="small" class="ml-4"
        :value="ui.filterDates"
        format="YYYY/MM/DD"
        @change="changeFilterDate"/>
      
    </v-layout>
    <v-layout class="calendar-area" ref="calendar"
      style="width: 100%; overflow-x: auto; flex: 11; border: dashed 1px #aaa;">
      <v-flex class="calendar-item-area"
        v-for="(diary, i) in dividedDiariesByDate" :key="'data'+i"
        v-show="!(ui.filterNone)"
        pa-4 style="min-width: 300px;">
        <div class="date" v-if="i===0">{{moment(ui.filterDates[1]).subtract(i, 'day').format('YYYY/MM/DD')}}</div>
        <div class="date" v-else-if="moment(ui.filterDates[1]).subtract(i, 'day').format('MM') === moment(ui.filterDates[1]).subtract(i-1, 'day').format('MM')">{{moment(ui.filterDates[1]).subtract(i, 'day').format('MM/DD')}}</div>
        <div class="date" v-else>{{moment(ui.filterDates[1]).subtract(i, 'day').format('YYYY/MM/DD')}}</div>
        <v-flex class="calendar-item">
          <image-view v-for="(d, idx) in diary" :key="'imageview-'+i+'-'+idx"
            :diary="d" style="margin: 8px;"></image-view>
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