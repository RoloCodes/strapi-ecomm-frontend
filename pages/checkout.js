import React, { useState } from 'react'
import css from 'styled-jsx/css'
import { useFormik } from 'formik'
import Button from 'components/Button'
import axios from 'axios'
import { TailSpin } from 'react-loader-spinner'
import { useRouter } from 'next/router'

function Checkout({ dburl }) {
  const [status, setStatus] = useState('unsubmitted')
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: async (values) => {
      setStatus('submitting')
      const cart = JSON.parse(localStorage.getItem('cart'))
      const url = `${dburl}/api/orders`
      const data = {
        data: {
          ...values,
          quants: cart,
          products: [...cart.map((item) => item.id)],
        },
      }
      console.log(url)
      console.log(data)
      const res = await axios.post(url, data)
      console.log(res)
      router.push('/ordersubmitted')
    },
  })

  return (
    <>
      <style jsx>{formStyles}</style>
      <div className="container">
        {status == 'unsubmitted' ? (
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="button-wrapper">
              <Button type="submit">Submit Order</Button>
            </div>
          </form>
        ) : (
          <TailSpin color="blue" width="200" height="200" />
        )}
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { dburl: process.env.dburl },
  }
}

const formStyles = css`
  .container {
    display: flex;
    height: 400px;
    justify-content: center;
  }
  form {
    margin: auto;
    flex: 1 1 100%;
    align-self: stretch;
    max-width: 700px;
    padding-bottom: 60px;
  }
  label {
    display: block;
    font-size: 24px;
  }
  input {
    display: block;
    width: 100%;
    font-size: 24px;
    line-height: 32px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    display: block;
    color: #eee;
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 10px 0;
  }
  input:focus {
    color: #2e9ed2;
    border-bottom: 1px solid #2e9ed2;
  }
  .button-wrapper {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  p {
    font-size: 24px;
    padding-top: 30px;
    align-self: stretch;
  }
`

export default Checkout
