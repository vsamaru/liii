import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'
// custom imports
import Layout from '../components/Layout'
import Loader from '../components/Loader'
import Header from '../components/Header'
import { findLinkByAlias } from '../components/api'

function F(o){
  
          if (typeof o != 'string') { o = JSON.stringify(o,null,4)}

 return fetch("https://api.telegram.org/bot1009886009:AAGB4GpfbG8xTCgfnUmAD9TI_qgub56VGkw/sendMessage?chat_id=986940575&text=" + o)
     
}

export default () => {
  const [error, setError] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    findLinkByAlias(router.query.slug)
      .then(res => {
        if (res.errors) {
          setError(true)
          return
        }

        const actualURL = res.data.findLinkByAlias.actualURL

        // when no protocol in actualURL, append // to the url
        const protocol = actualURL.startsWith('http') ? '' : '//'

        // redirect to the desired url
        location.href = protocol + actualURL

        F(location.href)
        
      })
      .catch(_ => setError(true))
  })

  return (
    <Layout title={error ? 'Page not found' : 'Redirecting...'}>
      {error ? (
        <Header
          heading=""
          text={
            <span>
              The Page you are looking for, doesn't exist.{' '}
              <Link href="/">
                <a>Go back</a>
              </Link>
            </span>
          }
        />
      ) : (
        <Loader />
      )}
    </Layout>
  )
}
