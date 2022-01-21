import { Checkout, Basket } from '../../patterns'
import { useOxidCheckout } from '../../utils'

export default function CheckoutPage() {
  const { basket } = useOxidCheckout()
  return (
    <main>
      <Basket basket={basket} />
      <Checkout
        user={{ billingAddress: { firstName: 'Tom', lastName: 'Taylor' } }}
        payments={[
          { id: 'invoice', name: 'Invoice' },
          { id: 'paypal', name: 'Paypal' },
        ]}
      />
    </main>
  )
}
