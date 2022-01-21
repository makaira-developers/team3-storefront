import { Button, FormattedPrice } from '../..'
import { useTranslation, useOxidCheckout } from '../../../utils'

export default function Actions() {
  const { t } = useTranslation()
  const { basket } = useOxidCheckout()

  const amount = basket?.items?.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  )

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
          href="/basket"
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
      </div>
    </>
  )
}
