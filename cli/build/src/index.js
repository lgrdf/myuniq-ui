'use strict'
exports.__esModule = true
var commander_1 = require('commander')
var create_1 = require('../command/create')
// 创建命令对象
var cmd = new commander_1.Command()
//注册命令、参数，以及用户传入之后的回调函数
//$ tsnd ./src/index.ts create
cmd
  .command('create')
  .description('创建一个组件模板或配置文件')
  ///添加命令参数-t | --type,<type>表示为必选参数
  .option('-t --type <type>', '创建类型，可选值:componet, lib-entry')
  //注册回调函数
  .action(create_1.onCreate)
// 执行命令行参数的解析
cmd.parse()
