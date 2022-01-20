const CREATE_BASKET = gql`
  mutation createBasket {
    basketCreate(basket: { title: "test1" }) {
      id
    }
  }
`

const QUERY_BASKET = gql`
  query someBasket($basketId: ID!) {
    basket(basketId: $basketId) {
      id
      owner {
        firstName
      }
      cost {
        total
      }
      items {
        id
      }
    }
  }
`

const ADD_TO_BASKET = gql`
  mutation addItem($productId: ID!, $basketId: ID!) {
    basketAddItem(basketId: $basketId, productId: $productId, amount: 1) {
      cost {
        total
      }
    }
  }
`

export { ADD_TO_BASKET, QUERY_BASKET, CREATE_BASKET }
