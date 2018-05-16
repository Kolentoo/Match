<template>
    <div class="activity">
        <div class="banner">
            <img class="logo vm" src="../public/images/logo.png" alt="">
            <img class="music vm" src="../public/images/music.png" alt="">
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
        <div class="news">

        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        }
    }
</script>

<style scoped>
    .banner {background: url('../public/images/bj8.jpg') no-repeat center center;background-size: 100% 100%;height: 75rem;}
    .banner .logo {width: 15.4rem;position: absolute;top: 0;left: 1rem;}
    .banner .music {width: 11.6rem;position: absolute;top: 1.5rem;right: 1rem;}
    .navigation {background: url('../public/images/bj10.png') repeat center center;height: 30.4rem;-webkit-background-size: 100%;
    background-size: 100%;display: flex;align-items: center;justify-content: center;}
    .navigation .nav-con {display: flex;justify-content: center;margin-top: -3rem;}
    .navigation .nav-list {width: 16.6rem;font-size: 2.4rem;color:#fff;text-align: center;margin:0 3rem;}
    .news {background: #41c4f9;}
</style>