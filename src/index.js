import digi, { createData } from 'digi'

const watchLog = createData({ newVal: '', oldVal: 123 })

const data = createData({ a: 123, select: '', color: { r: 0, g: 0, b: 0, a: 1 } }, { watch: {
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
  { innerText: '选择了：' + data.$tp('select') },
  'hr',
  {
    style: {
      width: '200px',
      height: '100px',
      backgroundColor: `rgba(${ data.$tp('color.r') }, ${ data.$tp('color.g') }, ${ data.$tp('color.b') }, ${ data.$tp('color.a') })`
    }
  },
  {
    innerText: 'r: ',
    child: {
      tagName: 'input',
      type: 'number',
      min: 0,
      max: 255,
      value: data.$tp('color.r'),
      oninput () { data.color.r = this.value }
    }
  },
  {
    innerText: 'g: ',
    child: {
      tagName: 'input',
      type: 'number',
      min: 0,
      max: 255,
      value: data.$tp('color.g'),
      oninput () { data.color.g = this.value }
    }
  },
  {
    innerText: 'b: ',
    child: {
      tagName: 'input',
      type: 'number',
      min: 0,
      max: 255,
      value: data.$tp('color.b'),
      oninput () { data.color.b = this.value }
    }
  },
  {
    innerText: 'a: ',
    child: {
      tagName: 'input',
      type: 'number',
      min: 0,
      max: 1,
      step: 0.01,
      value: data.$tp('color.a'),
      oninput () { data.color.a = this.value }
    }
  }
])
