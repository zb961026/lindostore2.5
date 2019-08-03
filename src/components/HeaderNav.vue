<template>
    <div>
        	<div id="header">
			<div class="nav-global">
				<div class="container">
					<h1 class="nav-logo">
						<a href="javascript:;"></a>
					</h1>
					<ul class="nav-aside">
						<li class="nav-user">
							<router-link to="./login">个人中心</router-link>
							<!--active-->
							<div class="nav-user-wrapper">
								<div class="nav-user-list">
									<ul>
										<li class="logout" @click="exit"><a href="javascript:;">退出</a></li>
									</ul>
								</div>
							</div>
						</li>
						<!--active-->
						<!-- 引入购物车组件 -->
						<car-panel></car-panel>   
					</ul>
					<ul class="nav-list">
					<a v-for="(item,index) in headdata" :key="index" href="./"><li>{{item.desc}}</li></a>
					<a href="javascript:;" ><li><input type="text" placeholder="魅族16s" class="search">
					<img src="../assets/img/search.png" alt="" class="search_icon">
					</li></a>
				</ul>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import carPanel from "@/components/car-panel"; //导入购物车组件
export default {
  data() {
    return {
      headdata: [
        {
          desc: '手机'
        },
        {
          desc: '手机'
        },
        {
          desc: '手机'
        },
        {
          desc: '手机'
        },
        {
          desc: '手机'
        },
        {
          desc: '手机'
        },
        {
          desc: '手机'
        },
        {
          desc: '手机'
        },
        {
          desc: '手机'
        }
	  ],
    };
  },
  components: {
    carPanel //注册购物车组件到页面中
  },
  methods:{
    exit(){ //退出账号
      this.$store.commit('settoken','') //清空store中的token
      localStorage.removeItem('token') //删除localstorage中的token
    }
  }
};
</script>
<style>
/* #tab_l{
	width: 1080px;
	height: 480px;
} */
#header {
  position: relative;
  z-index: 2;
}
#content {
  width: 100%;
  height: 0;
  position: absolute;
  top: 0px;
  opacity: 0;
  z-index: 1;
  transition: all 0.2s;
  padding: 50px auto;
}
#content .ct-box {
  display: none;
  opacity: 0;
  height: 260px;
  margin-top: 0px;
  background: rgba(255, 255, 255);
}
.nav-global .nav-list .on {
  color: #00c3f5;
  transition: all 0.2s;
}
.product {
  margin: 50px 280px 50px 350px;
}
.pt_item {
  width: 100px;
  height: 100%;
  padding: 50px 10px;
  color: red;
  float: left;
  cursor: pointer;
}
.pt_desc {
  color: #666;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}
.pt_price {
  text-align: center;
  color: #ff6700;
}
.ad_box {
  max-width: 1440px;
  margin: 50px auto;
  padding: 80px 180px 20px 180px;
}
</style>