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
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImlzcyI6Imh0dHBzOi8vYXJiYXRvc2tsdWJhcy5ldS8ifQ.eyJpc3MiOiJodHRwczovL2FyYmF0b3NrbHViYXMuZXUvIiwiYXVkIjoiaHR0cHM6Ly9hcmJhdG9za2x1YmFzLmV1LyIsImlhdCI6MTY0Mjc3MzE1Mi45ODk4MjIsIm5iZiI6MTY0Mjc3MzE1Mi45ODk4MjIsImV4cCI6MTY0MjgwMTk1My4wMDE1MSwic2hvcGlkIjoxLCJ1c2VybmFtZSI6Im1ha2FpcmFAb3hpZC1lc2FsZXMuY29tIiwidXNlcmlkIjoiM2Y4NjU3ZTdmN2Q2YjcwZjMyOTMyMTE4YzllOTQxM2YiLCJ1c2VyYW5vbnltb3VzIjpmYWxzZX0.IuS_NCeV0CH1uhfCc1XgsFK3MWIsaTyI1277Qy0lnIhojyoHGHXBUbDBbk20YtpAoHVrUYwTYWlY_Cj8wvERYA '

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
  const staticBasketId = '7d214c9df71e47f5c08e6a51613f9900'

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
