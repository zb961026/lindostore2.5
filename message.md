开发进程说明（笔记）


第一天：
0.准备静态页面，并作对应的修改，分析需求文档，确定组件复用性
1.套用前几天写好的静态页面和样式，
2.在components文件夹中创建headerNAV和footerNAV两个公共组件，还有一个公共的购物车组件
3.创建一个router文件夹，写一个router路由文件，导入项目所需要的样式表文件
4.在app.vue文件里面引入headerNAV和footerNAV两个公共组件和一个购物车组件，并注册到页面中，
最后在上方模板引入，确定组件化无bug后提交到github上的cz-shoplist分支，准时下班

第一天：
1.准备五张静态页面，分析需求，决定页面的路由，确定路由视图，
确定那些页面可组件化，确定复用性
2.在对应组件上复制静态页面内容及样式
3.写一个路由文件，写好每个组件的跳转路由
4.安装axios，并且在启动文件中引入axios和vuex状态管理
5.检查路由视图在APP.vue文件中是否引入,点击页面会不会跳转
6.确认无误后提交到github分支上

第二天：
1.通过axios获取虚拟数据，并且渲染到商品列表组件上
2.通过父子组件传值，将获取到的商品列表数据传到子组件商品组件上
3.检查父子传值成功后，通过vue指令将数据渲染到商品组件上
4.再通过父子组件传值，把商品组件上的id传到商品详情上
5.通过axios获取虚拟数据，再通过路由视图传递id跳转到对应的详情
6.给详情页注册点击事件和切换事件，获取颜色图片的id，从而动态渲染出对应的数据，
每点击一次购物车，通过非父子组件传值，把信息传到购物车组件上
7.各种操作确认无误后提交到github分支上

第三天：
1.通过vuex状态管理写购物车的所有方法，并且把购物车得到的信息用vue指令动态渲染出来
2.操作确认无误后提交到github分支上

第四天：
1.检测购物车中有无数据，并且将数据存储到localstrong中，刷新不空白
2.购物车通过非父子传值，将数据传递给订单页组件，并且通过vue指令将信息全部渲染出来
3.在订单页组件中写数量，全选反选的方法，动态计算价格的方法，判断商品是否包邮
4.通过非父子组件传值，将订单页组件获取到数据传到提交订单页中，在提交订单页中写用户收货
信息，并且将信息绑定到用户名上，
5.各种操作确认无误后提交到github分支上

第五天：
1.测试代码对各分辨率，各设备，各浏览器的兼容性
2.确定无误后请求后台接口数据，进行前后端联调
3.联调无误后将分支代码合并到主分支上
4.项目完成
