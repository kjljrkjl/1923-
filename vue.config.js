
const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports={
  devServer:{
    proxy:{
      
       '/hehe':{
         target:'https://m.lagou.com', // 请求的目标路径
         changeOrigin:true, //允许改变请求源
         pathRewrite:{
           "^/hehe":''  //路径重新
         }
       },
      
    }
  },
  chainWebpack:(config)=>{
    // 起别名
    config.resolve.alias
    .set('style',resolve('./src/style'))
    .set('pages',resolve('./src/pages'))
    .set('components',resolve('./src/components'))
    .set('utils',resolve('./src/utils'))
    .set('api',resolve('./src/api'))
  }
}
