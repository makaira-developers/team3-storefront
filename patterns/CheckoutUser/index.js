import FormField from './FormField'
import FormSelect from './FormSelect'
import FormInput from './FormInput'

import { useTranslation } from '../../utils'

function CheckoutUser({ user }) {
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

  const countryOptions = [
    {
      value: 'a7c40f631fc920687.20179984',
      label: 'Germany',
    },
    {
      value: 'a7c40f6320aeb2ec2.72885259',
      label: 'Austria',
    },
  ]

  return (
    <section className="checkout-user">
      <p>
        Name: {user?.billingAddress?.firstName} {user?.billingAddress?.lastName}
      </p>

      <div className="contact-form__content">
        <FormField
          name="gender"
          value="Mr"
          label={t('CONTACT_FORM_SALUTATION')}
        >
          <FormSelect options={genderOptions}></FormSelect>
        </FormField>
        <FormField
          name="firstName"
          value={user?.billingAddress?.firstName}
          label={t('CONTACT_FORM_FIRST_NAME')}
        >
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField
          name="lastName"
          value={user?.billingAddress?.lastName}
          label={t('CONTACT_FORM_SURNAME')}
        >
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField
          name="street"
          value={user?.billingAddress?.street}
          label={t('CHECKOUT_FORM_STREET')}
        >
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField
          name="streetNumber"
          value={user?.billingAddress?.streetNumber}
          label={t('CHECKOUT_FORM_STREET_NUMBER')}
        >
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField
          name="zip"
          value={user?.billingAddress?.zip}
          label={t('CHECKOUT_FORM_ZIP')}
        >
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField
          name="city"
          value={user?.billingAddress?.city}
          label={t('CHECKOUT_FORM_CITY')}
        >
          <FormInput type="text"></FormInput>
        </FormField>
        <FormField
          name="country"
          value={user?.billingAddress?.country}
          label={t('CHECKOUT_FORM_COUNTRY')}
        >
          <FormSelect options={countryOptions}></FormSelect>
        </FormField>
      </div>
    </section>
  )
}

export default CheckoutUser
export { default as checkoutUserVariants } from './variants.js'
