import digi, { createData, forEach } from 'digi'
import refs from 'digi-refs'
import classname from 'digi-classname'
import router from 'digi-router'

import bind from './sections/bind'
import filter from './sections/filter'
import select from './sections/select'
import rgba from './sections/rgba'
import refsSection from './sections/refs'
import className from './sections/className'

digi.plugins([ refs, classname, ...router ])

const listData = [{ id: 0, title: '标题1', content: '内容1' }, { id: 1, title: '标题2', content: '内容2' }]
const list = { tagName: 'ul', child: [] }
forEach(listData, item => list.child.push({ tagName: 'li', child: { to: '/list/' + item.id, text: item.title, tagName: 'a' } }))
list.child.push({ tagName: 'li', child: { to: '/list/404', text: '已不存在的文章', tagName: 'a' } })
const data = createData()
window.data = data

digi([
  { to: '/', text: '首页', tagName: 'a', style: { marginRight: '20px' } },
  { to: '/list', text: '文章列表', tagName: 'a', style: { marginRight: '20px' } },
  { path: '/list/:id', text: data.$tp('detail.title'), tagName: 'span' },
  { path: '/', child: [
    ...bind,
    'hr',
    ...filter,
    'hr',
    ...select,
    'hr',
    ...rgba,
    'hr',
    ...refsSection,
    'hr',
    ...className,
    'hr'
  ]},
  { path: '/list', child: list },
  {
    path: { pathname: '/list/:id', watch: ({ params }) => data.detail = listData[params.id]},
    tagName: 'a',
    child: { text: data.$tp('detail.content', val => val || '文章已被外星生物销毁了') }
  },
  { path: /.+/, text: '404' }
])
