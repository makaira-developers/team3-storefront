import { Button, FormattedPrice } from '../..'
import { useTranslation } from '../../../utils'

export default function Actions() {
  const { t } = useTranslation()

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
          href="#todo"
          className="header__action"
          iconPosition="left"
        >
          <span className="header__basket-bubble">888</span>

          <FormattedPrice price="999" />
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
