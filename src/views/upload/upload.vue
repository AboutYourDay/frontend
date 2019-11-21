// file created at 2019. 11. 12.
// Auto-generated files upload.vue

<template>
  <v-layout column class="upload-window">
    <input ref="fileUpload" @change="imgUpload" type="file" hidden>
    <div class="title-area">
      <v-flex xs12 class="title" style="color: #aaa; font-weight: 500;">upload</v-flex>
      <v-spacer></v-spacer>
      <v-btn @click="handleFileUpload" color="primary" small>upload</v-btn>
    </div>
    <v-layout xs12 class="upload-area flex-column d-sm-flex flex-sm-row-reverse">
      <v-layout class="control-area" sm4>
        <a-collapse :defaultActiveKey="['textEditor', 'emotionEditor', 'imageEditor']" :bordered="false" style="width: 100%; flex: 1;">
          <a-collapse-panel header="Text Edit" key="textEditor">
            <div class="control-group">
              <v-btn small @click="alignButton('flex-start')"><v-icon small>format_align_left</v-icon></v-btn>
              <v-btn small @click="alignButton('center')"><v-icon small>format_align_center</v-icon></v-btn>
              <v-btn small @click="alignButton('flex-end')"><v-icon small>format_align_right</v-icon></v-btn>
            </div>
            <div class="control-group">
              <v-btn small @click="verticalButton('flex-start')"><v-icon small>vertical_align_top</v-icon></v-btn>
              <v-btn small @click="verticalButton('center')"><v-icon small>vertical_align_center</v-icon></v-btn>
              <v-btn small @click="verticalButton('flex-end')"><v-icon small>vertical_align_bottom</v-icon></v-btn>
            </div>
            <div class="control-group">
              <v-icon small style="margin: 0 4px; border; solid 1px;">format_size</v-icon>
              <v-btn x-small @click="fontSizeButton('remove')"><v-icon x-small>remove</v-icon></v-btn>
              <v-btn x-small @click="fontSizeButton('add')"><v-icon x-small>add</v-icon></v-btn>
            </div>
            <div class="control-group">
              <v-icon small style="margin: 0 4px; border; solid 1px;">format_bold</v-icon>
              <v-btn x-small @click="fontWeightButton('remove')"><v-icon small>remove</v-icon></v-btn>
              <v-btn x-small @click="fontWeightButton('add')"><v-icon small>add</v-icon></v-btn>
            </div>
            <div class="control-group">
              <v-icon small style="margin: 0 4px; border; solid 1px;">format_italic</v-icon>
              <v-switch small v-model="ui.italic"></v-switch>
              <v-icon small style="margin: 0 4px; border; solid 1px;">format_underline</v-icon>
              <v-switch small v-model="ui.underline"></v-switch>
            </div>
            <div class="control-group">
              <input ref="colorInput" type="color" value="#777777" @change="onChangeColor">
            </div>
          </a-collapse-panel>
          <a-collapse-panel header="Emotion" key="emotionEditor" :disabled="false">
            <p>2</p>
          </a-collapse-panel>
          <a-collapse-panel header="Image" key="imageEditor">
            <p>3</p>
          </a-collapse-panel>
        </a-collapse>
        
      </v-layout>

      <v-flex class="image-area" xs12 sm8>
        <div class="edit-area" ref="editArea" contenteditable
          :style="{
            backgroud: ui.backgroundUrl,
            fontSize: ui.fontSize + 'px',
            justifyContent: ui.textAlignHorizontal,
            alignItems: ui.textAlignVertical,
            fontWeight: ui.fontWeight,
            color: ui.color,
            fontStyle: ui.italic ? 'italic' : '',
            textDecoration: ui.underline? 'underline' : '',
          }">
        </div>
      </v-flex>
      

    </v-layout>
  </v-layout>
    
</template>



<script src='./upload.ts'/>

<style lang='scss' scoped>
@import "./upload.scss";
</style>
