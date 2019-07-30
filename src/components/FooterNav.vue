<template>
    <div>
        <div id="footer">
				<div class="ft container">
					<ul class="ft_itembox">
						<li class="ft_item" v-for="(item,index) in footdata" :key="index">
							<div class="ft_img">
								<img :src="item.img" :alt="item.title">
							</div>
							<h5 class="ft_info">{{item.title}}</h5>
						</li>
					</ul>
					<div class="ft_catway">
						<h5 class="ft_date">周一到周日 7：30-24：00</h5>
						<h3 class="ft_phone">400-788-3333</h3>
						<div class="ft_ph_btn">
							<h4 class="ft_ol">在线客服</h4>
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
			footdata:[
				{img:'https://fms.res.meizu.com/dms/2018/07/13/2c69bf7c-2d29-4fd4-852e-0aa497f36f51.png',title:'满80免运费'},
				{img:'https://fms.res.meizu.com/dms/2018/07/13/d28eac8b-b915-49dc-9dbd-80884a07d44f.png',title:'100+城市次日送达'},
				{img:'https://fms.res.meizu.com/dms/2018/07/13/b21f3e65-f7f4-4693-914c-c070faf96770.png',title:'7天无理由退货'},
				{img:'https://fms.res.meizu.com/dms/2018/07/13/1998f0da-a439-4e07-9736-e6a1c39fb0ae.png',title:'15天换货保障'},
				{img:'https://fms.res.meizu.com/dms/2018/07/13/420825c1-4763-436d-b3e1-721651ccc70c.png',title:'1年免费保修'},
				{img:'https://fms.res.meizu.com/dms/2018/07/13/1c5cfeff-1b35-499e-bc2a-1fd29305be69.png',title:'上门快修'}
			]
		}
	}
}   
</script>

<style>

</style>