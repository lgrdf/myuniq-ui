import Theme from 'vitepress/theme'
import {Button} from '../../../src/button'
import {Tree} from '../../../src/tree'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'

export default {
  ...Theme,
  //扩展应用程序实例
  enhanceApp({app}) {
    //注册组件
    app.component('SButton', Button)
    app.component('DemoBlock',DemoBlock)
    app.component('Demo',Demo)
    app.component('STree', Tree)
  }
}