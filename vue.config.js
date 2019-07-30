module.exports={
    configureWebpack:{
        before(app){
            // app.get('请求地址',(req,res)=>{
            //     res.json({

            //     })
            // })
            let userpoor=[
                {mobile:'18976854321',password:'123456'},
                {mobile:'18966854321',password:'123456'}
            ]
            app.get('/api/register',(req,res)=>{
                const{mobile,password}=req.query
                const mobilelength=userpoor.filter(v=>v.mobile==mobile).length
                if(mobilelength>0)
                {
                    res.json({
                        success:false,
                        messsage:'用户名已存在'
                    })
                }
                else{
                    res.json({
                        success:true,
                        message:'注册成功'
                    })
                }
            })
        }
    }
}