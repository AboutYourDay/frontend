<template>
  <v-layout class="calendar-window" column style="border: solid 1px;">
    <div xs12 class="title-area">
      <v-flex class="title" style="color: #aaa; font-weight: 500;">calendar</v-flex>
      <v-spacer></v-spacer>
      <v-btn color="primary" small @click="moveListView">리스트뷰 보기</v-btn>
    </div>
    <v-layout class="date-area" align-center my-3>
      <v-flex style="font-size: 24px; font-weight: 600; color: #444;">{{today}}</v-flex>
      <v-spacer></v-spacer>
      <a-range-picker size="small"
        :defaultValue="[moment('2015/01/01', 'YYYY/MM/DD'), moment(today, 'YYYY/MM/DD')]"
        format="YYYY/MM/DD"/>
    </v-layout>
    <v-layout class="calendar-area" ref="calendar"
      style="width: 100%; overflow-x: auto; height: 500px; border: dashed 1px #aaa;">
      <v-flex class="calendar-item" v-for="(d, i) in data" :key="'data'+i" pa-4 style="min-width: 300px;">
        <div class="date">{{d.text}}</div>
        <div class="date">{{d.text}}</div>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script src="./calendar.ts">
</script>

<style lang="scss" scoped>
@import './calendar.scss';
</style>