import Layout from 'components/Layout'
import globalStyles from 'styles/globalStyles'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>
        {globalStyles}
      </style>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
