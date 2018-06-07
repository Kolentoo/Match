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
        <tips :msg="tipsmsg" v-if="hasmsg"></tips>
    </div>

</template>

<script>
    import menubox from '../components/menubox/menubox'
    import tips from '../components/tips/tips'
    var local = 'http://192.168.1.227:8081'
    var test = 'http://studenttest.dfth.com'
    var panda = 'http://student.dfth.com'
    export default{
        data(){
            return{
                position:'me',
                myjf:'',
                hasmsg:false
            }
        },
        created(){
            var curl = window.location.href;
            let localoid =localStorage.getItem('oid');
            if(localoid){
                this.oid=localoid
            }else{
                if(curl.indexOf('openid')>-1){
                    this.oid = curl.split('=')[1];
                    
                    this.$axios.get(`${test}/actives/joinerIn`,{
                        params:{
                            openid:localoid
                        }
                    }).then((res)=>{
                        if(res.data.status===1){
                            localStorage.setItem('oid',this.oid);
                        }else{
                            alert('登录失败')
                        }
                    })
                }else{
                    var urlvalue = escape(curl)
                    // console.log('http://erp.dfth.com/index.php/Weixin/getWebOpenidtest?backurl='+urlvalue)
                    window.location.href='http://erp.dfth.com/index.php/Weixin/getWebOpenidtest?backurl='+urlvalue;
                }
            }
            
            this.$axios.get(`${test}/actives/dayAdd`,{
                params:{
                    openid:localoid
                }
            }).then((res)=>{
                if(res.data.status===1){
                    this.hasmsg=true
                    this.tipsmsg='首次登陆成功'
                    this.myjf= parseInt(this.myjf)+25;
                }
            })

            wx.ready(()=>{

                wx.onMenuShareTimeline({
                    title: '绘画比赛-东方童画', // 分享标题
                    link: curl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                    imgUrl: '', // 分享图标
                    success:  ()=> {
                        this.$axios.get(`${test}/actives/timelineAdd`,{
                            params:{
                                openid:localoid
                            }
                        }).then((res)=>{
                            if(res.data.status===1){
                                this.hasmsg=true
                                this.tipsmsg='分享成功'
                                this.myjf =parseInt(this.myjf)+5
                            }
                        })
                    
                    // 用户点击了分享后执行的回调函数
                }
                });

                wx.onMenuShareAppMessage({
                title: '绘画比赛-东方童画', // 分享标题
                desc: '东方童画绘画比赛', // 分享描述
                link: curl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: '', // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: ()=> {
                    this.$axios.get(`${test}/actives/shareAppAdd`,{
                        params:{
                            openid:localoid
                        }
                    }).then((res)=>{
                        if(res.data.status===1){
                            this.hasmsg=true
                            this.tipsmsg='分享成功'
                            this.myjf =this.myjf =parseInt(this.myjf)+5
                        }
                    })
                // 用户点击了分享后执行的回调函数
                }
                });
            });
            

            this.$axios.get(`${test}/actives/joinerInt`, {
                params:{
                    openid:oid
                }
            }).then((res)=> {
                this.myjf=res.data.content.total;
            })
        },
        components:{
            menubox,tips
        }
    }
</script>

<style scoped>
    .bj {background: url('../public/images/bj4.jpg') no-repeat center center;background-size: cover;height: 57.7rem;display: flex;
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