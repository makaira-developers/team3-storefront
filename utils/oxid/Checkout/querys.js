
const PRODUCT_QUERYPART = gql`
    product {
      id
      title
      price {
        price
      } 
    }
`

const ITEMS_QUERYPART = gql`
  items {
    id
    amount
    ${PRODUCT_QUERYPART}
  }
`

const BASKET_COST_QUERYPART = gql`
  cost {
    total
    currency {
      name
    } 
  }
`

const BASKET_CONTENT_QUERYPART = gql`
  ${BASKET_COST_QUERYPART}
  ${ITEMS_QUERYPART}
`

const CREATE_BASKET = gql`
  mutation createBasket ($basketTitle: String!) {
    basketCreate(basket: { title: $basketTitle }) {
      id
    }
  }
`

const QUERY_BASKET = gql`
  query singleBasket($basketId: ID!) {
    basket(basketId: $basketId) {
      id
      owner {
        firstName
      }
      ${BASKET_CONTENT_QUERYPART}
    }
  }
`

const ADD_TO_BASKET = gql`
  mutation addItem($productId: ID!, $basketId: ID!, $amount: Float!) {
    basketAddItem(basketId: $basketId, productId: $productId, amount: $amount) {
      id
      ${BASKET_CONTENT_QUERYPART}
  }
`

export { ADD_TO_BASKET, QUERY_BASKET, CREATE_BASKET }
