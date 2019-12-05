<template>
  <v-app>
    <v-app-bar app color="rgb(243,236,231)" hide-on-scroll>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>ABOUT YOUR DAY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="#777"
          v-if="!user" @click="login">login</v-btn>
        <v-btn text color="#777"
          v-else @click="logout">logout</v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
    <v-content app>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script src="./app.ts"/>

<style lang="scss" scoped>
@import './app.scss';
</style>