import React, { useState } from 'react'
import fetch from 'isomorphic-unfetch'

import { Heading, Button } from '../'
import FormStatus from './FormStatus'
import CheckoutUser from '../CheckoutUser'
import CheckoutPayment from '../CheckoutPayment'
import { useTranslation } from '../../utils'

function Checkout({ user, payments }) {
  const { t } = useTranslation()
  const [sentStatus, setSentStatus] = useState(null)

  const onSubmit = (event) => {
    const formData = new FormData(event.target)
    const body = {}
    formData.forEach((value, key) => (body[key] = value))

    fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 200) {
          setSentStatus('success')
        } else {
          setSentStatus('error')
        }
      })
      .catch(() => setSentStatus('error'))

    event.preventDefault()
    return false
  }

  return (
    <section className="checkout">
      <FormStatus status={sentStatus} />
      <form id="checkout-form" onSubmit={onSubmit}>
        <Heading size="Eos" element="h1">
          Checkout
        </Heading>

        <Heading size="Eos" element="h2">
          Your data
        </Heading>
        <CheckoutUser user={user} />
        <Heading size="Eos" element="h2">
          Choose payment
        </Heading>
        <CheckoutPayment selected="invoice" payments={payments} />
        <Button
          id="cancelButton"
          type="cancel"
          variant="primary"
          icon="envelope"
          iconPosition="left"
        >
          {t('CHECKOUT_FORM_CANCEL_BUTTON')}
        </Button>
        <Button
          id="orderButton"
          type="submit"
          variant="primary"
          icon="envelope"
          iconPosition="left"
        >
          {t('CHECKOUT_FORM_SEND_BUTTON')}
        </Button>
      </form>
    </section>
  )
}

export default Checkout
export { default as checkoutVariants } from './variants.js'
