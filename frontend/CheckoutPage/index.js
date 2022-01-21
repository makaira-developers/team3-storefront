import { Checkout, Basket } from '../../patterns'
import { useOxidCheckout } from '../../utils'

export default function CheckoutPage() {
  const { basket } = useOxidCheckout()
  return (
    <main>
      <Basket basket={basket} />
      <Checkout />
    </main>
  )
}
