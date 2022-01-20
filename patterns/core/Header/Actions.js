import { useEffect } from 'react'
import { Button, FormattedPrice } from '../..'
import { useTranslation } from '../../../utils'

import { useMutation, gql, useQuery } from '@apollo/client'

const CREATE_BASKET = gql`
  mutation createBasket {
    basketCreate(basket: { title: "test1" }) {
      id
    }
  }
`

const QUERY_BASKET = gql`
  query someBasket($basketId: ID!) {
    basket(basketId: $basketId) {
      id
      owner {
        firstName
      }
      cost {
        total
      }
      items {
        id
      }
    }
  }
`

export default function Actions() {
  const { t } = useTranslation()

  // const [mutateFunction, { data, loading, error }] = useMutation(CREATE_BASKET)

  const { loading, error, data } = useQuery(QUERY_BASKET, {
    variables: { basketId: 'd3e174811a6049ee804a641d0cd429e6' },
  })

  useEffect(() => {
    // mutateFunction()
  }, [])

  console.log(data)

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
          <span className="header__basket-bubble">
            {data?.basket?.items?.length}
          </span>

          <FormattedPrice price={data?.basket?.cost?.total} />
        </Button>
      </div>
    </>
  )
}
