import { useEffect } from 'react'
import { Button, FormattedPrice } from '../..'
import { useTranslation } from '../../../utils'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  useMutation,
} from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://oc-core-dev.oxid.dev/graphql/',
})

const TOKEN =
  'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImlzcyI6Imh0dHBzOlwvXC9vYy1jb3JlLWRldi5veGlkLmRldlwvIn0.eyJpc3MiOiJodHRwczpcL1wvb2MtY29yZS1kZXYub3hpZC5kZXZcLyIsImF1ZCI6Imh0dHBzOlwvXC9vYy1jb3JlLWRldi5veGlkLmRldlwvIiwiaWF0IjoxNjQyNjg0Mjg1LCJuYmYiOjE2NDI2ODQyODUsImV4cCI6MTY0MjcxMzA4NSwic2hvcGlkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwidXNlcmlkIjoib3hkZWZhdWx0YWRtaW4ifQ.j0uPyTudonjolrVtQgUJQyhFht3Pf6Z3f3qGl1H5Xq3QjLQquFPwmdT4hDIfAYRqynA7aHnAFoK6ARD7kYXWdw'
const CREATE_BASKET = gql`
  mutation createBasket {
    basketCreate(basket: { title: "test1" }) {
      id
    }
  }
`

// TODO: Remove hard-coded implementation
export default function Actions() {
  const { t } = useTranslation()

  const [mutateFunction, { data, loading, error }] = useMutation(CREATE_BASKET)

  useEffect(() => {
    mutateFunction()
  })

  return (
    <>
      <div className="header__actions header__actions--mobile">
        <Button
          variant="icon-only"
          icon="user"
          href="#todo"
          className="header__action"
        />

        <Button
          variant="icon-only"
          icon="cart"
          href="#todo"
          className="header__action"
        />
      </div>

      <div className="header__actions header__actions--desktop">
        <Button
          icon="user"
          href="#todo"
          className="header__action"
          iconPosition="left"
        >
          {t('HEADER_ACCOUNT_AREA')}
        </Button>

        <Button
          icon="cart"
          href="#todo"
          className="header__action"
          iconPosition="left"
        >
          <span className="header__basket-bubble">2</span>

          <FormattedPrice price="259.89" />
        </Button>
      </div>
    </>
  )
}
