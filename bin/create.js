var chalk = require('chalk');
var download = require('download-git-repo');
module.exports = function( projectName ) {
  console.log( chalk.green('开始下载......') )
  download('direct:https://github.com/zhidanwang19910111/react-easy-template.git', projectName, { clone: true }, (err) => {
    if( err ) {
      console.log( chalk.red('下载失败 \n' + err ) )
      // spinner.fail( chalk.red('下载失败 \n' + err ))
      process.exit()
    }
    console.log( chalk.green('项目创建成功') )
  })
}