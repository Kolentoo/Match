<template>
    <div class="gallery">

    <svg class="hidden">
    <symbol id="icon-arrow" viewBox="0 0 24 24">
    <title>arrow</title>
    <polygon points="6.3,12.8 20.9,12.8 20.9,11.2 6.3,11.2 10.2,7.2 9,6 3.1,12 9,18 10.2,16.8 "/>
    </symbol>
    <symbol id="icon-drop" viewBox="0 0 24 24">
    <title>drop</title>
    <path d="M12,21c-3.6,0-6.6-3-6.6-6.6C5.4,11,10.8,4,11.4,3.2C11.6,3.1,11.8,3,12,3s0.4,0.1,0.6,0.3c0.6,0.8,6.1,7.8,6.1,11.2C18.6,18.1,15.6,21,12,21zM12,4.8c-1.8,2.4-5.2,7.4-5.2,9.6c0,2.9,2.3,5.2,5.2,5.2s5.2-2.3,5.2-5.2C17.2,12.2,13.8,7.3,12,4.8z"/>
    <path d="M12,18.2c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7c1.3,0,2.4-1.1,2.4-2.4c0-0.4,0.3-0.7,0.7-0.7c0.4,0,0.7,0.3,0.7,0.7C15.8,16.5,14.1,18.2,12,18.2z"/>
    </symbol>
    <symbol id="icon-menu" viewBox="0 0 24 24">
    <title>menu</title>
    <path d="M24,5.8H0v-2h24V5.8z M19.8,11H4.2v2h15.6V11z M24,18.2H0v2h24V18.2z"/>
    </symbol>
    <symbol id="icon-cross" viewBox="0 0 24 24">
    <title>cross</title>
    <path d="M13.4,12l7.8,7.8l-1.4,1.4l-7.8-7.8l-7.8,7.8l-1.4-1.4l7.8-7.8L2.7,4.2l1.4-1.4l7.8,7.8l7.8-7.8l1.4,1.4L13.4,12z"/>
    </symbol>
    <symbol id="icon-info" viewBox="0 0 20 20">
    <title>info</title>
    <circle style="fill:#fff" cx="10" cy="10" r="9.1"/>
    <path d="M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M10,18.6c-4.7,0-8.6-3.9-8.6-8.6S5.3,1.4,10,1.4s8.6,3.9,8.6,8.6S14.7,18.6,10,18.6z M10.7,5C10.9,5.2,11,5.5,11,5.7s-0.1,0.5-0.3,0.7c-0.2,0.2-0.4,0.3-0.7,0.3c-0.3,0-0.5-0.1-0.7-0.3C9.1,6.2,9,6,9,5.7S9.1,5.2,9.3,5C9.5,4.8,9.7,4.7,10,4.7C10.3,4.7,10.5,4.8,10.7,5z M9.3,8.3h1.4v7.2H9.3V8.3z"/>
    </symbol>
    </svg>
    <div :class="['container',{'entering':enter}]">
    <div class="scroller">
        <div class="room room--current">
        <div class="room__side room__side--back"> 
            <div class="picbox">
                <div class="wborder g10">
                    <div class="workbox g10">
                        <div class="picinner g10">
                            <img ref="wpic" class="workpic vm g10" src="../public/images/work1.jpg" alt="">
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
    .wborder {border:1.7rem solid #fff;box-shadow:0 1rem 2.5rem rgba(3,15,39,0.14);margin:0 1.5rem;display: flex;align-items: center;}
    .workbox {background: #fff;padding: 3rem;box-shadow:0 0 1.5rem 0.1rem rgba(0,0,0,0.3) inset;}
    .picbox {width: 50rem;display: flex;align-items: center;height: 100%;overflow: hidden;height: 100rem;margin-top: -30rem;}
    .picinner {max-height:100rem;overflow: hidden;}
    .workpic {width: 100%;box-shadow:0 0 0 0.2rem rgba(0,0,0,0.2);vertical-align: middle;}

    .gallery .btn-left {position: fixed;top: 45%;left: 2rem;}
    .gallery .btn-right {position: fixed;top: 45%;right: 2rem;}
    .nav .btn {width: 8rem;height: 8rem;background: none;}

</style>