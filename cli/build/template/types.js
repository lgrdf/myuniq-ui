'use strict'
exports.__esModule = true
// 创建组件类型声明文件
var utils_1 = require('./utils')
function genTypesTemplate(name) {
  // 属性类型声明和属性类型
  var propsTypeName = (0, utils_1.upperFirst)(name) + 'Props'
  var propsName = name + 'Props'
  return "import type { ExtractPropTypes, PropType } from 'vue'\nexport const "
    .concat(propsName, ' = {} as const\n\nexport type ')
    .concat(propsTypeName, ' = ExtractPropTypes<typeof ')
    .concat(propsName, '> //\u62BD\u53D6\u7C7B\u578B  \n')
}
exports['default'] = genTypesTemplate
