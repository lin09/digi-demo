import digi from 'digi'
import refs from 'digi-refs'
import classname from 'digi-classname'

import bind from './sections/bind'
import filter from './sections/filter'
import select from './sections/select'
import rgba from './sections/rgba'
import refsSection from './sections/refs'
import className from './sections/className'

digi.plugins([ refs, classname ])

digi([
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
])
