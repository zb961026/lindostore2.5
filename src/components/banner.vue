<template>
    <el-carousel indicator-position="outside" :height="bannerHeight + 'px'">
     <el-carousel-item v-for="(item,index) in bannerData" :key="index">
       <img :src="item.img" class="bannerImg" />
     </el-carousel-item>
   </el-carousel>
</template>

<style>
.el-carousel--horizontal{
  z-index: 0;
}
.el-carousel__container{
    height: 500px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.bannerImg{
    width: 100%;
    height: inherit;
    min-height: 500px;
    min-width: 1400px;
  }
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
<script>
export default {
  data() {
    return {
      bannerData: [
        {
          img:
            "https://openfile.meizu.com/group1/M00/07/32/Cgbj0Fz4yQmAccHRAA1Hjg5HOGA600.jpg",
          title: ""
        },
        {
          img:
            "https://openfile.meizu.com/group1/M00/07/19/Cgbj0Fy_JfeABUi1AApxslpWkjc783.jpg",
          title: ""
        },
        {
          img:
            "https://openfile.meizu.com/group1/M00/07/34/Cgbj0VzBsxKAFoFhAANg_VIkis4629.jpg",
          title: ""
        },
        {
          img:
            "https://openfile.meizu.com/group1/M00/06/FC/Cgbj0VwtxauAVlkCAAYhVG8_xNU996.jpg",
          title: ""
        }
      ],
      imgHeight: "150px",
      // bannerHeight:0,
      screenWidth: 0
    };
  },
mounted () {
  //挂载reisze事件====屏幕缩放监听宽度变化
  const that = this; //捕获当前的this
  window.addEventListener('resize', function() { //Windows监听浏览器窗口大小改变
    that.screenWidth = document.body.clientWidth; //网页可见区域宽
    that.setSize();//设置当前的尺寸
  }, false);
  this.setSize();//设置尺寸
  this.screenWidth = document.body.clientWidth;//获取可见区域宽度
}
,
  methods: {
    setSize: function () {
      this.bannerHeight = 740 / 2560 * this.screenWidth //设置轮播图宽度
      if(this.bannerHeight > 740) this.bannerHeight = 740 
      if(this.bannerHeight < 360) this.bannerHeight = 360
    },
    imgLoad() {
      this.$nextTick(() => { //使用vue.$nextTick()方法可以dom数据更新后延迟执行
        this.imgHeight = this.$refs.imgHeight[0].height;//获取图片的高度为轮播图高度
        console.log(this.$refs.imgHeight[0].height);
      });
    }
  }
};
</script>
