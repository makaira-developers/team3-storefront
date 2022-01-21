import { Basket } from '../../patterns'
import { useOxidCheckout } from '../../utils'

export default function BasketPage() {
  const { basket, removeFromBasket } = useOxidCheckout()
  return (
    <main>
      <Basket basket={basket} remove={removeFromBasket} />
    </main>
  )
}
