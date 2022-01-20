import { useEffect } from 'react'
import { Button, FormattedPrice } from '../..'
import { useTranslation } from '../../../utils'

import { useMutation, gql } from '@apollo/client'

const CREATE_BASKET = gql`
  mutation createBasket {
    basketCreate(basket: { title: "test1" }) {
      id
    }
  }
`

export default function Actions() {
  const { t } = useTranslation()

  const [mutateFunction, { data, loading, error }] = useMutation(CREATE_BASKET)

  useEffect(() => {
    mutateFunction()
  }, [])

  console.log('data', data)

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
