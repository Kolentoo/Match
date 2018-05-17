<template>
    <div class="activity">
        <div class="banner">
            <img class="logo vm" src="../public/images/logo.png" alt="">
            <img @click="musiccontrols()" :class="['music vm',{'musicon':play}]" src="../public/images/music.png" alt="">
        </div>
        <div class="navigation">
            <ul class="nav-con">
                <li class="nav-list">
                    <img class="vm g10" src="../public/images/indexicon1.png" alt="">
                    <p class="p1">比赛规则</p>
                </li>
                <li class="nav-list">
                    <img class="vm g10" src="../public/images/indexicon2.png" alt="">
                    <p class="p1">奖项设置</p>
                </li>
                <li class="nav-list">
                    <img class="vm g10" src="../public/images/indexicon3.png" alt="">
                    <p class="p1">比赛作品</p>
                </li>
            </ul>
        </div>
        <div class="news" id="news">
            <div class="newstitle tc">
                <img class="vm" src="../public/images/decorate5.png" alt="">
                <span class="p1">童年话语报道</span>
                <img class="vm" src="../public/images/decorate6.png" alt="">
            </div>
            <video class="vm video-box" poster="../public/images/video.jpg" controls="" src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=l0628mbcgnr&auto=0"></video>

            <swiper :options="swiperOption1" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <dl>
                        <dd><a href="" target="_blank">东方童画|“童年画语”杯儿童绘画比赛开启“童年画语”杯儿童绘画比赛开启“童年画语”杯儿童绘画比赛开启</a></dd>
                        <dd><a href="" target="_blank">东方童画|“童年画语”杯儿童绘画比赛开启</a></dd>
                        <dd><a href="" target="_blank">东方童画|“童年画语”杯儿童绘画比赛开启</a></dd>
                    </dl>
                </swiper-slide>
                <swiper-slide>
                    <dl>
                        <dd><a href="" target="_blank">东方童画|“童年画语”杯儿童绘画比赛开启“童年画语”杯儿童绘画比赛开启“童年画语”杯儿童绘画比赛开启</a></dd>
                        <dd><a href="" target="_blank">东方童画|“童年画语”杯儿童绘画比赛开启</a></dd>
                        <dd><a href="" target="_blank">东方童画|“童年画语”杯儿童绘画比赛开启</a></dd>
                    </dl>
                </swiper-slide>
                <swiper-slide>
                    <dl>
                        <dd><a href="" target="_blank">东方童画|“童年画语”杯儿童绘画比赛开启“童年画语”杯儿童绘画比赛开启“童年画语”杯儿童绘画比赛开启</a></dd>
                        <dd><a href="" target="_blank">东方童画|“童年画语”杯儿童绘画比赛开启</a></dd>
                        <dd><a href="" target="_blank">东方童画|“童年画语”杯儿童绘画比赛开启</a></dd>
                    </dl>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination spagination1"  slot="pagination"></div>
                <div class="swiper-button-prev hide" slot="button-prev"></div>
                <div class="swiper-button-next hide" slot="button-next"></div>
                <div class="swiper-scrollbar hide"   slot="scrollbar"></div>
            </swiper>
        </div>
        <div class="bottom" id="bottom">
            <swiper :options="swiperOption2" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>
                    <a class="block" href="" target="_blank"><img class="vm g10" src="../public/images/example.png" alt=""></a>
                </swiper-slide>
                <swiper-slide>
                    <a class="block" href="" target="_blank"><img class="vm g10" src="../public/images/example.png" alt=""></a>
                </swiper-slide>
                <swiper-slide>
                    <a class="block" href="" target="_blank"><img class="vm g10" src="../public/images/example.png" alt=""></a>
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination spagination2"  slot="pagination"></div>
                <div class="swiper-button-prev hide" slot="button-prev"></div>
                <div class="swiper-button-next hide" slot="button-next"></div>
                <div class="swiper-scrollbar hide"   slot="scrollbar"></div>
            </swiper>
            
            <div class="support tc">
                <dl>
                    <dt>主办方</dt>
                    <dd>童年画语杯儿童绘画比赛组委会</dd>
                </dl>
                <dl>
                    <dt>协办方</dt>
                    <dd>朵云轩艺术中心</dd>
                </dl>
                <dl>
                    <dt>指导单位</dt>
                    <dd>中国儿童报</dd>
                </dl>
                <dl>
                    <dt>承办方</dt>
                    <dd>东方童画</dd>
                    <dd>中国特殊关爱基金会</dd>
                </dl>
            </div>
        </div>
        <menubox :location="position"></menubox>
        <audio id="audio" src="/static/audio/music.mp3" loop="loop" autoplay="autoplay"></audio>
    </div>
</template>

<script>
    import menubox from '../components/menubox/menubox'
    export default{
        data(){
            return{
                play:true,
                position:'index',
                swiperOption1: {
                    pagination: {
                        el: '.spagination1'
                    }
                },
                swiperOption2: {
                    pagination: {
                        el: '.spagination2'
                    }
                }
            }
        },
        created(){
        },
        mounted() {
            // current swiper instance
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
            this.swiper.slideTo(3, 1000, false)
        },
        computed:{
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        components:{
            menubox
        },
        methods:{
            musiccontrols(){
                let myAudio = document.getElementById('audio');
                if(myAudio.paused){
                    myAudio.play();
                    this.play=true
                }else{
                    myAudio.pause();
                    this.play=false
                }

                
            }
        }
    }
</script>

<style>
    .activity {padding-bottom: 14rem;}
    .activity .banner {background: url('../public/images/bj8.jpg') no-repeat center center;background-size: 100% 100%;height: 75rem;}
    .activity .banner .logo {width: 15.4rem;position: absolute;top: 0;left: 1rem;}
    .activity .banner .music {width: 8rem;height: 8rem;border-radius:50%;position: absolute;top: 3rem;right: 2.5rem;}
    @keyframes music {
        0%{transform:rotate(0deg);}
        50%{transform:rotate(180deg);}
        100%{transform:rotate(360deg);}
    }
    .activity .banner .musicon {animation: music linear 2s infinite;}
    .activity .navigation {background: url('../public/images/bj10.png') repeat center center;height: 30.4rem;-webkit-background-size: 100%;
        background-size: 100%;display: flex;align-items: center;justify-content: center;}
    .activity .navigation .nav-con {display: flex;justify-content: center;margin-top: -3rem;}
    .activity .navigation .nav-list {width: 16.6rem;font-size: 2.4rem;color:#fff;text-align: center;margin:0 3rem;}
    .activity .news {background: #41c4f9;padding-bottom: 8rem;}
    .activity .newstitle {padding:1rem 0 3rem 0;}
    .activity .newstitle .p1 {font-size: 4.2rem;color:#333;color:#fff;text-shadow:0 0.1rem 1rem rgba(0,91,176,0.45);}
    .activity .newstitle img{width: 6.8rem;margin-top: -2rem;}
    .activity .video-box {width: 88%;border-radius:2rem;height: 38rem;overflow: hidden;margin:0 auto;box-shadow:0 1.4rem 6rem rgba(0,79,152,0.6);
        display: block;object-fit:fill}
    .activity #news .swiper-container {height: 40rem;width: 88%;margin:0 auto;background: #fff;border-radius:2rem;
        box-shadow:0 1.4rem 6rem rgba(0,76,152,0.6);margin-top: 4.5rem;}
    .activity #news .swiper-slide {font-size: 2.8rem;line-height: 10.8rem;color:#333;height: 10.8rem;}
    .activity #news .swiper-slide a{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;border-bottom: 0.1rem solid #e6e6e6;
        display: block;margin:0 5%;}
    .activity #news .spagination1 {bottom: 3rem;}
    .activity #news .spagination1 .swiper-pagination-bullet {width: 1.2rem;height: 1.2rem;border-radius:50%;background: #c1d0d6;margin:0 1rem;opacity: 1;}
    .activity #news .spagination1 .swiper-pagination-bullet-active {background: #05adf3;opacity: 1;}


    .activity #bottom .swiper-container {height:28rem;width: 88%;margin:0 auto;border-radius:2rem;
        margin-top: 4.5rem;box-shadow:0 1.9rem 6rem rgba(0,0,0,0.12);}
    .activity #bottom .swiper-slide {height: 28rem;overflow: hidden;}
    .activity #bottom .swiper-slide img{width: 100%;height: 100%;}
    .activity #bottom .spagination2 {background: rgba(0,0,0,0.7);border-radius:10rem;z-index:500;height: 2.8rem;padding:0 0.8rem;width: 11rem;
    left: 50%;margin-left: -5.5rem;bottom: 2rem;}
    .activity #bottom .spagination2 .swiper-pagination-bullet {width: 1.2rem;height: 1.2rem;border-radius:50%;background: #757575;margin:0 1rem;
    margin-top: 0.7rem;opacity: 1;}
    .activity #bottom .spagination2 .swiper-pagination-bullet-active {background: #fff;opacity: 1;}
    
    .activity .support {width: 88%;background: #fff;border-radius:1rem;box-shadow: 0 1.9rem 6rem rgba(0,0,0,0.12);padding-bottom: 4rem;
    margin:0 auto;margin-top: 4rem;}
    .activity .support dl {padding-top: 4rem;}
    .activity .support dl dt{padding-bottom: 2.8rem;color:#05adf3;font-size: 3.6rem;}
    .activity .support dl dd{font-size: 2.8rem;color:#5c5e63;}
</style>