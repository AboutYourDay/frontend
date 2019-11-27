<template>
  <div v-if="ui.open" class="alert-window-wrapper">
    <div class="alert-window">
      <div class="title-area">{{ui.title}}</div>
      <div class="alert-area">{{ui.content}}</div>
      <div class="button-area">
        <v-btn v-if="ui.hasCancel"
          small text color="#777" style="margin-right: 12px;"
          @click="onReject">취소</v-btn>
        <v-btn small text color="#1976D2" style="margin-right: 12px;"
          @click="onResolve">확인</v-btn>
      </div>
    </div>
  </div>
</template>

<script src="./alert-window.ts">
</script>

<style lang="scss" scoped>
.alert-window-wrapper {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  .alert-window {
    width: 380px;
    height: 260px;
    background: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    .title-area {
      height: 48px;
      line-height: 48px;
      background: #1976D2;
      border-radius: 8px 8px 0 0;
      padding-left: 20px;
      color: #eee;
      font-weight: 600;
      font-size: 20px;
    }
    .alert-area {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #444;
      font-size: 16px;
    }
    .button-area {
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>