import axios from 'axios'
import Button from 'components/Button'
import Image from 'next/image'

const fullRecipe = ({ product, dburl }) => {
  const addQty = () => {
    console.log(product)
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const index = cart.findIndex((item) => item.id == product.id)
    console.log('index: ' + index)

    if (index > -1) {
      cart[index].quantity += 1
    } else {
      cart.push({ id: product.id, quantity: 1 })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart)
  }

  return (
    <>
      <style jsx>{`
        .flex {
          margin-top: 60px;
        }
      `}</style>
      <div className="flex">
        <div className="col-60">
          <Image
            src={`${dburl}${product.attributes.photos.data[0].attributes.url}`}
            alt={product.attributes.name}
            width="400"
            height="400"
          />
        </div>
        <div className="col-40">
          <h1>{product.attributes.name}</h1>
          <p>{product.attributes.description}</p>
          <Button large onClick={addQty}>
            Add To Cart
          </Button>
        </div>
      </div>
    </>
  )
}

export default fullRecipe

export async function getStaticPaths() {
  const response = await axios.get(
    `${process.env.dburl}/api/products?populate=*`
  )

  const products = await response.data.data

  return {
    paths: products.map((product) => ({
      params: {
        id: product.id.toString(),
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const response = await axios.get(
    `${process.env.dburl}/api/products/${params.id}?populate=*`
  )

  const product = await response.data.data

  return {
    props: { product: product, dburl: process.env.dburl },
    revalidate: 1,
  }
}
