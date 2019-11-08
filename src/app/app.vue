<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script lang="ts" src="./app.ts"/>

<style lang="scss" scoped>
@import './app.scss';
</style>
