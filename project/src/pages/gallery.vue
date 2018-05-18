<template>
    <div class="gallery">
        <div class="top">
            <img class="indexbtn vm" src="../public/images/indexbtn.png" alt="">
            <img class="rankingbtn vm" src="../public/images/rankingbtn.png" alt="">
            <img class="musicbtn vm" src="../public/images/music.png" alt="">
        </div>

        <div class="gallery-bottom">
            <div class="presentshow">
                <div class="showcon">
                    <div class="presentscroll">
                        <p class="p1"><em>山鬼自风流</em>送<i>蓝色星球</i><img class="present-small vm" src="../public/images/present2.png" alt=""></p>
                        <p class="p1"><em>山鬼自风流</em>送<i>蓝色星球</i><img class="present-small vm" src="../public/images/present2.png" alt=""></p>
                        <p class="p1"><em>山鬼自风流</em>送<i>蓝色星球</i><img class="present-small vm" src="../public/images/present2.png" alt=""></p>
                    </div>
                    <div class="presentall">
                        <div class="alltitle tc">
                            <img class="line vm" src="../public/images/line1.png" alt="">
                            <span class="s1">总共收到礼物</span>
                            <img class="line vm" src="../public/images/line2.png" alt="">
                        </div>
                        <ul class="presentnumber">
                            <li class="present">
                                <img class="present-pic vm" src="../public/images/present1.png" alt="">
                                <em>999</em>
                            </li>
                            <li class="present">
                                <img class="present-pic vm" src="../public/images/present2.png" alt="">
                                <em>999</em>
                            </li>
                            <li class="present">
                                <img class="present-pic vm" src="../public/images/present3.png" alt="">
                                <em>999</em>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="send">
                <div class="send-con clearfix">
                    <div class="jfbox fl">
                        <p class="p1">NO.1</p>
                        <P class="p2">积分：<em>11232222</em></P>
                    </div>
                    <div class="sendwakeup fr">
                        <img class="wakeupbtn vm g10" src="../public/images/sendpresent.png" alt="">
                        <p class="p3">送礼物</p>
                    </div>
                </div>
            </div>
        </div>

        <svg class="hidden">
        <symbol id="icon-arrow" viewBox="0 0 24 24">
        <title></title>
        <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
        </symbol>
        <symbol id="icon-drop" viewBox="0 0 24 24">
        <title></title>
        <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"/>
        <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"/>
        </symbol>
        <symbol id="icon-menu" viewBox="0 0 24 24">
        <title></title>
        <path d="M24,5.8H0v-2h24V5.8z M19.8,11H4.2v2h15.6V11z M24,18.2H0v2h24V18.2z"/>
        </symbol>
        <symbol id="icon-cross" viewBox="0 0 24 24">
        <title></title>
        <path d="M13.4,12l7.8,7.8l-1.4,1.4l-7.8-7.8l-7.8,7.8l-1.4-1.4l7.8-7.8L2.7,4.2l1.4-1.4l7.8,7.8l7.8-7.8l1.4,1.4L13.4,12z"/>
        </symbol>
        <symbol id="icon-info" viewBox="0 0 20 20">
        <title></title>
        <circle style="fill:#fff" cx="10" cy="10" r="9.1"/>
        <path d="M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M10,18.6c-4.7,0-8.6-3.9-8.6-8.6S5.3,1.4,10,1.4s8.6,3.9,8.6,8.6S14.7,18.6,10,18.6z M10.7,5C10.9,5.2,11,5.5,11,5.7s-0.1,0.5-0.3,0.7c-0.2,0.2-0.4,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3C9.1,6.2,9,6,9,5.7S9.1,5.2,9.3,5C9.5,4.8,9.7,4.7,10,4.7C10.3,4.7,10.5,4.8,10.7,5z M9.3,8.3h1.4v7.2H9.3V8.3z"/>
        </symbol>
        </svg>
        <div :class="['container',{'entering':enter}]">
        <div class="scroller">
            <div class="room room--current">
            <div class="room__side room__side--back"> 
                <div class="workwrapper">
                    <div class="picbox">
                        <div class="wborder g10">
                            <div class="workbox g10">
                                <div class="picinner g10">
                                    <img ref="wpic" class="workpic vm g10" src="../public/images/work1.jpg" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="information">
                        <div class="work-name">思念是一种病思念是一种病</div>
                        <div class="userbox">
                            <div class="user-info clearfix">
                                <div class="user-txt fl">
                                    <img class="userpic vm" src="../public/images/woman.jpg" alt="">
                                    <span class="username">王大锤哈</span>
                                    <img class="arrow vm" src="../public/images/arrowright.png" alt="">
                                </div>
                                <div class="user-voice fr">
                                    <img class="voicepic vm" src="../public/images/voice.png" alt="">
                                    <span class="time">11s</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="room__side room__side--left"></div>
            <div class="room__side room__side--right"></div>
            <div class="room__side room__side--bottom"></div>
            </div>
            <!-- /room -->
            <div class="room">
            <div class="room__side room__side--back">
                <div class="picbox">
                    <div class="wborder g10">
                        <div class="workbox g10">
                            <div class="picinner g10">
                                <img ref="wpic" class="workpic vm g10" src="../public/images/work2.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="room__side room__side--left"></div>
            <div class="room__side room__side--right"></div>
            <div class="room__side room__side--bottom"></div>
            </div>
            <!-- /room -->
            <div class="room">
            <div class="room__side room__side--back">
                <img class="room__img" src="../public/images/set3/1.jpg" alt="Some image"/> 
            </div>
            <div class="room__side room__side--left"></div>
            <div class="room__side room__side--right"></div>
            <div class="room__side room__side--bottom"></div>
            </div>
            <!-- /room -->
            <div class="room">
            <div class="room__side room__side--back">
                <img class="room__img" src="../public/images/set1/6.jpg" alt="Some image"/> 
            </div>
            <div class="room__side room__side--left"></div>
            <div class="room__side room__side--right"></div>
            <div class="room__side room__side--bottom"></div>
            </div>
            <!-- /room -->
            <div class="room">
            <div class="room__side room__side--back">
                <img class="room__img" src="../public/images/set5/5.jpg" alt="Some image"/> 
            </div>
            <div class="room__side room__side--left"></div>
            <div class="room__side room__side--right"></div>
            <div class="room__side room__side--bottom"></div>
            </div>
            <!-- /room --> 
        </div>

    </div>
    <!-- /container -->
    <div class="content">
    <header class="codrops-header hide">
        <h1 class="codrops-header__title"></h1>
        <button class="btn btn--info btn--toggle"> <svg class="icon icon--info">
        <use xlink:href="#icon-info"></use>
        </svg> <svg class="icon icon--cross">
        <use xlink:href="#icon-cross"></use>
        </svg> </button>
        <button class="btn btn--menu btn--toggle"> <svg class="icon icon--menu">
        <use xlink:href="#icon-menu"></use>
        </svg> <svg class="icon icon--cross">
        <use xlink:href="#icon-cross"></use>
        </svg> </button>
        <div class="overlay overlay--menu">
        <ul class="menu">
            <li class="menu__item menu__item--current"><a class="menu__link" href="#">Exhibitions</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Discover</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Visit us</a></li>
            <li class="menu__item"><a class="menu__link" href="#">Shop</a></li>
        </ul>
        </div>
        <div class="overlay overlay--info">
        <!--<p class="info">&ldquo;3D炫酷房间</p>-->
        </div>
    </header>
    <!--<h4 class="location">Mirai Art Gallery &amp; Exhibition Center, Sapporo, Japan</h4>-->
    <div class="slides">
        <div class="slide">
        <h2 class="slide__name"></h2>
        <h3 class="slide__title"></span>
            <div class="slide__number"></div>
        </h3>
        <p class="slide__date"></p>
        </div>
        <div class="slide">
        <h2 class="slide__name"></h2>
        <h3 class="slide__title">
            <div class="slide__number"></div>
        </h3>
        <p class="slide__date"></p>
        </div>
        <div class="slide">
        <h2 class="slide__name"></h2>
        <h3 class="slide__title">
            <div class="slide__number"></div>
        </h3>
        <p class="slide__date"></p>
        </div>
        <div class="slide">
        <h2 class="slide__name"></h2>
        <h3 class="slide__title">
            <div class="slide__number"></div>
        </h3>
        <p class="slide__date"></p>
        </div>
        <div class="slide">
        <h2 class="slide__name"></h2>
        <h3 class="slide__title">
            <div class="slide__number"></div>
        </h3>
        <p class="slide__date"></p>
        </div>
    </div>
    <nav class="nav">
        <button class="btn btn--nav btn--nav-left btn-left">
            <img class="btnpic vm g10" src="../public/images/prev.png" alt="">
        </button>
        <button class="btn btn--nav btn--nav-right btn-right">
            <img class="btnpic vm g10" src="../public/images/next.png" alt="">
        </button>
    </nav>
    </div>
    <!-- /content -->
    <div class="overlay overlay--loader overlay--active">
    <div class="loader">
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>


    </div>
</template>

<script>
    export default{
        data(){
            return{
                enter:false
            }
        },
        created(){
            
        },
        mounted(){
            document.documentElement.className = 'js'
            setTimeout(()=> {
                this.enter=true
            }, 1000);
        }
    }
</script>

<style scoped>
    /*画框*/
    body,html {overflow-y:hidden}
    .wborder {border:1.7rem solid #fff;box-shadow:0 1rem 2.5rem rgba(3,15,39,0.14);margin:0 1.5rem;display: flex;align-items: center;}
    .workbox {background: #fff;padding: 3rem;box-shadow:0 0 1.5rem 0.1rem rgba(0,0,0,0.3) inset;}
    .picbox {width: 100%;align-items: center;height: 100%;overflow: hidden;margin-top: -5vh;display:flex;}
    .picinner {max-height:100rem;overflow: hidden;}
    .workpic {width: 100%;box-shadow:0 0 0 0.2rem rgba(0,0,0,0.2);vertical-align: middle;}

    .gallery .btn-left {position: fixed;top: 45%;left: 2rem;}
    .gallery .btn-right {position: fixed;top: 45%;right: 2rem;}
    .nav .btn {width: 8rem;height: 8rem;background: none;}

    .gallery .top .indexbtn {width: 10.4rem;height: 10.4rem;border-radius:50%;position: fixed;top: 3rem;left: 2rem;z-index:200;}
    .gallery .top .rankingbtn {width: 10.4rem;height: 10.4rem;border-radius:50%;position: fixed;top: 14rem;left: 2rem;z-index:200;}
    .gallery .top .musicbtn {width: 8rem;height: 8rem;border-radius:50%;position: fixed;top: 3rem;right: 3rem;z-index:200;}
    .information .work-name {font-size: 4.4rem;color:#333;width: 28rem;text-align: center;margin:2rem auto 0;}
    .information .user-info {background: #000;padding:1rem 0;border-radius:10rem;display: flex;justify-content: center;margin-top: 2rem;}
    .information .user-info .userpic {width: 7rem;height: 7rem;border-radius:50%;margin-left: 2rem;margin-top: -0.5rem;}
    .information .user-info .user-txt {font-size: 3.8rem;color:#fff;line-height: 9rem;}
    .information .user-info .user-txt .username {margin:0 1rem;}
    .information .user-info .arrow {width: 2rem;margin-top: -0.5rem;}
    .information .user-voice {margin-right: 2rem;margin-left: 3rem;border-left: 0.1rem solid #999;}
    .information .user-voice .voicepic {width: 4rem;margin:-2.5rem 1.5rem 0 2rem;}
    .information .user-voice .time {font-size: 4.8rem;color:#999;line-height: 9rem;}

    .gallery-bottom {position: fixed;bottom: 3rem;width: 92%;left: 4%;z-index:300;}
    .gallery-bottom .presentshow {width: 100%;background: rgba(255,255,255,0.5);height: 18rem;border-radius:2rem;
    box-shadow:0 1.8rem 6.8rem rgba(0,0,0,0.18);}
    .presentshow .showcon {padding:1rem 5%;}
    .presentscroll {height: 7rem;overflow: hidden;}
    .presentshow .p1 {font-size: 2.4rem;margin-bottom: 1rem;}
    .presentshow .p1 em{color:#333;}
    .presentshow .p1 i{color:#c58500;}
    .presentshow .p1 img{width: 2.6rem;margin:-0.7rem 0 0 1rem;}
    .presentall {margin-top: 1rem;}
    .alltitle .line {width: 12.4rem;height: 0.1rem;margin-top: -1rem;}
    .alltitle .s1 {margin:0 2rem;font-size: 2.4rem;color:#666;}
    .presentnumber {display: flex;justify-content: center;}
    .presentnumber .present {margin:0 3%;}
    .presentnumber .present-pic {height: 3.2rem;margin-top: -1.2rem;}
    .presentnumber em{color:#c58500;font-size: 2.8rem;margin-left: 1rem;}

    .send {width: 100%;background: rgba(255,255,255,0.5);height: 11rem;border-radius:2rem;
    box-shadow:0 1.8rem 6.8rem rgba(0,0,0,0.18);margin-top: 2rem;}
    .send-con {padding:1rem 5%;}
    .send-con .jfbox {color:#c58500;}
    .send-con .jfbox .p1 {font-size: 2.8rem;margin-top: 0.4rem;}
    .send-con .jfbox .p2 {font-size: 2.4rem;margin-top: 0.6rem;}
    .send-con .sendwakeup {width: 15.6rem;position: relative;text-align: center;line-height: 8rem;}
    .send-con .p3 {font-size: 2.6rem;position: absolute;width: 100%;color:#fff;top: 0;left: 0;}

</style>