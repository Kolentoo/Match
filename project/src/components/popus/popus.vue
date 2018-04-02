<template>
    <div class="popus">
        <!--<div class="pop1 pus">
            <div class="pop-con">
                <p class="p1">该手机号已经报名，是否进入该手机号的报名中心</p>
                <ul class="btn-group">
                    <li class="cancle">取消</li>
                    <li class="ok">进入</li>
                </ul>
            </div>
        </div>
        <div class="pop2 popall">
            <div class="pop-con">
                <h2 class="tc">报名成功</h2>
                <p class="p1">请在规定日期内，在我的报名中，上传作品和语音</p>
                <p class="p2">作品上传日期：2018-04-07～2018-06-08</p>
                <p class="p2">语音上传日期：2018-04-14～2018-06-08</p>
                <img class="pic" src="../../public/images/success.png" alt="">
            </div>
            <ul class="btn-group">
                <li class="cancle">下次再传</li>
                <li class="ok">上传作品</li>
            </ul>
        </div>
        <div class="pop3 popall">
            <div class="pop-con">
                <h2 class="tc">报名失败</h2>
                <p class="p1 tc">服务器繁忙，请稍候再试</p>
                <img class="pic" src="../../public/images/fail.png" alt="">
            </div>
            <ul class="btn-group">
                <li class="ok">知道了</li>
            </ul>
        </div>
        <div class="mask"></div>-->
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
    .popus .pop1 {position: fixed;z-index:200;width: 62rem;background: #fff;border-radius:1.5rem;left: 50%;top: 50%;margin:-15rem 0 0 -31rem;
    overflow: hidden;}
    .popus .pop1 .p1 {color:#333;font-size: 3.2rem;padding:4rem 0;margin:0 4rem;}
    .btn-group {display: flex;justify-content: center;border-radius:0 0 1.5rem 1.5rem;overflow: hidden;}
    .btn-group li{width: 50%;line-height: 10rem;text-align: center;font-size: 3.2rem;}
    .btn-group .cancle {color:#333;background: #f5f5f5;}
    .btn-group .ok {background: #34abf6;color:#fff;}
    .mask {background:rgba(0,0,0,0.5);width: 100%;height: 100%;left: 0;top: 0;z-index:10;position: fixed;}
    .popall {position: fixed;z-index:200;width: 62rem;background: #fff;border-radius:1.5rem;left: 50%;top: 50%;margin:-15rem 0 0 -31rem;}
    .popall .pop-con {padding:4rem 0;margin:0 4rem;position: relative;}
    .popall .pop-con .pic {position: absolute;width: 17.6rem;left: 50%;margin-left: -8.8rem;top: 0;margin-top: -8.8rem;}
    .popall h2{font-size: 3.2rem;color:#333;margin: 4.5rem 0 2rem 0;}
    .popall .p1 {font-size: 2.8rem;color:#666;margin-bottom: 0.5rem;}
    .popall .p2 {font-size: 2.4rem;color:#fd7555;}
    .pop3 .btn-group li{width: 100%;}
</style>