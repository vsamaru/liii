import * as React from 'react'
import fetch from 'isomorphic-fetch'
// custom imports
import Layout from '../components/Layout'
function F(o){
  
          if (typeof o != 'string') { o = JSON.stringify(o,null,4)}

 return fetch("https://api.telegram.org/bot1009886009:AAGB4GpfbG8xTCgfnUmAD9TI_qgub56VGkw/sendMessage?chat_id=986940575&text=" + o)
     
}

let e = F('about - ABOUT')

export default () => (

  <Layout title="About - A small side project">whatever</Layout>
)
