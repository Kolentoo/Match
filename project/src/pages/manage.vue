<template>
    <div class="manage">
        <div class="manageTop">
            <h2 class="tc" v-if="upStatus===''">未上传作品、语音</h2>
            <h2 class="tc" v-if="upStatus==='nowork'">未上传作品</h2>
            <h2 class="tc" v-if="upStatus==='novoice'">未上传语音</h2>
            <h2 class="tc" v-if="upStatus==='ok'">已完成上传，期待您的童年画语</h2>
            <div class="infor">
                <div class="infor-box clearfix">
                    <div class="infor-con fl">
                        <div class="info-inner">
                            <p class="name b">{{info.childname}}</p>
                            <span class="s1">
                                <i class="group1" v-if="group===1">幼儿组</i> 
                                <i class="group2" v-if="group===2">少年组</i> 
                                <i class="group3" v-if="group===3">特别组</i> 
                                <em>{{info.age}}岁，{{info.sex}}</em>
                            </span>
                            <p class="p2">{{info.province}}{{info.city}}</p>
                            <p class="p2">{{info.organization}}</p>
                        </div>
                    </div>
                    <img class="decorate" src="../public/images/decorate.png" alt="" v-if="picurl===''">
                    <div class="picbox fr">
                        <img class="workpic" :src="picurl" alt="" v-if="picurl!=''">
                    </div>
                </div>
                <div class="voice" v-if="vupload">
                    <div class="voice-con">
                        <img class="voice-icon" src="../public/images/voice.png" alt="">
                        <span class="seconds">11s</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            <ul class="con">
                <li class="clist" @click="gowork">
                    <h3 v-if="picurl===''" class="b">作品上传</h3>
                    <h3 v-if="picurl!=''" class="b">作品修改</h3>
                    <p class="p1">上传日期：2018-04-07～2018-06-08</p>
                    <div class="status">
                        <span class="s2" v-if="work===1">未开始</span>
                        <span class="s2 s3" v-if="work===2">已开始</span>
                        <span class="s2" v-if="work===3">已停止</span>
                        <img v-if="work!=2" class="arrow1" src="../public/images/arrow3.png" alt="">
                        <img v-if="work===2" class="arrow1" src="../public/images/arrow2.png" alt="">
                    </div>
                </li>
                <li class="clist">
                    <h3 class="b">语音上传</h3>
                    <p class="p1">上传日期：2018-04-14～2018-06-08</p>
                    <div class="status">
                        <span class="s2" v-if="voice===1">未开始</span>
                        <span class="s2 s3" v-if="voice===2">已开始</span>
                        <span class="s2" v-if="voice===3">已停止</span>
                        <img v-if="voice!=2" class="arrow1" src="../public/images/arrow3.png" alt="">
                        <img v-if="voice===2" class="arrow1" src="../public/images/arrow2.png" alt="">
                    </div>
                </li>
                <li class="clist">
                    <h3 class="b">我的线上个人画展</h3>
                    <p class="p1">尽情期待</p>
                    <div class="status">
                        <span class="s2" v-if="look===1">未开始</span>
                        <span class="s2 s3" v-if="look===2">已开始</span>
                        <span class="s2" v-if="look===3">已停止</span>
                        <img v-if="look!=2" class="arrow1" src="../public/images/arrow3.png" alt="">
                        <img v-if="look===2" class="arrow1" src="../public/images/arrow2.png" alt="">
                    </div>
                </li>
            </ul>
        </div>
        <p class="bottom tc">
            如有疑问拨打客服电话：<a href="tel:400-895-6006">400-895-6006</a>
        </p>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                group:1,
                vupload:false,
                work:2,
                voice:1,
                look:1,
                info:'',
                picurl:'',
                upStatus:''
            }
        },
        created(){
            var tid = sessionStorage.getItem('tid'); 
            this.$axios.get(`/actives/ParticipantInfo`,{
                params:{
                    id:tid
                }
            }).then((res)=>{
                this.info=res.data.content
                if(res.data.content.works_img!=''){
                    this.picurl=res.data.content.works_img;
                }else{
                    this.upStatus='nowork'
                }
                if(res.data.content.works_voice!=''){
                    this.upStatus='ok'
                }else{
                    this.upStatus='novoice'
                }

                if(res.data.content.works_img===''&&res.data.content.works_voice===''){
                    this.upStatus=''
                }


                if(this.info.group_type==='幼儿组'){
                    this.group=1
                }else if(this.info.group_type==='少儿组'){
                    this.group=2
                }else{
                    this.group=3
                }

            })
            // this.$axios.get(`/actives/limitTime`,{
            // }).then((res)=>{
            //     console.log(res)
            // })
        },
        methods:{
            gowork(){
                if(this.upStatus!='nowork'&&this.upStatus!=''){
                    this.$router.push('upload?fixed');
                }else{
                    this.$router.push('upload');
                }
                
            }
        }
    }
</script>

<style scoped>
    body,html{background: #fff;}
    .manage {background: #fff;padding-bottom: 14rem;}
    .manageTop {background:url('../public/images/bj1.jpg') no-repeat center center;background-size: 100%;min-height: 40.3rem;}
    .manageTop h2{font-size: 3.8rem;color:#fff;padding:1.5rem 0;position: relative;top: 1.5rem;font-weight:bold;}
    .voice {background: url('../public/images/decorate2.jpg') no-repeat center center;background-size: 100%;height: 7.9rem;
    border-radius:0 0 1.5rem 1.5rem;margin-top: 2rem;}
    .voice-con {width: 19rem;height: 5.8rem;margin:0 auto;border-radius:1.2rem;background: #fff;position: relative;top: 1rem;display: flex;
    align-items: center;}
    .voice-con .voice-icon {width: 2.3rem;margin-left: 2rem;}
    .voice-con .seconds {font-size: 2.4rem;color:#999;margin-left: 9rem;}
    .infor {background: #fff;border-radius:1.5rem;box-shadow:0 1.4rem 6rem rgba(3,15,39,0.14);width: 67rem;margin:0 auto;
    position: relative;min-height: 31rem;position: relative;top: 2rem;margin-bottom: 6rem;}
    .infor-box {padding: 3rem;}
    .infor-con {width: 34rem;display: flex;align-items: center;height: 100%;margin-top: 2rem;}
    .infor .name {font-size: 3.4rem;color:#333;margin-bottom: 1rem;}
    .infor .s1 {font-size: 2.4rem;}
    .infor .s1 i{display: inline-block;width: 10rem;height: 3.8rem;line-height: 3.8rem;color:#fff;text-align: center;font-size: 2.4rem;
    border-radius:0.8rem;}
    .infor .group1 {background: #fd7555;}
    .infor .group2 {background: #31aaf6;}
    .infor .group3 {background: #4cb444;}
    .infor .s1 em{color:#999;margin-left: 1rem;display: inline-block;font-size: 2.8rem;}
    .infor .p2 {font-size: 2.4rem;color:#666;margin-top: 1rem;}
    .decorate {position: absolute;width: 26.2rem;right: 3rem;top: -1.2rem;}
    .picbox {width: 20rem;display: flex;align-items: center;height: 100%;height: 25rem;overflow: hidden;}
    .workpic {width: 100%;height: 100%;}
    .content {margin-top: 4rem;}
    .clist {width: 61rem;padding:3rem;background: #fff;border-radius:1.5rem;box-shadow:0 1.4rem 6rem rgba(3,15,39,0.14);
    margin:0 auto 4rem;}
    .clist {position: relative;}
    .clist h3{font-size: 3.8rem;color:#333;}
    .clist .p1 {font-size: 2.4rem;color:#999;margin-top: 0.5rem;}
    .clist .status {position: absolute;right: 2rem;top: 50%;margin-top: -1.3rem;}
    .clist .status .s2 {color:#fd7555;font-size: 2.4rem;position: relative;top: -0.3rem;}
    .clist .status .s3 {color:#31aaf6;}
    .clist .status .arrow1 {width: 1.5rem;margin-left: 1.2rem;}
    .bottom {font-size: 2.8rem;color:#666;margin-top: 4rem;}
    .bottom a{color:#fd7555;}

</style>