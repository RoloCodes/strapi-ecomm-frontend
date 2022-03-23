import React, { useState, useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import Image from 'next/image'
import css from 'styled-jsx/css'
import Button from 'components/Button'
import { addQty, removeQty } from 'state/cart'
import Link from 'next/link'

function Cart({ dburl }) {
  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart(
      cart.map((cartItem) => {
        if (item.id == cartItem.id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        } else {
          return cartItem
        }
      })
    )
    addQty(item.id)
  }

  const removeItem = (item) => {
    setCart(
      cart
        .map((cartItem) => {
          if (item.id == cartItem.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1,
            }
          } else {
            return cartItem
          }
        })
        .filter((cartItem) => {
          console.log(cartItem)
          return cartItem.quantity > 0
        })
    )
    removeQty(item.id)
  }

  useEffect(() => {
    const getData = async () => {
      const data = JSON.parse(localStorage.getItem('cart'))
      if (data.length < 1) {
        return
      }
      const ids = data.map((item) => item.id)
      const query = qs.stringify({
        filters: {
          id: {
            $in: [...ids],
          },
        },
      })
      const url = `${dburl}/api/products?${query}&populate=*`
      const response = await axios.get(url)
      const cart = response.data.data.map((item) => {
        return {
          id: item.id,
          quantity: data.find((element) => element.id == item.id).quantity,
          thumbnail: `${dburl}${item.attributes.photos.data[0].attributes.formats.thumbnail.url}`,
          ...item.attributes,
        }
      })
      setCart(cart)
    }
    getData()
  }, [])

  return (
    <div>
      <style jsx>{style}</style>
      <h1>Shopping Cart</h1>
      {cart.length > 0 ? (
        <div className="products-container">
          <div className="labels">
            <div></div>
            <div>Product</div>
            <div>QTY</div>
            <div>Price</div>
          </div>
          <div className="products">
            {cart.map((item) => (
              <div key={item.id} className="product">
                <div>
                  <Image
                    width="150"
                    height="150"
                    src={item.thumbnail}
                    alt="Product Photo"
                  />
                </div>
                <h5>{item.name}</h5>
                <p>
                  {item.quantity}
                  <Button small onClick={() => addItem(item)}>
                    +
                  </Button>
                  <Button small onClick={() => removeItem(item)}>
                    -
                  </Button>
                </p>
                <p>${item.quantity * item.price}</p>
              </div>
            ))}
          </div>
          <div className="checkout">
            <p>
              Subtotal: $
              {cart.reduce(
                (prev, curr) => prev + curr.quantity * curr.price,
                0
              )}
            </p>
            <Link href="/checkout">
              <a>
                <Button>Checkout</Button>
              </a>
            </Link>
          </div>
        </div>
      ) : (
        <h2>No items in cart</h2>
      )}
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { dburl: process.env.dburl },
  }
}

const style = css`
  .products {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    padding: 40px 0;
  }
  .product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .product > * {
    width: 25%;
    text-align: center;
  }
  .products-container {
  }
  .labels {
    display: flex;
    padding-bottom: 10px;
  }
  .labels > * {
    width: 25%;
    text-align: center;
  }
  .checkout {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
  }
  .checkout p {
    margin-right: 20px;
  }
`

export default Cart
