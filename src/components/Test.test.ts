import Test from './Test'
import { render } from '@testing-library/vue'

test('Test.tsx shoule work', () => {
  //渲染组件
  const { getByText } = render(Test)
  //asser output
  //断言输出结构
  getByText('test:0')
  // expect(true).toBe(true)
})
