import { Basket } from '../../patterns'
import { useOxidCheckout } from '../../utils'

export default function BasketPage() {
  const { basket } = useOxidCheckout()
  return (
    <main>
      <Basket basket={basket} />
    </main>
  )
}
