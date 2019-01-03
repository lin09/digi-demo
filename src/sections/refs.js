import refs, { allotId } from 'digi-refs'

const textRefId = allotId()

export default [
  { tagName: 'h3', innerText: 'ref标记指向' },
  {
    tagName: 'input',
    oninput () {
      refs[textRefId].innerText = '输入内容：' + this.value
    }
  },
  {
    ref: textRefId,
    innerText: '输入内容：'
  }
]