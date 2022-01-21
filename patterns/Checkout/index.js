import React from 'react'

import { Heading, Button } from '../'
import { useTranslation } from '../../utils'
import { useForm } from 'react-hook-form'

function Checkout({ user }) {
  const { t } = useTranslation()

  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <section className="checkout checkout-user product-detail-information">
      <form id="checkout-form" onSubmit={handleSubmit(onSubmit)}>
        <Heading size="Eos" element="h1">
          Checkout
        </Heading>

        <Heading size="Eos" element="h2">
          Your data
        </Heading>

        <p>
          Name: {user?.invoiceAddress?.firstName}{' '}
          {user?.invoiceAddress?.lastName}
          <br /> <b>TODO</b> - FormField values do not work yet ... ?!
        </p>
        <div className="contact-form__form-field">
          <label className="form-field__label">
            {t('CONTACT_FORM_FIRSTNAME')}
          </label>
          <input
            className="form-field__component field-input"
            defaultValue={user?.invoiceAddress?.firstName}
            {...register('firstName')}
          />
        </div>

        <div className="contact-form__form-field">
          <label className="form-field__label">
            {t('CONTACT_FORM_SURNAME')}
          </label>
          <input
            className="form-field__component field-input"
            defaultValue={user?.invoiceAddress?.lastName}
            {...register('lastName')}
          />
        </div>

        <div className="contact-form__form-field">
          <label className="form-field__label">
            {t('CHECKOUT_FORM_STREET')}
          </label>
          <input
            className="form-field__component field-input"
            defaultValue={user?.invoiceAddress?.street}
            {...register('street')}
          />
        </div>

        <div className="contact-form__form-field">
          <label className="form-field__label">
            {t('CHECKOUT_FORM_STREET_NUMBER')}
          </label>
          <input
            className="form-field__component field-input"
            defaultValue={user?.invoiceAddress?.streetNumber}
            {...register('streetNumber')}
          />
        </div>

        <div className="contact-form__form-field">
          <label className="form-field__label">{t('CHECKOUT_FORM_ZIP')}</label>
          <input
            className="form-field__component field-input"
            defaultValue={user?.invoiceAddress?.zipCode}
            {...register('zip')}
          />
        </div>

        <div className="contact-form__form-field">
          <label className="form-field__label">{t('CHECKOUT_FORM_CITY')}</label>
          <input
            className="form-field__component field-input"
            defaultValue={user?.invoiceAddress?.city}
            {...register('city')}
          />
        </div>

        <div className="contact-form__form-field">
          <label className="form-field__label">
            {t('CHECKOUT_FORM_COUNTRY')}
          </label>
          <input
            className="form-field__component field-input"
            defaultValue={user?.invoiceAddress?.country?.isoAlpha2}
            {...register('country')}
          />
        </div>
        <div className="add-margin">
          <Heading size="Eos" element="h2">
            Choose payment
          </Heading>

          <div>
            <input
              {...register('payment', { required: true })}
              type="radio"
              value="PayPal"
            />
            <label className="form-field__label">PayPal</label>{' '}
          </div>

          <div>
            <input
              {...register('payment', { required: true })}
              type="radio"
              value="Invoice"
            />
            <label className="form-field__label">Invoice</label>{' '}
          </div>
        </div>
        <div className="add-margin">
          <Button
            id="cancelButton"
            type="cancel"
            variant="primary"
            icon="envelope"
            iconPosition="left"
            href="/basket"
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
        </div>
      </form>
    </section>
  )
}

export default Checkout
export { default as checkoutVariants } from './variants.js'
