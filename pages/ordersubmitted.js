import React, { useEffect } from 'react'

function OrderSubmitted() {
  useEffect(() => {
    localStorage.setItem('cart', '[]')
  }, [])

  return <div>Thank you, your order has been submitted!</div>
}

export default OrderSubmitted
