'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')
const express=require('express')
const app=express()
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
 const goodsData=require('../static/mock/goodsdata.json')
 const goodlist=goodsData.message
 const goodsItem=require('../static/mock/goodsitem.json')
 const gooditem=goodsItem.message
const apiRoutes=express.Router()
app.use('/api',apiRoutes)
const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay
      ? { warnings: false, errors: true }
      : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll,
    },
    before(app){
      // // app.get('请求地址',(req,res)=>{
      // //     res.json({

      // //     })
      // // })
      // //  let userpoor=[
      // //     {phone:'13360802920',pass:'123456',checkPass:'123456'},
      // //  {phone:'13360802922',pass:'123456',checkPass:'123456'},
      // //    {phone:'13360802925',pass:'123456',checkPass:'123456'},
      // // ]
      //  app.get('/api/register',(req,res)=>{
      //      const{phone,pass,checkPass}=req.query
      //     const phonelength=userpoor.filter(v=>v.phone==phone).length
      //     if(phonelength>0)
      //      {
      //          res.json({
      //              success:false,
      //              messsage:'用户名已存在'
      //          })
      //      }
      //      else{
      //          res.json({
      //              success:true,
      //             message:'注册成功'
      //          })
      //      }
      //  })
      //  let tokenkey='jygshj325'
      //  app.get('/api/login',(req,res)=>{
      //  const{phone,pass}=req.query
      //    const phonelength=userpoor.filter(v=>v.phone==phone).length
      //    const passlength=userpoor.filter(v=>v.pass==pass).length
      //    if(phonelength>0&&passlength>0)
      //    {
      //      res.json({
      //        code:0,
      //        message:'登录成功',
      //        token:tokenkey+'-'+phone+(new Date().getTime()+60*60*1000)

      //      })
      //    }
      //    else{
      //      res.json({
      //        code:1,
      //        message:'账号或密码错误'
      //      })
      //    }
      //  }),
      //  app.get('/api/goodlist',(req,res)=>{
      //    res.json({
      //      errno:0,
      //      data:goodlist
      //    })
      //  }),
      //  app.get('/api/gooditem',(req,res)=>{
      //    res.json({
      //      errno:0,
      //      data:gooditem
      //    })
      //  })
  }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || config.dev.port
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})
