// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
module.exports= {
  chainWebpack(config) {
    config.module.rules.delete('svg');//删除已有的svg规则
    config.module.rule('svg').exclude.add(resolve('src/assets/icons')).end();
    config.module
      .rule('icons') //定义一个名叫icons的规则
      .test(/\.svg$/) //设置icons的匹配规则
      .include.add(resolve('src/assets/icons')) //设置当前规则的目录，只是在当前目录下执行当前规则
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader') //该配置使用svg-sprite-loder作为处理loder
      .options({
        //该loder的配置
        symbolId: 'icon-[name]',
      }).end();
    }

}
