<template>
    <v-app class="app">
        <v-app-bar app dark color="rgb(128,0,0)" hide-on-scroll>
            <v-app-bar-nav-icon class="btn_nav" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="toolbar-title" @click="moveHomePage">ABOUT YOUR DAY</v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="hide-phone">
                <v-btn text class="btn_tool" color="#FFF" @click="moveHomePage">Home</v-btn>
                <v-btn text class="btn_tool" color="#FFF" @click="moveUploadPage">Upload</v-btn>
                <v-btn text class="btn_tool" color="#FFF" @click="moveCalendarView">Calendar</v-btn>
                <v-btn text class="btn_tool" color="#FFF" @click="moveListView">List</v-btn>
            </div>
            <a-popover placement="bottom" style="margin-right: 12px;">
                <template slot="content">
                <p>오늘 업로드 diary: {{todayHistory.filter((h) => h.type === '작성').length}} 개</p>
                <p>오늘 수정한 diary: {{todayHistory.filter((h) => h.type !== '작성').length}} 개</p>
                </template>
                <a-badge :count="todayHistoryCount">
                    <a-icon style="font-size: 20px;" theme="filled" type="bell" />
                </a-badge>
            </a-popover>
            <!-- <a-tooltip placement="bottom">
                <template slot="title">{{html}}</template>
                <a-badge :count="todayHistoryCount">
                    <a-icon style="font-size: 20px;" theme="filled" type="bell" />
                </a-badge>
            </a-tooltip>
            <v-menu v-if="user" :nudge-width="200" offset-y>
                
                    <template v-slot:activator="{ on }">
                        <v-badge right class = "mr-5" >
                            <template v-slot:badge>
                                <span>{{todayHistoryCount}}</span>
                            </template>
                            <v-icon dark color = "white" class = "pl-3" v-on="on">
                                mdi-bell
                            </v-icon>
                        </v-badge>
                    </template>
                
            </v-menu> -->
            <v-btn class="hide-phone" text color="#FFF" v-if="!user" @click="login">login</v-btn>
            <v-btn class="hide-phone" text color="#FFF" v-else @click="logout">logout</v-btn>
        </v-app-bar>
        <v-content app>
            <v-navigation-drawer v-model="drawer" width="200px" absolute temporary>
                <v-list nav dense>
                    <v-list-item @click="moveHomePage">
                        <v-list-item-icon>
                            <v-icon color="rgb(128,0,0)">mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title style="color: #444444; font-size: 14px; font-weight: bold; position: absolute; left: 80px">Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="moveUploadPage">
                        <v-list-item-icon>
                            <v-icon color="rgb(128,0,0)">mdi-upload</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title style="color: #444444; font-size: 14px; font-weight: bold; position: absolute; left: 80px">Upload</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="moveCalendarView">
                        <v-list-item-icon>
                            <v-icon color="rgb(128,0,0)">mdi-calendar-month</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title style="color: #444444; font-size: 14px; font-weight: bold; position: absolute; left: 80px">Calendar</v-list-item-title>
                    </v-list-item>
                    <v-list-item @click="moveListView">
                        <v-list-item-icon>
                            <v-icon color="rgb(128,0,0)">mdi-wall</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title style="color: #444444; font-size: 14px; font-weight: bold; position: absolute; left: 80px">List</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item v-if="!user" @click="login" style="display: flex; align-items: center; justify-content: center; margin-top: 24px; font-weight: 500;">
                        login
                    </v-list-item>

                    <v-list-item v-else @click="logout" style="display: flex; align-items: center; justify-content: center; margin-top: 24px; font-weight: 500;">
                        logout
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