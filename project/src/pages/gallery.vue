<template>
    <div class="gallery" id="gallery">
        <div class="top">
            <img :class="['indexbtn vm',{'action1':action1}]" @click="indexgo()" src="../public/images/indexbtn.png" alt="">
            <img :class="['rankingbtn vm',{'action2':action2}]" @click="rankgo()" src="../public/images/rankingbtn.png" alt="">
            <img :class="['musicbtn vm',{'musicon':play},{'action3':action3}]" @click="musiccontrols()" src="../public/images/music.png" alt="">
        </div> 

        <div :class="['gallery-bottom',{'action4':action4}]">
            <div class="presentshow">
                <div class="showcon">
                    <div class="presentscroll">
                        <vue-seamless-scroll :data="listData" :class-option="classOption">
                            <p v-for="(list,idx) in listData" :key="idx" class="p1"><em>{{list.name}}</em>送<i>{{list.present}}</i><img class="present-small vm" :src="list.imgUrl" alt=""></p>
                        </vue-seamless-scroll>
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
                        <p class="p3" @click="sendpresent()">送礼物</p>
                    </div>
                </div>
            </div>
            <div :class="['presentbox',{'preon':preon}]">
                <ul class="precon">
                    <li :class="['prelist',{'liston':item.on}]" v-for="(item,idx) in items" :key="idx" @click="chooose(item,idx)">
                        <img class="vm presentpic" :src="item.img" alt="">
                        <p class="p1">{{item.name}}</p>
                        <div class="price">
                            <em>{{item.money}}</em>
                            <img class="moneypic vm" src="../public/images/money.png" alt="">
                        </div>
                    </li>
                </ul>
                <div class="option clearfix">
                    <p class="yourmoney fl">
                        <em>余额：1123</em>
                        <img class="moneypic vm" src="../public/images/money.png" alt="">
                    </p>
                    <div class="btngroup fr" >
                        <div class="btn1 btn" @click="makemoney()">
                            <img class="btnpic1 vm" src="../public/images/getjf.png" alt="">
                            <p class="p1">如何赚积分</p>
                        </div>
                        <div class="btn2 btn" @click="popcancel()">
                            <img class="btnpic1 vm" src="../public/images/sendpresent.png" alt="">
                            <p class="p1">送出</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="popbox">
            <div class="pop1 pop" v-if="pop1">
                <div class="popinner">
                    <p class="poptitle">资料详情</p>
                    <div class="popcon">
                        <img class="userpic vm" src="../public/images/woman.jpg" alt="">
                        <p class="username tc">王学华</p>
                        <p class="grouptype tc">少儿组</p>
                        <p class="ages tc">13岁，女</p>
                        <dl>
                            <dd><em>指导老师：</em>王菲</dd>
                            <dd><em>所在区域：</em>上海市浦东新区</dd>
                            <dd><em>所属机构或校区：</em>东方童画徐汇校区</dd>
                        </dl>
                        <div class="desc">
                            <h2 class="tc">四年是一种名的创作故事</h2>
                            <div class="shape"></div>
                            <p class="desctxt">
                                可能是在遥远的未来，用太阳能充电，世界上
                                再没有堵车，不用电梯，只需一个传送机，不
                                需戒备森严，只要一个电力机器人，树上也可
                                以变成美丽的房子。
                            </p>
                        </div>
                    </div>
                    <img @click="closepop1()" class="vm close" src="../public/images/popclose.png" alt="">
                </div>
            </div>
            <div class="pop2 pop" v-if="pop2">
                <div class="popinner">
                    <p class="poptitle">如何赚积分</p>
                    <div class="popcon">
                        <p class="p1">1. 每日首次登陆奖励25积分。</p>
                        <p class="p1">2. 分享活动页面至朋友圈，每次可获得5积分。（每日限3次）</p>
                        <p class="p1">3. 分享活动页面至好友或微信群，每次可获得5积分。（每日限10次）</p>
                    </div>
                    <img class="vm close" @click="closepop2()" src="../public/images/popclose.png" alt="">
                </div>
            </div>
            <div class="pop3 tc" v-if="pop3">
                <div class="popinner">
                    <img class="vm endpic" src="../public/images/end.png" alt="">
                    <p class="p2 tc">线上评选活动已结束</p>
                    <img class="lookbtn vm" src="../public/images/resultbtn.png" alt="">
                    <img @click="closepop3()" class="vm close" src="../public/images/popclose2.png" alt="">
                </div>
            </div>
        </div>

        <audio id="audio" src="/static/audio/music.mp3" loop="loop" autoplay="autoplay"></audio>

        <audio v-if="hasvoice" id="user-audio" src="http://p6c1w0z8o.bkt.clouddn.com/psayVoice_20180522113237_90096.mp3" autoplay="autoplay" ></audio>

        <div class="mask" v-if="mk"></div>

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
                                <div class="user-txt fl" @click="information()">
                                    <img class="userpic vm" src="../public/images/woman.jpg" alt="">
                                    <span class="username">王大锤哈</span>
                                    <img class="arrow vm" src="../public/images/arrowright.png" alt="">
                                </div>
                                <div class="user-voice fr" v-if="hasvoice" @click="uservoice()">
                                    <img v-if="!voiceplay" class="voicepic vm" src="../public/images/voice.png" alt="">
                                    <img v-if="voiceplay" class="voicepic vm" src="../public/images/voice.gif" alt="">
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
    <div id="content" :class="['content',{'action5':action5}]" @click="popcancel()">
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
    

    <iframe src="" frameborder="0" id="source">

    </iframe>

    </div>
</template>

<script>
    import vueSeamlessScroll from 'vue-seamless-scroll'
    export default{
        data(){
            return{
                action1:false,
                action2:false,
                action3:false,
                action4:false,
                action5:false,
                play:true,
                enter:false,
                pop1:false,
                pop2:false,
                pop3:false,
                mk:false,
                preon:false,
                hasvoice:true,
                voiceplay:false,
                items:[
                    {
                        money:'10',
                        name:'粉色爱心',
                        img:'../../static/img/bigpresent1.png',
                        on:false
                    },
                    {
                        money:'30',
                        name:'蓝色星球',
                        img:'../../static/img/bigpresent2.png',
                        on:false
                    },
                    {
                        money:'50',
                        name:'阿特比心',
                        img:'../../static/img/bigpresent3.png',
                        on:false
                    }
                ],
                listData:[
                    {
                        name:'xxxxx',
                        present:'哈哈哈哈哈',
                        imgUrl:'../../static/img/present1.png'
                    },
                    {
                        name:'xxxxx',
                        present:'xxxxx',
                        imgUrl:'../../static/img/present2.png'
                    },
                    {
                        name:'xxxxx',
                        present:'哈哈哈哈哈',
                        imgUrl:'../../static/img/present3.png'
                    },
                    {
                        name:'xxxxx',
                        present:'哈哈哈哈哈',
                        imgUrl:'../../static/img/present1.png'
                    },
                    {
                        name:'xxxxx',
                        present:'哈哈哈哈哈',
                        imgUrl:'../../static/img/present1.png'
                    }
                ],
                classOption:{
                    step: 0.6, //步长 越大滚动速度越快
                    limitMoveNum: 3, //启动无缝滚动最小数据量 this.dataList.length
                    hoverStop: true, //是否启用鼠标hover控制
                    direction: 1, //1 往上 0 往下
                    openWatch: true, //开启data实时监听
                    singleHeight: 0, //单条数据高度有值hoverStop关闭
                    waitTime: 1000, //单步停止等待时间
                    autoplay:true
                }
                
            }
        },
        created(){

        },
        mounted(){
            let bheight = document.body.clientHeight;
            document.getElementById('gallery').style.height=bheight+'px'

            setTimeout(()=> {
                this.action3=true;
            }, 3200);            
            setTimeout(()=> {
                this.action1=true;
                this.action2=true;
            }, 3500);
            setTimeout(()=> {
                this.action5=true;
            }, 3800);
            setTimeout(()=> {
                this.action4=true;
            }, 4200);

            let content = document.getElementById('content');
            content.addEventListener('click',()=>{
                console.log(123)
            });

            let source = document.getElementById('source');
            let sourceGroup = document.createElement('script')
            sourceGroup.src='../../static/js/main.js'
            source.appendChild(sourceGroup);

            document.documentElement.className = 'js'
            setTimeout(()=> {
                this.enter=true
            }, 1000);

            let audio =document.getElementById('audio');
            let useraudio = document.getElementById('user-audio')

            if(useraudio){
                useraudio.addEventListener('ended', ()=> {  
                    audio.play();
                    this.play=true
                }, false);
            }

            if(this.hasvoice=true){
                this.play=false
                audio.pause();
            }


        },
        methods:{
            sendpresent(){
                this.preon=true
            },
            popcancel(){
                this.preon=false
            },
            chooose(item,idx){
                this.items.forEach((current,index,arr)=> {
                    if(idx===index){
                        current.on=true
                    }else{
                        current.on=false
                    }
                }, this);
                
            },
            makemoney(){
                this.pop2=true;
                this.mk=true;
            },
            closepop1(){
                this.pop1=false;
                this.mk=false;
            },
            closepop2(){
                this.pop2=false;
                this.mk=false;
            },
            closepop3(){
                this.pop3=false;
                this.mk=false;
            },
            musiccontrols(){
                let myAudio = document.getElementById('audio');
                let useraudio = document.getElementById('user-audio');
                if(myAudio.paused){
                    useraudio.pause();
                    myAudio.play();
                    this.play=true
                }else{
                    myAudio.pause();
                    this.play=false
                }
            },
            information(){
                this.pop1=true;
                this.mk=true
            },
            uservoice(){
                let myAudio = document.getElementById('audio');
                let useraudio = document.getElementById('user-audio');
                if(useraudio.paused){
                    myAudio.pause();
                    this.play=false;
                    useraudio.play();
                }else{
                    useraudio.pause();
                }
            },
            indexgo(){
                this.$router.push('acthome')
            },
            rankgo(){
                this.$router.push('work')
            }
        },
        components:{
            vueSeamlessScroll
        }
    }
</script>


<style scoped>
    /*画框*/
    .gallery {overflow-y:hidden;}
    .content {opacity: 0;position: relative;top: -3rem;transition:all ease 0.8s;}
    .action5 {opacity: 1;top: 0;}
    #source {display: none;}
    .gallery .entering {z-index:100;}
    .wborder {border:1.7rem solid #fff;box-shadow:0 1rem 2.5rem rgba(3,15,39,0.14);margin:0 1.5rem;display: flex;align-items: center;}
    .workbox {background: #fff;padding: 3rem;box-shadow:0 0 1.5rem 0.1rem rgba(0,0,0,0.3) inset;}
    .picbox {width: 80%;align-items: center;height: 100%;overflow: hidden;margin: -16vh auto 0;display:flex;}
    .picinner {max-height:100rem;overflow: hidden;}
    .workpic {width: 100%;box-shadow:0 0 0 0.2rem rgba(0,0,0,0.2);vertical-align: middle;}

    .gallery .btn-left {position: fixed;top: 45%;left: 2rem;}
    .gallery .btn-right {position: fixed;top: 45%;right: 2rem;}
    .nav .btn {width: 8rem;height: 8rem;background: none;}

    .gallery .top .indexbtn {width: 10.4rem;height: 10.4rem;border-radius:50%;position: fixed;top: 3rem;left:0;z-index:400;
    transition:all ease 0.8s;opacity: 0;}
    .gallery .top .rankingbtn {width: 10.4rem;height: 10.4rem;border-radius:50%;position: fixed;top: 14rem;left: -1rem;z-index:400;
    transition:all ease 0.8s;opacity: 0;}
    .gallery .top .musicbtn {width: 8rem;height: 8rem;border-radius:50%;position: fixed;top: 3rem;right: -1rem;z-index:400;
    transition:all ease 0.8s;opacity: 0;}

    .gallery .top .action1 {opacity: 1;left: 2rem;}
    .gallery .top .action2 {opacity: 1;left: 2rem;}
    .gallery .top .action3 {opacity: 1;right:3rem;}

    @keyframes music {
        0%{transform:rotate(0deg);}
        50%{transform:rotate(180deg);}
        100%{transform:rotate(360deg);}
    }
    .gallery .top .musicon {animation: music linear 2s infinite;}
    .information .work-name {font-size: 4rem;color:#333;width: 28rem;text-align: center;margin:1rem auto 0;}
    .information .user-info {background: #000;padding:1rem 0;border-radius:10rem;display: flex;justify-content: center;margin-top: 1rem;}
    .information .user-info .userpic {width: 5rem;height: 5rem;border-radius:50%;margin-left: 2rem;margin-top: -0.5rem;}
    .information .user-info .user-txt {font-size: 3.8rem;color:#fff;line-height: 7rem;}
    .information .user-info .user-txt .username {margin:0 1rem;}
    .information .user-info .arrow {width: 2rem;margin-top: -0.5rem;}
    .information .user-voice {margin-right: 2rem;margin-left: 3rem;border-left: 0.1rem solid #999;}
    .information .user-voice .voicepic {width:3rem;margin:-2.5rem 1.5rem 0 2rem;}
    .information .user-voice .time {font-size: 4rem;color:#999;line-height: 7rem;}

    .gallery-bottom {position: fixed;bottom: -20%;width: 92%;left: 4%;z-index:300;transition: all ease 0.6s;opacity: 0;}
    .action4 {bottom: 3rem;opacity: 1;}
    .gallery-bottom .presentshow {width: 100%;background: rgba(255,255,255,0.5);height: 18rem;border-radius:2rem;
    box-shadow:0 1.8rem 6.8rem rgba(0,0,0,0.18);}
    .presentshow .showcon {padding:1rem 5%;}
    .presentscroll {height: 6rem;overflow: hidden;}
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

    .send {width: 100%;background: rgba(255,255,255,1);height: 11rem;border-radius:2rem;
    box-shadow:0 1.8rem 6.8rem rgba(0,0,0,0.18);margin-top: 2rem;}
    .send-con {padding:1rem 5%;}
    .send-con .jfbox {color:#c58500;}
    .send-con .jfbox .p1 {font-size: 2.8rem;margin-top: 0.4rem;}
    .send-con .jfbox .p2 {font-size: 2.4rem;margin-top: 0.6rem;}
    .send-con .sendwakeup {width: 15.6rem;position: relative;text-align: center;line-height: 8rem;top: 0.4rem;}
    .send-con .p3 {font-size: 2.6rem;position: absolute;width: 100%;color:#fff;top: 0.4rem;left: 0;}

    .presentbox {border-radius:2.1rem;overflow: hidden;background: #fff;box-shadow:0 1.8rem 6.8rem rgba(0,0,0,0.18);margin-top: 2rem;
    transition:all ease 0.5s;position: fixed;bottom: -100%;width: 92%;left: 4%;opacity: 0;z-index:-1;}
    .preon {opacity: 1;z-index:400;bottom: 3rem;}
    .presentbox .precon {background: #f5f5f5;display: flex;justify-content: center;align-items: center;}
    .presentbox .prelist {text-align: center;width: 33.333%;padding:1.5rem 0 0.5rem 0;border:1rem solid #f5f5f5;}
    .presentbox .liston {border-color:rgb(255,205,83);}
    .presentbox .prelist:nth-child(1) {border-radius:2rem 0 0 0;}
    .presentbox .prelist:nth-child(3) {border-radius:0 2rem 0 0;}
    .presentbox .prelist .presentpic {height: 9rem;}
    .presentbox .prelist .p1 {font-size: 2.8rem;margin-top: 1rem;}
    .presentbox .prelist em{font-size: 2.4rem;color:#999;position: relative;top: 0.5rem;}
    .presentbox .prelist .moneypic {width: 5rem;}
    .presentbox .option {height: 11rem;padding:0 2rem;}
    .presentbox .option .yourmoney {color:#c58500;font-size: 2.8rem;line-height: 11rem;}
    .presentbox .option .yourmoney .moneypic {margin-top: -0.3rem;}
    .btngroup .btn {width: 15rem;margin:1.5rem 0 0 2rem;position: relative;text-align: center;}
    .btngroup .btn .p1 {font-size: 2.6rem;color:#fff;text-shadow:0.2rem 0.4rem 0.4rem rgba(43,21,0,0.2);width: 100%;height: 100%;
    top:2rem;left: 0;position: absolute;}
    .btngroup .btn .btnpic1 {width: 100%;}

    .pop {background: #fff;border-radius:2rem;box-shadow:0 0.6rem 5rem rgba(0,0,0,0.12);position: fixed;top: 50%;left: 50%
    ;z-index:1000;}
    .pop1 {width: 84%;height: 80rem;margin:-40rem 0 0 -42%;}
    .pop1 .popinner {position: relative;}
    .pop1 .popcon {height: 69rem;overflow: scroll;}
    .pop .poptitle {height: 9rem;line-height: 9rem;text-align: center;font-size: 3.6rem;text-align: center;border-bottom: 0.1rem solid #e6e6e6;}
    .pop1 .userpic {width: 14rem;height: 14rem;border-radius:50%;margin:3.5rem auto 1rem;display: block;}
    .pop1 .username {font-size: 3.2rem;color:#333;}
    .pop1 .grouptype {height: 3.6rem;line-height: 3.6rem;color:#fff;background: #31aaf6;padding:0 1rem;width: 11rem;margin:0.5rem auto;
    font-size: 2.4rem;}
    .pop1 .ages {font-size: 2.4rem;color:#999;}
    .pop1 dl{width: 80%;margin:2rem auto 0;font-size: 2.4rem;color:#666;border-bottom: 0.1rem solid #e6e6e6;padding:0 3rem 3rem;}
    .pop1 dd{line-height: 4.4rem;}
    .pop1 dl em{width: 21rem;display: inline-block;}
    .pop1 h2{font-size: 3.2rem;color:#333;font-weight:bold;}
    .pop1 .desc {margin-top: 3rem;}
    .pop1 .shape {width: 6rem;height: 0.5rem;background: #ffd15a;margin:1.5rem auto;}
    .pop1 .desctxt {font-size: 2.8rem;color:#999;width: 80%;margin:0 auto;padding-bottom: 1rem;}
    .pop .close {width: 3rem;position: absolute;top: 3rem;right: 3rem;}

    .pop2 {width: 68%;height: 44rem;margin:-22rem 0 0 -34%;}
    .pop2 .popcon {margin:0 2rem;font-size: 2.6rem;color:#666;}
    .pop2 .popcon .p1 {margin-top: 4rem;}


    .pop3 {width: 70%;height: 50rem;margin:-25rem 0 0 -35%;position: fixed;top: 50%;left: 50%
    ;z-index:1000;}
    .pop3 .popinner {position: relative;}
    .pop3 .endpic {width: 29.7rem;height: 29.7rem;}
    .pop3 .p2 {color:#fff;font-size: 4rem;margin-top: 2rem;}
    .pop3 .lookbtn {width: 25rem;margin:2rem auto 0;}
    .pop3 .close {position: absolute;width: 3rem;top: 2rem;right: 3rem;}

    .mask {background: rgba(0,0,0,0.5);width: 100%;height: 100%;z-index:900;position: fixed;top: 0;left: 0;}
    .nav {z-index:500;}
</style>