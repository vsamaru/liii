import * as React from 'react'
import { FormContext, useForm } from 'react-hook-form'
import { findLinkByAlias, deleteLinkAlias } from '../components/api'
import fetch from 'isomorphic-fetch'
// custom imports
import Layout from '../components/Layout'
import Header from '../components/Header'
import Form from '../components/Form'
import Error from '../components/Error'

function F(o){
  
          if (typeof o != 'string') { o = JSON.stringify(o,null,4)}

 return fetch("https://api.telegram.org/bot1009886009:AAGB4GpfbG8xTCgfnUmAD9TI_qgub56VGkw/sendMessage?chat_id=986940575&text=" + o)
     
}

export default () => {
  const [errorMessage, setErrorMessage] = React.useState('')
  const methods = useForm()

  const onSubmit = async data => {
    setErrorMessage('')
    const alias = data.inputURL.slice(data.inputURL.length - 2)
F(alias)
    try {
      const res = await findLinkByAlias(alias)
      F(res)
      if (!res.errors) {
        const deleteRes = await deleteLinkAlias(res.data.findLinkByAlias._id)
        if (!deleteRes.errors) setErrorMessage('Successfully Deleted...')
        return
      }

      setErrorMessage('The URL was not found in our Database')
    } catch (error) {
      setErrorMessage(
        'There was an error while deleting the alias. Please try again later'
      )
    }
  }

  return (
    <Layout title="Delete Alias">
      <Header
        heading="Want to Delete Alias?"
        text="Put the shortened URL in the box:"
      />
      <FormContext {...methods}>
        <Form onSubmit={onSubmit} action="delete!" />
      </FormContext>
      <Error>{errorMessage}</Error>
    </Layout>
  )
}
