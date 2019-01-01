import digi, { createData } from 'digi'

const watchLog = createData({ newVal: '', oldVal: 123 })

const data = createData({ a: 123, select: '' }, { watch: {
  a: (newVal, oldVal) => {
    watchLog.newVal = newVal
    watchLog.oldVal = oldVal
  }
}})

digi([
  { innerText: data.$tp('a') },
  {
    innerText: '单向绑定：',
    child: {
      tagName: 'input',
      value: data.a,
      oninput () {
        data.a = this.value
      }
    }
  },
  {
    innerText: '双向绑定：',
    child: {
      tagName: 'input',
      value: data.$tp('a'),
      oninput () {
        data.a = this.value
      }
    },
  },
  { innerText: `新值：${ watchLog.$tp('newVal')}，旧值：${ watchLog.$tp('oldVal')}`},
  {
    child: [
      {
        tagName: 'button',
        innerText: '添加显示',
        onclick () {
          digi({
            innerText: '点击删除：' + data.$tp('a'),
            onclick (e) {
              e.stopPropagation()
              this.remove()
            }
          }, this.parentNode)
        }
      },
    ]
  },
  'hr',
  {
    tagName: 'select',
    onchange () { data.select = this.value },
    child: [
      { tagName: 'option', value: '', innerText: '选择' },
      { tagName: 'option', value: 1, innerText: '选择1' },
      { tagName: 'option', value: 2, innerText: '选择2' }
    ]
  },
  { innerText: '选择了：' + data.$tp('select') }
])
