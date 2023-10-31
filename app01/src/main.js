import {render as HeaderRender} from './header'
import {render as ContentRender} from './content'

const el = document.querySelector('#app01')

HeaderRender(el)
ContentRender(el)