export const ADD_TO_CART = "[PRODUCT] ADD_TO_CART";

export const REMOVE_FROM_CART = "[PRODUCT] REMOVE_FROM_CART";

export function addToCart(Product) {
  return { type: ADD_TO_CART, payload: Product };
}

export function removeFromCart(Product) {
  return { type: REMOVE_FROM_CART, payload: Product };
}
