// Add item to cart 
export const addCart = (product) => {
    return {
        type: "ADDCART",
        payload: product
    }
}
// Add Delete  item from cart 
export const delCart = (product) => {
    return {
        type: "DELETEITEM",
        payload: product
    }
}