import { shopData } from "./shopData"

enum CART_ACTIONS {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  ADJUST_QUANTITY = "ADJUST_QUANTITY",
  LOAD_CURRENT_ITEM = "LOAD_CURRENT_ITEM",
}

const INITIAL_STATE = {
  products: shopData,
  cart: [],
  currentItem: null,
}

export const ShopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM:
      const item = state.products.find(prod => prod.id === action.payload.id)
      const inCart = state.cart.find(item =>
        item.id === action.payload.id && item.color === action.payload.color
          ? true
          : false
      )
      console.log(state.cart)

      return {
        ...state,
        cart: inCart
          ? [...state.cart]
          : [...state.cart, { ...item, color: action.payload.color }],
      }

    case CART_ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      }
    case CART_ACTIONS.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? {
                ...item,
                qty: +action.payload.qty,
              }
            : item
        ),
      }
    case CART_ACTIONS.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      }
    default:
      return state
  }
}
