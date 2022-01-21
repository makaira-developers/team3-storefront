const CREATE_BASKET = `
  mutation createBasket {
    basketCreate(basket: { title: "test1" }) {
      id
    }
  }
`

const COST = `cost {
    total
  }`

const QUERY_BASKET = `
  query someBasket($basketId: ID!) {
    basket(basketId: $basketId) {
      id
      owner {
        firstName
      }
      ${COST}
      items {
        id
      }
    }
  }
`

const ADD_TO_BASKET = `
  mutation addItem($productId: ID!, $basketId: ID!) {
    basketAddItem(basketId: $basketId, productId: $productId, amount: 1) {
      cost {
        total
      }
    }
  }
`

export { ADD_TO_BASKET, QUERY_BASKET, CREATE_BASKET }
