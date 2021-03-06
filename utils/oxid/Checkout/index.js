import React, { useContext } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  useMutation,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import {
  QUERY_BASKET,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  CUSTOMER_DETAILS,
} from './querys'

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
function OxidCheckoutProvider(props) {
  return (
    <ApolloProvider client={client}>
      <InnerOxidCheckoutProvider>{props.children}</InnerOxidCheckoutProvider>
    </ApolloProvider>
  )
}

function InnerOxidCheckoutProvider(props) {
  const staticBasketId = 'ae86185a46a1af19d8fc76abda014308'

  const { data: basket, refetch } = useQuery(QUERY_BASKET, {
    variables: { basketId: staticBasketId },
    fetchPolicy: 'network-only ',
  })

  const { data: user } = useQuery(CUSTOMER_DETAILS)

  const [add] = useMutation(ADD_TO_BASKET, {
    /*     variables: {
      productId: 'dc5ffdf380e15674b56dd562a7cb6aec',
      basketId: 'c84df67023ee5c42a67928d8d436b2c8',
    }, */
    onCompleted: () => refetch(),
  })

  const [remove] = useMutation(REMOVE_FROM_BASKET, {
    /*    variables: {
      basketId: 'dc5ffdf380e15674b56dd562a7cb6aec',
      basketItemId: 'c84df67023ee5c42a67928d8d436b2c8',
      amount: 1
    }, */
    onCompleted: () => refetch(),
  })

  return (
    <OxidCheckoutContext.Provider
      value={{
        basket: basket?.basket,
        user: user?.customer,
        addToBasket: (args) =>
          add({ variables: { basketId: staticBasketId, ...args } }),
        removeFromBasket: (args) =>
          remove({ variables: { basketId: staticBasketId, ...args } }),
      }}
    >
      {props.children}
    </OxidCheckoutContext.Provider>
  )
}

function useOxidCheckout() {
  return useContext(OxidCheckoutContext)
}

export default OxidCheckoutContext
export { OxidCheckoutProvider, useOxidCheckout }
