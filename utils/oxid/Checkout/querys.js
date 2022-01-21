import { gql } from '@apollo/client'

const PRODUCT_QUERYPART = `
    product {
      id
      title
      shortDescription,
      imageGallery{
        icon
      }
      price {
        price
      } 
    }
`

const ITEMS_QUERYPART = `
  items {
    id
    amount
    ${PRODUCT_QUERYPART}
  }
`

const BASKET_COST_QUERYPART = `
  cost {
    total
    currency {
      name
    } 
  }
`

const BASKET_DELIVERY_QUERYPART = `
  deliveryMethod {
    id
    title
  }
`

const BASKET_PAYMENT_QUERYPART = `
  payment{
    id
    title
  }
`

const INVOICEADDRESS_QUERYPART = `
  invoiceAddress {
    salutation
    firstName
    lastName
    street
    streetNumber
    zipCode
    city
    country {
      isoAlpha2
    }
  }
`

const BASKET_CONTENTS_QUERYPART = `
  ${BASKET_COST_QUERYPART}
  ${ITEMS_QUERYPART}
`

const BASKET_EXTENDED_QUERYPART = `
  ${BASKET_DELIVERY_QUERYPART}
  ${BASKET_PAYMENT_QUERYPART}
  ${BASKET_COST_QUERYPART}
  ${ITEMS_QUERYPART}
`

const CREATE_BASKET = gql`
  mutation createBasket($basketTitle: String!) {
    basketCreate(basket: { title: $basketTitle }) {
      id
    }
  }
`

const TEST_FETCH_TOKEN = gql`
  query fetchToken {
    token
  }
`

const QUERY_BASKET = gql`
  query singleBasket($basketId: ID!) {
    basket(basketId: $basketId) {
      id
      ${BASKET_CONTENTS_QUERYPART}
    }
  }
`

const ADD_TO_BASKET = gql`
  mutation addItem($productId: ID!, $basketId: ID!, $amount: Float!) {
    basketAddItem(basketId: $basketId, productId: $productId, amount: $amount) {
      id
      ${BASKET_CONTENTS_QUERYPART}
  }
}
`

const REMOVE_FROM_BASKET = gql`
  mutation basketRemoveItem ($basketId: ID!, $basketItemId: ID!, $amount: Float!) {
    basketRemoveItem (
      basketId: $basketId
      basketItemId: $basketItemId
      amount: $amount
    ) {
      id
      ${BASKET_CONTENTS_QUERYPART}
    }
  }
`

const FETCH_TOKEN = gql`
  query fetchToken($userName: String!, $password: String!) {
    token(username: $userName, password: $password)
  }
`
const PLACE_ORDER = gql`
  mutation placeOrder($basketId: ID!) {
    placeOrder(basketId: $basketId, confirmTermsAndConditions: true) {
      id
      orderNumber
    }
  }
`

const CUSTOMER_DETAILS = gql`
  query customerDetails {
   customer {
      id
      email
      ${INVOICEADDRESS_QUERYPART}
  }
}
`

const SET_DELIVERY_METHOD = gql`
  mutation shippingMethod ($basketId: ID!, $deliveryMethodId: ID!) {
    basketSetDeliveryMethod (
      basketId: $basketId
      deliveryMethodId: $deliveryMethodId
    ) {
      id
      ${BASKET_EXTENDED_QUERYPART}
    }
 }
`

const SET_PAYMENT_METHOD = gql`
  mutation paymentMethod ($basketId: ID!, $paymentId: ID!) {
    basketSetPayment (
      basketId: $basketId
      deliveryMethodId: $deliveryMethodId
    ) {
      id
      ${BASKET_EXTENDED_QUERYPART}
    }
 }
`
export {
  FETCH_TOKEN,
  CUSTOMER_DETAILS,
  CREATE_BASKET,
  ADD_TO_BASKET,
  REMOVE_FROM_BASKET,
  QUERY_BASKET,
  SET_DELIVERY_METHOD,
  SET_PAYMENT_METHOD,
  PLACE_ORDER,
  TEST_FETCH_TOKEN,
}
