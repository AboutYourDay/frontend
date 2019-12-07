<template>
  <v-app>
    <v-app-bar app color="rgb(243,236,231)" hide-on-scroll>
        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
            <template v-slot:activator="{ on }">
                <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
            </template>
            <v-card>
                <v-list nav dense>
                    <v-list-item-group v-model="group" active-class="orange--text text--accent-4">
                        <v-list-item @click="moveHomePage">
                            <v-list-item-icon>
                                <v-icon>mdi-home</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Home</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="moveUploadPage">
                            <v-list-item-icon>
                                <v-icon>mdi-upload</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Upload</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="moveCalendarView">
                            <v-list-item-icon>
                                <v-icon>mdi-calendar-month</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>Calendar</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="moveListView">
                            <v-list-item-icon>
                                <v-icon>mdi-wall</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>List</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                    <v-divider></v-divider>
                    <div class="pa-2">
                        <v-btn color="rgb(243,236,231)" block
                               v-if="!user" @click="login">login</v-btn>
                        <v-btn color="rgb(243,236,231)" block
                               v-else @click="logout">logout</v-btn>
                    </div>
                </v-list>
            </v-card>
        </v-menu>
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