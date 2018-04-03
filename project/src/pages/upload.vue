<template>
    <div class="upload">
        <div class="upload-box">
            <div class="load-inner">
                <div class="load-con">
                    <div class="title">
                        <p class="p1 tc">上传作品</p>
                        <img class="tree1" src="../public/images/tree1.png" alt="">
                        <img class="tree2" src="../public/images/tree2.png" alt="">
                    </div>
                    <div class="content">
                        <div class="subtance">
                            <div class="input">
                                <input class="work-name" type="text" placeholder="输入作品名字，限10字以内" v-model="workname">
                            </div>
                            <textarea class="work-story" placeholder="输入我的作品故事，限100字以内" v-model="workstory"></textarea>
                        </div>
                    </div>
                    <div class="file-box clearfix">
                        <chart ref="chart1" class="fl" msg="上传参赛者照片"></chart>
                        <chart ref="chart2" class="fr" msg="上传作品"></chart>
                    </div>
                    <p class="sure" @click="sure">确定</p>
                </div>
            </div>
            
        </div>
        <div :class="['tips-box',{hide:on}]">
            <div class="photo-tips">
                <p class="title tc">拍摄提示</p>
                <div class="photo-con">
                    <div class="photo-inner">
                        <div class="ebox">
                            <p class="p1">1.建议选择1200万像素以上的设备进行拍摄</p>
                            <img class="example" src="../public/images/example.jpg" alt="">
                        </div>
                        <div class="ebox">
                            <p class="p1">2.请将相机垂直画面拍摄</p>
                            <div class="imgbox">
                                <img class="example" src="../public/images/example2.jpg" alt="">
                                <img class="example" src="../public/images/example3.jpg" alt="">
                            </div>
                        </div>
                        <div class="ebox">
                            <p class="p1">3.拍摄使用自然背景光效果最佳，避免光点以及阴影</p>
                            <div class="imgbox">
                                <img class="example" src="../public/images/example4.jpg" alt="">
                                <img class="example" src="../public/images/example5.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <p class="pclose" @click="pclose">确定</p>
            </div>
            <div class="mask"></div>
        </div>
        <pop :message="message">
            <div slot="pop">{{msg}}</div>
        </pop>
    </div>
</template>

<script>
    import chart from '../components/chart/chart'
    import pop from '../components/pop'
    export default{
        data(){
            return{
                on:true,
                photo:'上传参赛者照片',
                work:'上传作品',
                message:true,
                msg:'',
                workname:'',
                workstory:'',
                base1:'',
                base2:''
            }
        },
        components:{
            chart,pop
        },
        methods:{
            pclose(){
                this.on = true
            },
            sure(){
                this.$refs.chart1.getbase1();
                this.$refs.chart2.getbase2();
                var self = this
                setTimeout(function() {
                    console.log(self.$refs.chart1.base1)
                }, 1000);
                console.log(this.$refs.chart1)
                if(this.workname===''){
                    this.message=false
                    this.msg='作品名字不能为空'
                }else{
                    if(this.workstory===''){
                        this.message=false;
                        this.msg='作品故事不能为空'
                    }else{
                        if(this.$refs.chart1.previewsurl===''){
                            this.message=false;
                            this.msg='头像不能为空'
                        }else{
                            if(this.$refs.chart2.previewsurl2===''){
                                this.message=false;
                                this.msg='作品不能为空'
                            }else{
                                console.log('test ok')
                                // this.upinfo();
                            }
                        }
                    }
                }
                this.popoff();
            },
            upinfo(){
                // var tk = sessionStorage.getItem('tk'); 
                // this.$axios.post('http://192.168.1.227:8081/actives/pictureSayAdd',{
                //     params:{
                //         _token:tk,
                //         id:1,
                //         mobile:'',
                //         head_img:'',
                //         works_img:'',
                //         works_name:'',
                //         works_det:''
                //     }
                // }).then((res)=>{
                //     console.log(res)
                // })
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
    .upload {background: #31aaf6;padding-bottom: 10rem;}
    .upload-box {background: url('../public/images/bj2.jpg') no-repeat center center;min-height:120.7rem;background-size: 100%;}
    .load-inner {padding-top: 10rem;}
    .load-con {background: #fff;border-radius:1.5rem;box-shadow:0 1.4rem 6rem rgba(3,15,39,0.14);margin:0 auto;width: 61rem;
    padding:0 3rem 8rem;}
    .title {position: relative;border-bottom: 0.1rem solid #ccc;}
    .title .p1 {height: 8.4rem;line-height: 8.4rem;font-size: 3.6rem;color:#333;}
    .title img{position: absolute;}
    .title .tree1 {width: 20.7rem;left: -3rem;bottom: 0;}
    .title .tree2 {width: 21.1rem;right: -3rem;bottom: 0;}
    .content {margin-top: 7rem;}
    .content .subtance {margin:0 2rem;}
    .content input {width: 97%;border-radius:1.5rem;border:0.1rem solid #ccc;text-indent: 0.5rem;font-size: 2.8rem;line-height: 8rem;
    padding:0 1.5%;}
    .content .work-name {height: 8rem;margin-bottom: 3rem;}
    .content .work-story {height: 25rem;width: 97%;font-size: 2.8rem;border-radius:1.5rem;border:0.1rem solid #ccc;
    padding:1.5%;}
    .file-box {margin:6rem 4rem 0;}
    .sure {height: 8rem;line-height: 8rem;border-radius:1.2rem;background: #31aaf6;font-size: 3.2rem;color:#fff;text-align: center;
    margin: 6rem 3rem 0;;box-shadow:0 0.8rem 3rem rgba(49,170,246,0.5);}
    .photo-tips {width: 59rem;background: #fff;border-radius:1.2rem;position: fixed;left: 50%;top: 50%;margin:-55rem 0 0 -29rem;
    z-index:500;height: 104rem;}
    .photo-tips .title {font-size: 3rem;text-align: center;border-bottom: 0.1rem solid #f5f5f5;line-height: 8rem;}
    .photo-tips .photo-inner {margin:0 4rem;}
    .photo-tips .imgbox {display:flex;justify-content: space-between;height: 16.7rem;}
    .photo-tips .ebox {margin-top: 4rem;}
    .photo-tips .p1 {font-size: 2.6rem;margin-bottom: 3rem;}
    .photo-tips img{width: 23.7rem;}
    .photo-tips .pclose {background: rgb(50,179,246);color:#fff;font-size: 3.6rem;text-align: center;margin-top: 5rem;height: 8rem;
    line-height: 8rem;border-radius: 0 0 1.2rem 1.2rem;}
    .mask {background: rgba(0,0,0,0.5);position: fixed;width: 100%;height: 100%;top: 0;left: 0;}
</style>