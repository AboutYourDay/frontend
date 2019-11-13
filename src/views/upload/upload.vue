// file created at 2019. 11. 12.
// Auto-generated files upload.vue

<template>
  <v-layout column class="upload-window">
    <div class="title-area">
      <v-flex xs12 class="title" style="color: #aaa; font-weight: 500;">upload</v-flex>
      <v-spacer></v-spacer>
      <v-btn color="primary" small>upload</v-btn>
    </div>
    <v-layout xs12 class="upload-area flex-column d-sm-flex flex-sm-row-reverse">
      <v-flex class="control-area" sm4>
      <div class="group">
        <v-btn small @click="alignButton('flex-start')"><v-icon small>format_align_left</v-icon></v-btn>
        <v-btn small @click="alignButton('center')"><v-icon small>format_align_center</v-icon></v-btn>
        <v-btn small @click="alignButton('flex-end')"><v-icon small>format_align_right</v-icon></v-btn>
      </div>
      <div class="group">
        <v-btn small @click="verticalButton('flex-start')"><v-icon small>vertical_align_top</v-icon></v-btn>
        <v-btn small @click="verticalButton('center')"><v-icon small>vertical_align_center</v-icon></v-btn>
        <v-btn small @click="verticalButton('flex-end')"><v-icon small>vertical_align_bottom</v-icon></v-btn>
      </div>
      <div class="group">
        <v-icon small style="margin: 0 4px; border; solid 1px;">format_size</v-icon>
        <v-btn small @click="fontSizeButton('add')"><v-icon small>add</v-icon></v-btn>
        <v-btn small @click="fontSizeButton('remove')"><v-icon small>remove</v-icon></v-btn>
      </div>
    </v-flex>

    <v-flex class="image-area" xs12 sm8>
      <div class="edit-area" ref="editArea" contenteditable
        :style="{
          fontSize: ui.fontSize + 'px',
          justifyContent: ui.textAlignHorizontal,
          alignItems: ui.textAlignVertical,
        }">
        <div>abc</div>
      </div>
    </v-flex>
    

  </v-layout>
    </v-layout>
    
</template>
<script src='./upload.ts'>

</script>
<style lang='scss' scoped>
@import "./upload.scss";
</style>
