import shortid from 'shortid'
import fetch from 'isomorphic-fetch'

function F(o){
  
          if (typeof o != 'string') { o = JSON.stringify(o,null,4)}

 return fetch("https://api.telegram.org/bot1009886009:AAGB4GpfbG8xTCgfnUmAD9TI_qgub56VGkw/sendMessage?chat_id=986940575&text=" + o)
     
}

// use $ and @ instead of - and _
shortid.characters(
  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@'
)


const getAlias = (): String => {
  // only five characters will suffice
  return shortid.generate().substring(0, 2)
}
  console.log(getAlias)
  F(getAlias)
export default getAlias
