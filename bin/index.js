#!/usr/bin/env node
var program = require('commander')

program.version(require('../package.json').version)
program
  .command('create <project-name>')
  .description('构建react-cli模板')
  .action( ( name ) => {
    var create = require('./create.js')
    create(name)
  })
program.parse( process.argv )

// 如果没有传参数显示 help
if( !program.args.length ) {
  program.help()
}
