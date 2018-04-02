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
                            <input class="work-name" type="text" placeholder="输入作品名字，限10字以内">
                            <input class="work-story" type="text" placeholder="输入我的作品故事，限100字以内">
                        </div>
                    </div>
                </div>
            </div>
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
    .upload {background: #31aaf6;padding-bottom: 10rem;}
    .upload-box {background: url('../public/images/bj2.jpg') no-repeat center center;min-height:120.7rem;background-size: 100%;}
    .load-inner {padding-top: 10rem;}
    .load-con {background: #fff;border-radius:1.5rem;box-shadow:0 1.4rem 6rem rgba(3,15,39,0.14);margin:0 auto;width: 61rem;
    padding:0 3rem;}
    .title {position: relative;border-bottom: 0.1rem solid #ccc;;}
    .title .p1 {height: 8.4rem;line-height: 8.4rem;font-size: 3.6rem;color:#333;}
    .title img{position: absolute;}
    .title .tree1 {width: 20.7rem;left: -3rem;bottom: 0;}
    .title .tree2 {width: 21.1rem;right: -3rem;bottom: 0;}
    .content {margin-top: 7rem;}
    .content .subtance {padding:0 3rem;}
    .content input {width: 100%;border-radius:1.5rem;border:0.1rem solid #ccc;text-indent: 0.5rem;font-size: 2.8rem;line-height: 8rem;}
    .content .work-name {height: 8rem;}
    .content .work-story {height: 25rem;}
</style>