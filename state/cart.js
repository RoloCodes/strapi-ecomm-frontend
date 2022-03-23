export const addQty = (productId) => {
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const index = cart.findIndex((item) => item.id == productId)

  if (index > -1) {
    cart[index].quantity += 1
  } else {
    cart.push({ id: product.id, quantity: 1 })
  }

  localStorage.setItem('cart', JSON.stringify(cart))
  console.log(cart)
}

export const removeQty = (productId) => {
  let cart = JSON.parse(localStorage.getItem('cart')) || []
  const index = cart.findIndex((item) => item.id == productId)

  if (index > -1) {
    cart[index].quantity -= 1

    if (cart[index].quantity <= 0) {
      cart = cart.filter((item) => item.id != productId)
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart))
}
