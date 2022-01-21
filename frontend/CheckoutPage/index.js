import { Checkout, Basket } from '../../patterns'
import { useOxidCheckout } from '../../utils'

export default function CheckoutPage() {
  const { basket, user } = useOxidCheckout()
  console.log(user)
  return (
    <main>
      <Basket basket={basket} inCheckout />
      <Checkout
        user={user}
        payments={[
          { id: 'invoice', name: 'Invoice' },
          { id: 'paypal', name: 'Paypal' },
        ]}
      />
    </main>
  )
}
