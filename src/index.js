import digi from 'digi'
import refs from 'digi-refs'
import bind from './sections/bind'
import select from './sections/select'
import rgba from './sections/rgba'
import refsSection from './sections/refs'

digi.plugins([ refs ])

digi([
  ...bind,
  'hr',
  ...select,
  'hr',
  ...rgba,
  'hr',
  ...refsSection,
  'hr'
])
