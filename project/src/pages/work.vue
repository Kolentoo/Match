<template>
    <div :class="['work',loading?'worksearch':'']">
        <div :class="['search-box',fixed?'searchfix':'']">
            <input type="text" placeholder="输入要搜索的参赛者名字或作品名" class="search" id="search" v-model="words" @keyup.enter="searchwords(words)">
            <label for="search" @tap="searchwords(words)">搜索</label>
        </div>
        <div class="number" v-if="!loading">
            <img class="numberbj vm g10" src="../public/images/bj6.jpg" alt="">
            <div class="number-box">
                <div class="number-con clearfix">
                    <span class="s1 fl">112453</span>
                    <span class="s2 fr">112453</span>
                </div>
            </div>
        </div>
        <Waterfall :gutterWidth="gwidth" :gutterHeight="gheight" :minCol="minCol" :maxCol="maxCol">
            <WaterfallItem :width="waterwidth">
                <div class="waterlist">
                    <img class="vm g10" src="../public/images/pic2.jpg" alt="">
                    <div class="info">
                        <img class="vm g10" src="../public/images/bj7.png" alt="">
                        <div class="infor-con">
                            <p class="p1">NO.1</p>
                            <p class="p2">积分：12345</p>
                            <p class="p3">Ta 的有声故事</p>
                        </div>
                    </div>
                    <div class="author">
                        <p class="p4">哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈</p>
                        <div class="user">
                            <img class="vm userpic" src="../public/images/banner.jpg" alt="">
                            <span class="name">超级测试</span>
                        </div>
                    </div>
                </div>
            </WaterfallItem>
            <WaterfallItem :width="waterwidth">
                <div class="waterlist">
                    <img class="vm g10" src="../public/images/pic1.jpg" alt="">
                    <div class="info">
                        <img class="vm g10" src="../public/images/bj7.png" alt="">
                        <div class="infor-con">
                            <p class="p1">NO.1</p>
                            <p class="p2">积分：12345</p>
                            <p class="p3">Ta 的有声故事</p>
                        </div>
                    </div>
                    <div class="author">
                        <p class="p4">哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈</p>
                        <div class="user">
                            <img class="vm userpic" src="../public/images/banner.jpg" alt="">
                            <span class="name">超级测试</span>
                        </div>
                    </div>
                </div>
            </WaterfallItem>
            <WaterfallItem :width="waterwidth">
                <div class="waterlist">
                    <img class="vm g10" src="../public/images/pic2.jpg" alt="">
                    <div class="info">
                        <img class="vm g10" src="../public/images/bj7.png" alt="">
                        <div class="infor-con">
                            <p class="p1">NO.1</p>
                            <p class="p2">积分：12345</p>
                            <p class="p3">Ta 的有声故事</p>
                        </div>
                    </div>
                    <div class="author">
                        <p class="p4">哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈</p>
                        <div class="user">
                            <img class="vm userpic" src="../public/images/banner.jpg" alt="">
                            <span class="name">超级测试</span>
                        </div>
                    </div>
                </div>
            </WaterfallItem>
            <WaterfallItem :width="waterwidth">
                <div class="waterlist">
                    <img class="vm g10" src="../public/images/pic2.jpg" alt="">
                    <div class="info">
                        <img class="vm g10" src="../public/images/bj7.png" alt="">
                        <div class="infor-con">
                            <p class="p1">NO.1</p>
                            <p class="p2">积分：12345</p>
                            <p class="p3">Ta 的有声故事</p>
                        </div>
                    </div>
                    <div class="author">
                        <p class="p4">哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈</p>
                        <div class="user">
                            <img class="vm userpic" src="../public/images/banner.jpg" alt="">
                            <span class="name">超级测试</span>
                        </div>
                    </div>
                </div>
            </WaterfallItem>

        </Waterfall>
        <menubox :location="position"></menubox>
        <div class="loading" v-if="loading">
            <img class="loadingpic g10 vm" src="../public/images/loading.gif" alt="">
        </div>
    </div>
</template>

<script>
    import {Waterfall, WaterfallItem} from 'vue2-waterfall';
    import menubox from '../components/menubox/menubox'
    export default{
        data(){
            return{
                waterwidth:350,
                gheight:24,
                gwidth:24,
                minCol:2,
                maxCol:2,
                fixed:false,
                position:'work',
                loading:false,
                words:''
            }
        },
        created(){
            let swidth = document.documentElement.clientWidth; 
            let widthgroup = swidth-24*3
            this.waterwidth = widthgroup/2
            let self = this
            window.onscroll = function() { 
                if (window.scrollY >= 300) {
                    self.fixed=true
                } else {
                    self.fixed=false
                }
            } 
        },
        components:{
            Waterfall,WaterfallItem,menubox
        },
        methods:{
            searchwords(words){
                this.words===''
                this.loading=true
            }
        }
    }
</script>

<style scoped>
    .search-box {background: url('../public/images/bj5.png') no-repeat center center;background-size: 100% 100%;
    position: absolute;width: 100%;left: 0;top: 0;z-index:100;}
    .searchfix {position: fixed;width: 100%;left: 0;top: 0;z-index:100;}
    .search-box .search {height: 6rem;background: #fff;border-radius:1rem;width: 76%;font-size: 2.8rem;
    box-shadow:0 0.2rem 1rem rgba(0,142,196,0.29);border:none;margin-left: 3.5%;text-indent: 1em;position: relative;top: -0.2rem;}
    .search-box .search:-webkit-input-placeholder{color:#c3d0d6;}
    .search-box label {font-size: 3.2rem;color:#fff;line-height: 9.8rem;margin:0 3.5% 0 2.5%;}
    .number {position: relative;margin-top: 9.5rem;}
    .number .number-box {position: absolute;width: 100%;top: 0;left: 0;}
    .number .number-con {padding-top: 15.8%;width: 86%;margin:0 auto;}
    .number span{font-size: 4rem;color:#fff;font-weight:bold;text-shadow:0 0.2rem 0.6rem rgba(0,50,118,0.6);
    display: inline-block;width: 40%;text-align: center;}
    .worksearch {padding-top: 14rem;}

    .waterfall {margin:0 24px;padding-bottom: 12rem;transition:all ease 0.5s;}
    .waterlist {border:0.1rem solid #e6e6e6;border-radius:1rem;overflow: hidden;}
    .waterfall-item .info {position: relative;height: 12.9rem;overflow: hidden;}
    .waterfall-item .info img{height: 12.9rem;}
    .waterfall-item .infor-con {position: absolute;top: 0;left: 0;width: 100%;text-align: center;color:#9c4c12;}

    .infor-con .p1 {font-size: 2.8rem;line-height: 3rem;padding-top: 1rem;}
    .infor-con .p2 {font-size: 2.4rem;margin-bottom: 1.5rem;}
    .infor-con .p3 {font-size: 2.4rem;}
    .author {background: #fff;padding: 2.5rem;}
    .author .p4 {font-size: 2.8rem;color:#333;max-height:7.2rem;overflow: hidden;line-height: 3.5rem;margin-bottom: 0.5rem;}
    .author .userpic {width: 3.2rem;height: 3.2rem;border-radius:50%;}
    .author .name {font-size: 2.4rem;color:#999;margin-left: 1rem;position: relative;top: 0.6rem;}
    .loading {position: fixed;width: 180px;height: 180px;left: 50%;top: 50%;margin:-90px 0 0 -90px;z-index:600;}

</style>