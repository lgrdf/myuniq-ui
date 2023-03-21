import { defineComponent, ref, withModifiers } from 'vue'

// 1.函数式组件
// export default () => <div>test</div>

//2.defineComponet
// export default defineComponent({
//   render() {
//     return <div>test</div>
//   }
// })

//3. defineComponent({setuo(){}})
//摒弃this
export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  emits: ['click'],
  setup(props, { slots, emit }) {
    const count = ref(0)

    const inc = () => {
      count.value++
      emit('click')
    }

    const list = ref<string[]>(['a', 'b', 'c'])
    return () => {
      //v-if
      const span = true ? <span>A</span> : <span>B</span>
      return (
        <div onClick={withModifiers(inc, ['self'])}>
          test:{count.value}
          {/* <input type="text" v-focus v-model={count.value} /> */}
          <div>{span}</div>
          {/* v-for */}
          <ul>
            {list.value.map(str => (
              <li key={str}>{str}</li>
            ))}
          </ul>
          {/* 显示默认插槽内容 */}
          <div>{slots.default ? slots.default() : 'default content'}</div>
          <div>{slots.title ? slots.title() : 'titlet content'}</div>
          {/* <Test v-slots={{
            title: () => <h3>abc</h3>
          }}></Test> */}
        </div>
      )
    }
  }
})
