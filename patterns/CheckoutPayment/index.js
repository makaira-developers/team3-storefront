import { Heading } from '../'

function CheckoutPayment({ payments }) {
  return (
    <section className="checkout-payment">
      <Heading size="Eos" element="h1">
        Payments
      </Heading>

      <ul role="listbox" className="paymentSelect">
        {payments?.map((option, index) => {
          const { id, name } = option

          return (
            <li
              key={id}
              className="paymentOption"
              onClick={() => console.log({ index, id })}
            >
              {name}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default CheckoutPayment
export { default as checkoutPaymentVariants } from './variants.js'
