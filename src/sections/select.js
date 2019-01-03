import { createData } from 'digi'

const data = createData({ select: '' })

export default [
  { tagName: 'h3', innerText: '选择' },
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
]