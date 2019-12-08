<template>
  <v-app>
    <!-- 카드에서 드로우어로 바꿨습니다. -->
    <v-app-bar app color="rgb(243,236,231)" hide-on-scroll>
       <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>ABOUT YOUR DAY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="#777"
          v-if="!user" @click="login">login</v-btn>
        <v-btn text color="#777"
          v-else @click="logout">logout</v-btn>
        <v-menu v-if="user" v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-y>
        <template v-slot:activator="{ on }">
          <v-badge Right class = "mr-5" >
          <template  v-slot:badge>
            <span>2</span>
          </template>
          <v-icon  dark color = "grey" class = "pl-3" v-on="on">
            mdi-bell
          </v-icon>
          </v-badge>
            </template>
            <!-- to do-->
            <!-- 히스토리 갯수 올라가는 거 한 번 생각해주시고 결정해주시면 될거같습니다.
            제 생각에는 하루에 작성/수정한 것에 대한 개수를 주시면 좋을거 같습니다.
            다이어리 작성/수정 완료 시간 넣어주시면 좋을 거 같습니다 -->
            <v-card v-if="user">
                <v-list nav dense>
                    <v-list-item-group v-model="group" active-class="orange--text text--accent-4">
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-upload</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>다이어리 작성완료</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-icon>
                                <v-icon>mdi-wall</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title>다이어리 수정완료</v-list-item-title>
                        </v-list-item>
                    </v-list-item-group>
                    <v-divider></v-divider>
                </v-list>
            </v-card>
        </v-menu>
    
      </v-app-bar>
    <v-content app>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
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

      <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script src="./app.ts"/>

<style lang="scss" scoped>
@import './app.scss';
</style>