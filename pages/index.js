import axios from 'axios'
import Card from 'components/Card'
import Hero from 'components/Hero'
import React from 'react'

function Home({ products, hero, dburl }) {
  return (
    <div>
      <main>
        {/* <pre>{JSON.stringify(products, null, 2)}</pre> */}
        <Hero
          heading={hero.heading}
          subHeading={hero.subHeading}
          buttonText={hero.buttonText}
          bgImage={`${dburl}${hero.thumbnail.data.attributes.formats.small.url}`}
        />
        <h3>Featured Products</h3>
        <div className="flex justify-space-evenly flex-wrap">
          {cardGen(products, dburl)}
        </div>
      </main>
    </div>
  )
}

function cardGen(products, dburl) {
  return products.map((product) => {
    const attributes = product.attributes
    const id = product.id
    const photo = attributes.photos.data[0]
    const url = `${dburl}${photo.attributes.url}`
    console.log(id)

    return (
      <Card
        key={id}
        image={url}
        alt={photo.alternativeText}
        title={attributes.name}
        text={attributes.description}
        buttonText="Check it out!"
        buttonLink={`/products/${id}`}
      />
    )
  })
}

export async function getServerSideProps() {
  const productRes = await axios.get(
    `${process.env.dburl}/api/products?populate=*`
  )
  const heroRes = await axios.get(`${process.env.dburl}/api/hero?populate=*`)
  const products = productRes.data.data
  const hero = heroRes.data.data.attributes
  console.log(hero.thumbnail.data.attributes.formats.small.url)
  return {
    props: {
      products: products,
      hero: hero,
      dburl: process.env.dburl,
    },
  }
}

export default Home
