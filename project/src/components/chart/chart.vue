<template>
    <div class="chart">
        <div class="zone">
            <img class="load-icon" src="../../public/images/jia.png" alt="">
            <p class="p1">{{msg}}</p>
        </div>

        <div class="sign" v-if="msg==='上传参赛者照片'">
            <div class="wrapper">
                <vueCropper
                    ref="cropper"
                    :img="option.img"
                    :outputSize="option.size"
                    :outputType="option.outputType"
                    :info="true"
                    :full="option.full"
                    :canMove="option.canMove"
                    :canMoveBox="option.canMoveBox"
                    :fixedBox="option.fixedBox"
                    :original="option.original"
                    @realTime="realTime"
                    :autoCrop="option.autoCrop"
                    :autoCropWidth="option.autoCropWidth"
                    :autoCropHeight="option.autoCropHeight"
                ></vueCropper>
                <label class="btn loadbtn" for="uploads">upload</label>
            </div>
            <div class="test-button hide">
                
                <input type="file" id="uploads" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event, 1)">
                <button @click="startCrop" v-if="!crap" class="btn">start</button>
                <button @click="stopCrop" v-else class="btn">stop</button>
                <button @click="clearCrop" class="btn">clear</button>
                <!--<button @click="refreshCrop" class="btn">refresh</button>-->
                <button @click="changeScale(1)" class="btn">+</button>
                <button @click="changeScale(-1)" class="btn">-</button>
                <!--<button @click="rotateLeft" class="btn">rotateLeft</button>-->
                <!--<button @click="rotateRight" class="btn">rotateRight</button>-->
                <button @click="finish('base64')" class="btn">preview(base64)</button>
                <button @click="finish('blob')" class="btn">preview(blob)</button>
                <a @click="down('base64')" class="btn">download(base64)</a>
                <a @click="down('blob')" class="btn">download(blob)</a>
                <p class="base" @click="getbase()">获取base64</p>
                <div style=" width: 100%;" class="tips hide">
                    <label class="c-item">
                        <span>上传图片是否显示原始宽高 (针对大图 可以铺满)</span>
                        <input type="checkbox" v-model="option.original">
                    </label>
                    <label class="c-item">
                        <span>能否拖动图片</span>
                        <input type="checkbox" v-model="option.canMove">
                    </label>
                    <label class="c-item">
                        <span>能否拖动截图框</span>
                        <input type="checkbox" v-model="option.canMoveBox">
                    </label>
                    <label class="c-item">
                        <span>截图固定大小</span>
                        <input type="checkbox" v-model="option.fixedBox">
                    </label>
                    <label class="c-item">
                        <span>是否输出原图比例的截图</span>
                        <input type="checkbox" v-model="option.full">
                    </label>
                    <p>输出图片格式</p>
                    <label class="c-item">
                        <label>jpg  <input type="radio" name="type" value="jpeg" v-model="option.outputType"></label>
                        <label>png  <input type="radio" name="type" value="png" v-model="option.outputType"></label>
                        <label>webp <input type="radio" name="type" value="webp" v-model="option.outputType"></label>
                    </label>
                </div>
            </div>
            <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
                <div :style="previews.div">
                    <img :src="previewsurl" :style="previews.img">
                </div>
            </div>
            <img v-if="previewsurl!=''" class="closepic" @click="closepic()" src="../../public/images/close.png" alt="">
        </div>

        <div class="sign" v-if="msg==='上传作品'">
            <div class="wrapper">
                <vueCropper
                    ref="cropper2"
                    :img="option2.img"
                    :outputSize="option2.size"
                    :outputType="option2.outputType"
                    :info="true"
                    :full="option2.full"
                    :canMove="option2.canMove"
                    :canMoveBox="option2.canMoveBox"
                    :fixedBox="option2.fixedBox"
                    :original="option2.original"
                    @realTime="realTime2"
                    :autoCrop="option2.autoCrop"
                    :autoCropWidth="option2.autoCropWidth"
                    :autoCropHeight="option2.autoCropHeight"
                ></vueCropper>
                <label class="btn loadbtn" for="uploads2">upload</label>
            </div>
            <input type="file" id="uploads2" style="position:absolute; clip:rect(0 0 0 0);" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg2($event, 1)">
            <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}">
                <div :style="previews.div">
                    <img :src="previewsurl2" :style="previews.img">
                </div>
            </div>
            <img v-if="previewsurl2!=''" class="closepic" @click="closepic2()" src="../../public/images/close.png" alt="">
        </div>
    </div>
</template>

<script>
    import vueCropper from 'vue-cropper'
    export default{
        props:['msg'],
        data(){
            return{
                crap: false,
                previewsurl:'',
                previewsurl2:'',
                previews: {},
                lists: [
                    {
                        img: ''
                    }
                ],
                option: {
                    img: '',
                    // autoCrop: true,
                    // autoCropWidth: 200,
                    // autoCropHeight: 200,
                    fixedBox: true
                },
                option2:{
                    img:'',
                    fixedBox: true
                },
                downImg: '#'
            }
        },
        methods: {
            startCrop () {
                // start
                this.crap = true
                this.$refs.cropper.startCrop()
            },
            stopCrop () {
                //  stop
                this.crap = false
                this.$refs.cropper.stopCrop()
            },
            clearCrop () {
                // clear
                this.$refs.cropper.clearCrop()
            },
            // 实时预览函数
            realTime (data) {
                this.previewsurl = data.url
            },
            finish (type) {
                // 输出
                var test = window.open('about:blank')
                test.document.body.innerHTML = '图片生成中..'
                if (type === 'blob') {
                    this.$refs.cropper.getCropBlob((data) => {
                        var test = window.open('')
                        test.location.href = window.URL.createObjectURL(data)
                    })
                } else {
                    this.$refs.cropper.getCropData((data) => {
                        test.location.href = data
                    })
                }
            },
            down (type) {
                // event.preventDefault()
                var aLink = document.createElement('a')
                aLink.download = 'demo'
                // 输出
                if (type === 'blob') {
                    this.$refs.cropper.getCropBlob((data) => {
                        this.downImg = data
                        aLink.href = data
                        aLink.click()
                    })
                } else {
                    this.$refs.cropper.getCropData((data) => {
                        this.downImg = data
                        aLink.href = data
                        aLink.click()
                    })
                }
            },
            uploadImg (e, num) {
                //上传图片
                // this.option.img
                var file = e.target.files[0]
                if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                    alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
                    return false
                }
                var reader = new FileReader()
                reader.onload = (e) => {
                    let data
                    if (typeof e.target.result === 'object') {
                        // 把Array Buffer转化为blob 如果是base64不需要
                        data = window.URL.createObjectURL(new Blob([e.target.result]))
                    } else {
                        data = e.target.result
                    }
                    if (num === 1) {
                        this.option.img = data
                    } else if (num === 2) {
                        this.example2.img = data
                    }
                }
                // 转化为base64
                // reader.readAsDataURL(file)
                // 转化为blob
                reader.readAsArrayBuffer(file)
            },
            getbase(){
                this.$refs.cropper.getCropData((data) => {
                // do something
                console.log(data)  
                })
            },
            closepic(){
                this.previewsurl='';
                console.log(this.previews)
            },


            // 实时预览函数
            realTime2 (data) {
                this.previewsurl2 = data.url
                console.log(data)
            },
            finish2 (type) {
                // 输出
                var test = window.open('about:blank')
                test.document.body.innerHTML = '图片生成中..'
                if (type === 'blob') {
                    this.$refs.cropper2.getCropBlob((data) => {
                        var test = window.open('')
                        test.location.href = window.URL.createObjectURL(data)
                    })
                } else {
                    this.$refs.cropper2.getCropData((data) => {
                        test.location.href = data
                    })
                }
            },
            down2 (type) {
                // event.preventDefault()
                var aLink = document.createElement('a')
                aLink.download = 'demo'
                // 输出
                if (type === 'blob') {
                    this.$refs.cropper2.getCropBlob((data) => {
                        this.downImg = data
                        aLink.href = data
                        aLink.click()
                    })
                } else {
                    this.$refs.cropper2.getCropData((data) => {
                        this.downImg = data
                        aLink.href = data
                        aLink.click()
                    })
                }
            },
            uploadImg2 (e, num) {
                //上传图片
                // this.option.img
                var file = e.target.files[0]
                if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
                    alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
                    return false
                }
                var reader = new FileReader()
                reader.onload = (e) => {
                    let data
                    if (typeof e.target.result === 'object') {
                        // 把Array Buffer转化为blob 如果是base64不需要
                        data = window.URL.createObjectURL(new Blob([e.target.result]))
                    } else {
                        data = e.target.result
                    }
                    if (num === 1) {
                        this.option2.img = data
                        console.log(data)
                    } else if (num === 2) {
                        this.example2.img = data
                    }
                }
                // 转化为base64
                // reader.readAsDataURL(file)
                // 转化为blob
                reader.readAsArrayBuffer(file)
            },
            getbase2(){
                this.$refs.cropper2.getCropData((data) => {
                // do something
                console.log(data)  
                })
            },
            closepic2(){
                this.previewsurl2='';
                console.log(this.previews)
            }
        },
        components: {
            vueCropper
        }
    }
</script>

<style scoped>
    .chart {position: relative;width: 24rem;height: 24rem;}
    .zone {width: 24rem;height: 24rem;background: #f2f5f7;border-radius:1.2rem;position: absolute;top: 0;left: 0;}
    .zone img{width: 4rem;height: 4rem;text-align: center;display: block;margin:0 auto;padding-top: 7rem;}
    .zone .p1 {font-size: 2.8rem;text-align: center;color:#666;padding-top: 2rem;}

    .wrapper {width: 24rem;height: 24rem;background: #f2f5f7;border-radius:1.2rem;overflow: hidden;}
    .wrapper .vue-cropper {background: none;display: none;} 
    .loadbtn {position: absolute;width: 100%;height: 100%;top: 0;left: 0;display: inline-block;opacity: 0;z-index:500;}
    .closepic {position: absolute;top: 0;right: 0;margin:-2.1rem -2.1rem 0 0;}
    .cropper-box-canvas {opacity: 0;}
    .show-preview {position: absolute;width: 100%;height: 100%;top: 0;left: 0;z-index:5;}
    .btn {font-size: 3.6rem;}
    .tips {font-size: 4rem;}
    .base {font-size: 4rem;}
</style>