<template>
    <div class="sign">
        <div class="sign-box">
            <p class="sign-time">报名时间：2018年4月7日-6月8日</p>
            <div class="content">
                <ul class="tab-con">
                    <li :class="['tab-list',match==='未报名'?'tabon':'']" @click="tab('未报名')">大赛报名</li>
                    <li :class="['tab-list',match==='已报名'?'tabon':'']" @click="tab('已报名')">我的报名</li>
                </ul>
                <div class="match-box" v-if="match==='未报名'">
                    <div class="info-box">
                        <input v-model="name" class="text ilist name" type="text" placeholder="输入参赛者真实姓名，确定后不能修改" maxlength="18">
                        <div class="user-info clearfix ilist">
                            <div class="age info fl">
                                <select name="age" v-model="age">
                                    <option value="">参赛者年龄</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                </select>
                                <img class="arrow" src="../public/images/arrow.png" alt="">
                            </div>
                            <div class="sex info fr">
                                <select name="sex" v-model="sex">
                                    <option value="">参赛者性别</option>
                                    <option value="1">男</option>
                                    <option value="2">女</option>
                                </select>
                                <img class="arrow" src="../public/images/arrow.png" alt="">
                            </div>
                        </div>
                        <div class="group-box info">
                            <select name="group" class="group ilist" v-model="group">
                                <option value="">选择比赛组别</option>
                                <option value="">幼儿组</option>
                                <option value="">少儿组</option>
                                <option value="">特别组</option>
                            </select>
                            <img class="arrow" src="../public/images/arrow.png" alt="">
                        </div>
                        <div class="user-info clearfix ilist">
                            <div class="city1 info fl">
                                <select name="city1" v-model="city1">
                                    <option value="">省份/直辖市</option>
                                </select>
                                <img class="arrow" src="../public/images/arrow.png" alt="">
                            </div>
                            <div class="city2 info fr">
                                <select name="city2" v-model="city2">
                                    <option value="">城市/区县</option>
                                </select>
                                <img class="arrow" src="../public/images/arrow.png" alt="">
                            </div>
                        </div>
                        <input class="text ilist school" type="text" placeholder="输入所在机构名或学校" maxlength="25">
                        <login></login>
                    </div>
                    <p class="sign-btn bgcolor" @click="signbtn">报名</p>
                </div>
                <div class="my-match" v-if="match==='已报名'">
                    <div class="tips">
                        <p class="p1">已报名的参赛者登录后，可上传及修改作品和语音</p>
                        <p class="p1">作品上传日期：2018-04-07~2018-06-08</p>
                        <p class="p1">语音上传日期：2018-04-14~2018-06-08</p>
                    </div>
                    <div class="login-box">
                        <login></login>
                    </div>
                    <p class="sign-btn bgcolor">登录</p>
                </div>
            </div>
        </div>
        <pop :message="message">
            <div slot="pop">{{msg}}</div>
        </pop>
        <popus></popus>
    </div>
</template>

<script>
    import login from '../components/login/login'
    import pop from '../components/pop'
    import popus from '../components/popus/popus'
    export default{
        data(){
            return{
                // tabon:true,
                match:'未报名',
                name:'',
                phone:'',
                msg:'',
                message:true,
                age:'',
                sex:'',
                group:'',
                city1:'',
                city2:''
            }
        },
        components:{
            login,pop,popus
        },
        created(){

        },
        methods:{
            tab(event){
                this.match=event
            },
            checkName(){
                let sp = /^\s/;
                let regName = /^([a-zA-Z ]+|[\u4e00-\u9fa5]+)$/;
                if (this.name) {
                    this.message=false
                    this.popoff();
                    if(!sp.test(this.name)){
                        if (regName.test(this.name)) {
                            this.message=true
                            return true
                        } else {
                            this.msg='姓名错误';
                        }
                    }
                } else {
                    this.message=false
                    this.msg='姓名不能为空';
                    this.popoff();
                }
            },
            signbtn(){
                this.checkName();
                if(this.checkName()===true){
                    console.log(this.age)
                    if(this.age===''){
                        this.message=false
                        this.msg='参赛者年龄不能为空'
                    }else{
                        if(this.sex===''){
                            this.message=false
                            this.msg='参赛者性别不能为空'
                        }else{
                            if(this.group===''){
                                this.message=false
                                this.msg='参赛组别不能为空'
                            }else{
                                console.log('ok')
                            }
                        }
                    }
                }else{

                }
            },
            popoff(){
                let self = this;
                setTimeout(function() {
                    self.message=true
                }, 2000);
            }
        }
    }
</script>

<style scoped>
    .sign {background: #31aaf6;padding-bottom: 4rem;}
    .sign-box {background: url('../public/images/banner.jpg') no-repeat;min-height: 120.7rem;background-size: 100%;}
    .sign-time {font-size: 2.3rem;color:#fff;padding-top: 32rem;text-align: center;}
    .content {border-radius:1.5rem;background: #fff;box-shadow:0 0.8rem 4rem rgba(21,88,130,0.2);margin:5rem 4rem 0;overflow: hidden;
    padding-bottom: 6rem;}
    .tab-con {display: flex;}
    .tab-list {width: 50%;font-size: 3.2rem;color:#c5d1dc;background: #f5f5f5;text-align: center;line-height: 8rem;}
    .tabon {color:#31aaf6;background: #fff;}
    .info-box {margin: 0 4rem;}
    .content select{line-height: 8rem;color:#333;font-size: 2.8rem;text-align: center;display: inline-block;
    border-radius:1.5rem;border:0.1rem solid #ccc;height: 8rem;text-indent: 0.5em;}
    .info-box .user-info .info {width: 47%;}
    .info {position: relative;}
    .info .arrow{position: absolute;width: 2.2rem;right: 2rem;bottom: 3rem;}
    .info-box select{width: 100%;}
    .group-box select {width: 100%;}
    .user-info option{text-align: center;}
    .info-box .ilist {margin-top: 3.5rem;}
    .sign-btn {height: 8rem;line-height: 8rem;color:#fff;font-size: 2.4rem;text-align: center;margin:3.5rem 4rem 0;border-radius:1.2rem;}
    .bgcolor {
        background: #8a5607;
        background: -moz-linear-gradient(top, #55bafa 0% 0%, #31aaf6 100% 100%);
        background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#55bafa), color-stop(100%,#31aaf6));
        background: -webkit-linear-gradient(top, #55bafa 0% 0%,#31aaf6 100% 100%);
        background: -o-linear-gradient(top, #55bafa 0% 0%,#31aaf6 100% 100%);
        background: -ms-linear-gradient(top, #55bafa 0% 0%,#31aaf6 100% 100%);
        background: linear-gradient(to bottom, #55bafa 0% 0%,#31aaf6 100% 100%);
    }
    .tips {color:#fd7555;font-size: 2.34rem;line-height: 4rem;margin:3.5rem 4rem 0;}
    .login-box {margin:3.5rem 4rem 0;}
    
</style>