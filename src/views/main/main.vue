<template>
    <v-layout column class="main-window">
        <section class="section01">
            <div class="section01_area">
                <p class="txt01 pc">
                    지금 당신은<br>
                    어떤 기분이세요?
                </p>
                <p class="txt01 mobile">
                    지금 당신은 어떤 기분이세요?
                </p>
                <p class="txt02 pc">
                    ABOUT YOUR DAY 로 당신의<br>
                    감정을 기록하고 관리하세요.
                </p>
                <p class="txt02 mobile">
                    ABOUT YOUR DAY 로 당신의 감정을 기록하고 관리하세요.
                </p>
                <div class="btn01">
                    <v-btn width="400" x-large color="rgb(243,236,231)">
                        <p class="txt03">시작하기</p>
                    </v-btn>
                </div>
                <img src="/img/main/phone.png" class="img01 pc" style="bottom: 0px">
            </div>
        </section>
        <section class="section02">
            <div class="section02_area">
                <p class="txt01">
                    언제 어디서나 편리하게
                    <br>
                    기록을 남기다.
                </p>
                <p class="txt02">
                    ABOUT YOUR DAY는
                    <br>
                    스마트폰, 태블릿, PC를 통해
                    <br>
                    언제 어디서나 그 순간의 기분을
                    <br>
                    사진과 글로 남길 수 있습니다.
                </p>
                <img src="/img/main/photo_2.png" class="img01 pc" style="right: 0px">
            </div>
        </section>
        <section class="section03">
            <div class="section03_area">
                <p class="txt01" style="right: 0px">
                    한 눈에 나만의 기록을 보다.
                </p>
                <p class="txt02" style="right: 0px">
                    사용자가 자신이 기록한 사진을
                    <br>
                    직관적으로 볼 수 있도록 이미지 중심의
                    <br>
                    List View, Calendar View UI로
                    <br>
                    시각적인 즐거움을 선사합니다.
                </p>
                <img src="/img/main/photo_3.png" class="img01 pc" style="left: 0px">

            </div>
        </section>
        <section class="section04">
            <div class="section04_area">
                <p class="txt01" style="right: 0px">
                    발자취를 확인하다.
                </p>
                <p class="txt02" style="right: 0px">
                    사용자의 다이어리 작성 및 수정을
                    <br>
                    히스토리에 남깁니다.
                    <br>
                    또한 자신의 발자취를 이메일을
                    <br>
                    통해서도 확인할 수 있습니다.
                </p>
                <img src="/img/main/photo_4.png" class="img01 pc" style="left: 0px">
            </div>
        </section>
        <section class="section05">
            <div class="section05_area">
                <p class="txt01" style="top: 50px">
                    시작하기
                </p>
                <p class="txt02" style="top: 135px">
                    이제 ABOUT YOUR DAY로 당신의 감정을 기록하세요.
                </p>
                <img src="/img/main/photo_5.png" class="img01" style="top: 200px">
                <div class="btn01" style="bottom: 55px">
                    <v-btn width="400" x-large color="rgb(243,236,231)">
                        <p class="txt03">시작하기</p>
                    </v-btn>
                </div>
            </div>
        </section>
        <footer id="footer_wrap">
            <div class="footer_area">
                <address class="address">
                    작성자명: 박현민, 이연주, 홍준엽
                    <br>
                    프로젝트명: About Your Day 아주대학교 웹시스템설계
                </address>
                <p class="copyright">
                    copyright ⓒ
                    <span>aaaaaaa</span>
                    all rights reserved.
                </p>
            </div>
        </footer>
    </v-layout>
</template>

<script src='./main.ts'>
</script>

<style lang='scss' scoped>
    @import "./main.scss";
</style>