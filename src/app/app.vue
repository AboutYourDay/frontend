<template>
  <v-app>
    <v-app-bar app color="rgb(243,236,231)" hide-on-scroll>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> <!-- 네비게이션 바 호출기능 추가 -->
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
      <v-navigation-drawer v-model="drawer" absolute bottom temporary> <!-- 네비게이션 바 추가 모바일환경에서 bottom으로 적용되는 사이즈 조건 수정필요 -->
          <v-list nav dense>
              <v-list-item-group v-model="group" active-class="orange--text text--accent-4">
                  <v-list-item>
                      <v-list-item-icon>
                          <v-icon>mdi-upload</v-icon>
                      </v-list-item-icon>
                        <v-list-item-title @click="moveUploadPage">Upload</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-calendar-month</v-icon>
                      </v-list-item-icon>
                        <v-list-item-title @click="moveCalendarView">Calendar</v-list-item-title>
                  </v-list-item>
                  <v-list-item>
                      <v-list-item-icon>
                        <v-icon>mdi-wall</v-icon>
                      </v-list-item-icon>
                        <v-list-item-title @click="moveListView">List</v-list-item-title>
                  </v-list-item>
              </v-list-item-group>
          </v-list>
      </v-navigation-drawer>
    <v-content app>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script src="./app.ts"/>

<style lang="scss" scoped>
@import './app.scss';
</style>