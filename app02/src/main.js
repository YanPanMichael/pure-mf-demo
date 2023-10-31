import {render as FooterRender} from './footer'
import {render as ContentRender} from './content'

// const el = document.querySelector('#app02')

// ContentRender(el)
// FooterRender(el)

import('app01/Header').then(({render: HeaderRender}) => {
    const el = document.querySelector('#app02')
    HeaderRender(el)
    ContentRender(el)
    FooterRender(el)
})