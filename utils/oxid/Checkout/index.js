import React, { Component, useContext } from 'react'
import { GlobalDataContext } from '../..'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
const TOKEN =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImlzcyI6Imh0dHBzOlwvXC9vYy1jb3JlLWRldi5veGlkLmRldlwvIn0.eyJpc3MiOiJodHRwczpcL1wvb2MtY29yZS1kZXYub3hpZC5kZXZcLyIsImF1ZCI6Imh0dHBzOlwvXC9vYy1jb3JlLWRldi5veGlkLmRldlwvIiwiaWF0IjoxNjQyNjg0Mjg1LCJuYmYiOjE2NDI2ODQyODUsImV4cCI6MTY0MjcxMzA4NSwic2hvcGlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwidXNlcmlkIjoib3hkZWZhdWx0YWRtaW4ifQ.j0uPyTudonjolrVtQgUJQyhFht3Pf6Z3f3qGl1H5Xq3QjLQquFPwmdT4hDIfAYRqynA7aHnAFoK6ARD7kYXWdw '

const httpLink = createHttpLink({
  uri: process.env.OXID_GRAPHQL_URL,
})
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  //const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: TOKEN,
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
/* First we will make a new context */
const OxidCheckoutContext = React.createContext()

/* Then create a provider Component */
class OxidCheckoutProvider extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <OxidCheckoutContext.Provider value={{}}>
          {this.props.children}
        </OxidCheckoutContext.Provider>
      </ApolloProvider>
    )
  }
}

function useOxidCheckout() {
  return useContext(OxidCheckoutContext)
}

OxidCheckoutProvider.contextType = GlobalDataContext

export default OxidCheckoutContext
export { OxidCheckoutProvider, useOxidCheckout }
