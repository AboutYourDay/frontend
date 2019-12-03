<template>
  <div class="loading-window"
    v-if="ui.open"
    :style="{backgroundColor: '#ededed', opacity: ui.opacity}">
    <a-spin>
      <a-icon slot="indicator" type="loading" style="font-size: 24px; color: #1976D2;" spin />
    </a-spin>
    <div class="text"
      style="margin-top: 12px; color: #444;">{{ui.text}}</div>
  </div>
</template>

<script src="./loading.ts"/>

<style lang="scss" scoped>
.loading-window {
  z-index: 999;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>