<template>
    <div>
      <banner></banner>
        		<div id="main">
			<div class="sku-box store-content">
					<div class="sort-option">
						<ul class="line clear left">
							<li><a href="javascript:;" class="left">手机</a></li>
						</ul>
						<ul class="line clear right">
							<!-- <li v-for="(item,index) in titleData" :key="index"><a href="javascript:;" class="right" :class="{'active':active==index}" :key="index" @click="ToggleColor(item,index)">{{item.title}}</a></li> -->
							<li><a href="javascript:;" class="right" :class="{active:tag=='new'}" @click="toggleSort('new')">新品</a></li>
							<li><a href="javascript:;" class="right" :class="{active:tag=='rec'}" @click="toggleSort('rec')">推荐</a></li>
							<li><a href="javascript:;" class="right" :class="{active:tag=='pri'}" @click="toggleSort('pri')">实惠</a></li>
						</ul>
					</div>
				<div class="gray-box">
					<div class="item-box">
						<!-- 循环获取到的数据，key为指定的索引，通过item传递信息给组件shop-item -->
					<shop-item :key="index" v-for="(item,index) in lists" :item="item"></shop-item>
					</div>
				</div>
			</div>
		</div>
		<prompt></prompt>
		<div id="top">
		<i class="iconfont">&#xe600;</i>
	    </div>
    </div>
</template>

<script>
const banner =()=>import('@/components/banner')
const shopItem =()=>import('@/components/shop-item')
const prompt =()=>import('@/components/prompt')
import axios from "axios";
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
            "https://cimg2.res.meizu.com/care/201711/f98D6FGHI54L3NO20RSzvVWutqabclek.jpg",
          title: ""
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2019/03/06/b299e32c-7eae-4550-b0f1-7533ff7a8a28.jpg",
          title: ""
        },
        {
          img:
            "https://cimg2.res.meizu.com/care/201711/f9CDE84HI1KLM0OzwuStsVWXYZabpdeB.jpg",
          title: ""
        }
      ],
      lists: [],
      deflist: [],
      tag: "new"
    };
  },
  components: {
    shopItem,
    prompt,
    banner,
  },
  mounted() {
    this.getlist();
  },
  methods: {
    getlist() {
      let that = this;
      this.$http.get("http://localhost:3000/api/goodlist").then(res=>{
      this.lists=res
      console.log(this.lists)
      this.deflist=[...this.lists]
      }).catch(err=>{
      })
    },
    toggleSort: function(tag) {
      this.tag = tag;
      switch (tag) {
        case "new":
          this.lists = [...this.deflist];
          break;
        case "rec":
          this.lists.sort((a, b) => b.price - a.price);
          break;
        case "pri":
          this.lists.sort((a, b) => a.price - b.price);
          break;
        default:
          alert("这个参数还没功能");
          break;
      }
    },
  },
  computed: {}
};
</script>
<style>
</style>