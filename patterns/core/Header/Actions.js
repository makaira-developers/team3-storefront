import { Button, FormattedPrice } from '../..'
import { useTranslation, useOxidCheckout } from '../../../utils'

export default function Actions() {
  const { t } = useTranslation()
  const { basket } = useOxidCheckout()

  const amount = basket.items?.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  )

  // const [mutateFunction, { data, loading, error }] = useMutation(CREATE_BASKET)
  /*
  const { loading, error, data, refetch } = useQuery(QUERY_BASKET, {
    variables: { basketId: 'c84df67023ee5c42a67928d8d436b2c8' },
    fetchPolicy: 'network-only ',
  })

  const [
    addToBasket,
    {
      loading: loadingAddToBasket,
      error: errorAddToBasket,
      data: dataAddToBasket,
    },
  ] = useMutation(ADD_TO_BASKET, {
    variables: {
      productId: 'dc5ffdf380e15674b56dd562a7cb6aec',
      basketId: 'c84df67023ee5c42a67928d8d436b2c8',
    },
    onCompleted: () => {
      refetch()
      refetch()
    },
  })
  */
  // {data?.basket?.items?.length}
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
          href="/basket"
          className="header__action"
          iconPosition="left"
        >
          <span className="header__basket-bubble">{amount}</span>

          <FormattedPrice price={basket?.cost?.total} />
        </Button>

        <Button
          variant="icon-only"
          icon="cart"
          href=""
          className="header__action"
          // onClick={() => addToBasket()}
        />
      </div>
    </>
  )
}
