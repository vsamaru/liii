import fetch from 'isomorphic-fetch'

const execQuery = (query, variables) => {
  return fetch('https://graphql.fauna.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${"fnADn_Db5fACAuIxN4ElHl_KcZfmVA6ayTIZrpc9"}`,
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
}

export const findLinkByAlias = async alias => {
  const query = `query findLinkByAlias($alias: String!) {
    findLinkByAlias(alias: $alias) {
      _id
      _ts
      alias
      actualURL
    }
  }`
  const res = await execQuery(query, { alias })
  var Z = await res.json()
//  console.log(onSubmit)
  console.log(Z)
  return Z
}

export const createLinkAlias = async (actualURL, alias) => {
  const query = `mutation createLink($actualURL: String!, $alias: String!) {
  createLink(data: {
    actualURL: $actualURL,
    alias: $alias
  }) {
    _id
    _ts
    alias
    actualURL
  }
}`

  const res = await execQuery(query, { actualURL, alias })
  return await res.json()
}

export const deleteLinkAlias = async id => {
  const query = `mutation deleteLink($id: ID!) {
    deleteLink(id: $id) {
      _id
      _ts
      alias
      actualURL
    }
  }`
  const res = await execQuery(query, { id })
  return await res.json()
}
