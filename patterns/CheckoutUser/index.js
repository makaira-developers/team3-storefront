import FormField from './../core/ContactForm/FormField'
import FormSelect from './../core/ContactForm/FormSelect'
import FormInput from './../core/ContactForm/FormInput'

import { useTranslation } from '../../utils'

function CheckoutUser() {
  const { t } = useTranslation()

  const genderOptions = [
    {
      value: t('CONTACT_FORM_SALUTATION_MALE'),
      label: t('CONTACT_FORM_SALUTATION_MALE'),
    },
    {
      value: t('CONTACT_FORM_SALUTATION_FEMALE'),
      label: t('CONTACT_FORM_SALUTATION_FEMALE'),
    },
  ]

  return (
    <section className="checkout-user">
      <div className="contact-form__content">
        <FormField
          name="gender"
          value="Mr"
          label={t('CONTACT_FORM_SALUTATION')}
        >
          <FormSelect options={genderOptions}></FormSelect>
        </FormField>
        <FormField name="firstName" label={t('CONTACT_FORM_FIRST_NAME')}>
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField name="lastName" label={t('CONTACT_FORM_SURNAME')}>
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField name="street" label={t('CHECKOUT_FORM_STREET')}>
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField name="streetNumber" label={t('CHECKOUT_FORM_STREET_NUMBER')}>
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField name="zip" label={t('CHECKOUT_FORM_ZIP')}>
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField name="city" label={t('CHECKOUT_FORM_CITY')}>
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField name="state" label={t('CHECKOUT_FORM_STATE')}>
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField name="country" label={t('CHECKOUT_FORM_COUNTRY')}>
          <FormInput type="text"></FormInput>
        </FormField>
      </div>
    </section>
  )
}

export default CheckoutUser
export { default as checkoutUserVariants } from './variants.js'
