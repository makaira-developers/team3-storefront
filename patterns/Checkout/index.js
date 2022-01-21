function Checkout({ user, payment }) {
  return (
    <section className="checkout">
      Checkout for {user.billingAddress.firstName} with Payment {payment.name}
    </section>
  )
}

export default Checkout
export { default as checkoutVariants } from './variants.js'
