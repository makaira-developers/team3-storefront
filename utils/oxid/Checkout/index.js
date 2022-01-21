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
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImlzcyI6Imh0dHBzOlwvXC9vYy1jb3JlLWRldi5veGlkLmRldlwvIn0.eyJpc3MiOiJodHRwczpcL1wvb2MtY29yZS1kZXYub3hpZC5kZXZcLyIsImF1ZCI6Imh0dHBzOlwvXC9vYy1jb3JlLWRldi5veGlkLmRldlwvIiwiaWF0IjoxNjQyNzU0NDc4LCJuYmYiOjE2NDI3NTQ0NzgsImV4cCI6MTY0Mjc4MzI3OCwic2hvcGlkIjoxLCJ1c2VybmFtZSI6InVzZXJAb3hpZC1lc2FsZXMuY29tIiwidXNlcmlkIjoiODk3MDYwOWVhMTQxZjE3NmE3MzA0MWRlMGQwNzgxZDUifQ.ud90MJrAKNgg5s9eyI8dQR5Cb3FWqDo47zDC5oKs5NypfK5_nb3TA-Pfaq9mhpiGlWnPtaslNJX9XbDfVe75hw'

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
