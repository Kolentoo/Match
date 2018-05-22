<template>
    <div class="integral">
        <div class="bj">
            <div class="jfbox tc">
                <p class="currentjf b">{{myjf}}</p>
                <p class="txt">当前积分</p>
            </div>
        </div>
        <div class="jfrules">
            <div class="jftitle tc">
                <img class="vm" src="../public/images/decorate3.png" alt="">
                <span class="p1 b">积分规则</span>
                <img class="vm" src="../public/images/decorate4.png" alt="">
            </div>
            <dl class="rulescon">
                <dd>1. 每日首次登陆奖励25积分。</dd>
                <dd>2. 分享活动页面至朋友圈，每次可获得5积分。（每日限3次）</dd>
                <dd>3. 分享活动页面至好友或微信群，每次可获得5积分。（每日限10次）</dd>
            </dl>
        </div>
        <menubox :location="position"></menubox>
    </div>

</template>

<script>
    import menubox from '../components/menubox/menubox'
    var local = 'http://192.168.1.227:8081'
    var panda = 'http://student.dfth.com'
    export default{
        data(){
            return{
                position:'me',
                myjf:''
            }
        },
        created(){
            var curl = window.location.href;
            
            if(curl.indexOf('openid')>-1){
                var oid = curl.split('=')[1];
                localStorage.setItem('oid',oid);
            }else{
                var urlvalue = curl.split('8080/#/')[1]
                window.location.href='http://erp.dfth.com/index.php/Weixin/getWebOpenid?backurl='+urlvalue;
            }

            
            
            var localoid = localStorage.getItem('oid');

            this.$axios.get(`${local}/actives/joinerInt`, {
                params:{
                    openid:localoid
                }
            }).then((res)=> {
                this.myjf=res.data.content.total;
                console.log(this.myjf)
            })
        },
        components:{
            menubox
        }
    }
</script>

<style scoped>
    .bj {background: url('../public/images/bj4.jpg') no-repeat center center;background-size: 100%;height: 57.7rem;display: flex;
    align-items: center;color:#9c4c12;}
    .bj .jfbox {width: 100%;}
    .bj .currentjf {font-size: 11rem;line-height: 11rem;margin-top: 2rem;}
    .bj .txt {font-size: 2.8rem;line-height: 2.8rem;}
    .jfrules {padding:6rem 0;}
    .jftitle .p1 {font-size: 4.2rem;color:#333;margin:0 1rem;}
    .jftitle img{width: 3.6rem;margin-top: -2rem;}
    .rulescon {padding:2rem 4.5rem 0;}
    .rulescon dd{margin-top: 3rem;font-size: 2.8rem;color:#666;}
</style>