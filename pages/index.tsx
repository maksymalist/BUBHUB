import { Layout } from '@components/common'
import { Grid, Marquee, Hero } from '@components/ui'
import { ProductCard } from '@components/product'
// import HomeAllProductsGrid from '@components/common/HomeAllProductsGrid'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

import { getConfig } from '@framework/api'
import getAllProducts from '@framework/product/get-all-products'
import getSiteInfo from '@framework/common/get-site-info'
import getAllPages from '@framework/common/get-all-pages'

export async function getStaticProps({
  preview,
  locale,
}: GetStaticPropsContext) {
  const config = getConfig({ locale })

  const { products } = await getAllProducts({
    variables: { first: 12 },
    config,
    preview,
  })

  const { categories, brands } = await getSiteInfo({ config, preview })
  const { pages } = await getAllPages({ config, preview })

  return {
    props: {
      products,
      categories,
      brands,
      pages,
    },
    revalidate: 14400,
  }
}

const MarqueeData = [
  {
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3NzE0ODE4Mzc2NDE=',
    name: '"Maple Leaf" Bucket Hat',
    vendor: 'BUBHUB',
    description: '',
    path: '/maple-leaf-bucket-hat',
    slug: 'maple-leaf-bucket-hat',
    price: { value: 24.99, currencyCode: 'CAD' },
    images: [
      {
        url:
          'https://cdn.shopify.com/s/files/1/0575/4598/2025/products/Untitleddesign_1.png?v=1655049534',
        altText: null,
        width: 1080,
        height: 1080,
      },
    ],
    variants: [],
    options: [],
  },
  {
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3NzE0ODQ3NTM5OTM=',
    name: 'Black meets White',
    vendor: 'BUBHUB',
    description: '',
    path: '/black-meets-white',
    slug: 'black-meets-white',
    price: { value: 26.99, currencyCode: 'CAD' },
    images: [
      {
        url:
          'https://cdn.shopify.com/s/files/1/0575/4598/2025/products/H6b864d7aa66143288195ca24a7da7f62K.jpg?v=1654987336',
        altText: null,
        width: 1919,
        height: 1919,
      },
    ],
    variants: [],
    options: [],
  },
  {
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3NzE1MTA3MzkwMTc=',
    name: 'Akatsuki Pattern',
    vendor: 'BUBHUB',
    description: '',
    path: '/akatsuki-pattern',
    slug: 'akatsuki-pattern',
    price: { value: 22.99, currencyCode: 'CAD' },
    images: [
      {
        url:
          'https://cdn.shopify.com/s/files/1/0575/4598/2025/products/Hbc43769d9edf4bcda7f3a6d5f43b49cfb.jpg?v=1654992547',
        altText: null,
        width: 750,
        height: 750,
      },
    ],
    variants: [],
    options: [],
  },
  {
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3NzE1Mjg0NjY1MDU=',
    name: 'Fruit Basket',
    vendor: 'BUBHUB',
    description: '',
    path: '/fruit-basket',
    slug: 'fruit-basket',
    price: { value: 29.99, currencyCode: 'CAD' },
    images: [
      {
        url:
          'https://cdn.shopify.com/s/files/1/0575/4598/2025/products/Hc3cbe4e5fc3f4984a687802032069dbeJ.jpg_720x720q50.jpg?v=1654996534',
        altText: null,
        width: 720,
        height: 720,
      },
    ],
    variants: [],
    options: [],
  },
]

export default function Home({
  products,
  brands,
  categories,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            imgProps={{
              width: i === 0 ? 1080 : 540,
              height: i === 0 ? 1080 : 540,
            }}
          />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {MarqueeData.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="slim"
            imgProps={{
              width: 320,
              height: 320,
            }}
          />
        ))}
      </Marquee>
      <Hero
        headline="Release Details: The Yeezy BOOST 350 V2 ‘Natural'"
        description="
        The Yeezy BOOST 350 V2 lineup continues to grow. We recently had the
        ‘Carbon’ iteration, and now release details have been locked in for
        this ‘Natural’ joint. Revealed by Yeezy Mafia earlier this year, the
        shoe was originally called ‘Abez’, which translated to ‘Tin’ in
        Hebrew. It’s now undergone a name change, and will be referred to as
        ‘Natural’."
      />
      <Marquee>
        {MarqueeData.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            variant="slim"
            imgProps={{
              width: 320,
              height: 320,
            }}
          />
        ))}
      </Marquee>
      {/* <HomeAllProductsGrid
        newestProducts={products}
        categories={categories}
        brands={brands}
      /> */}
    </>
  )
}

Home.Layout = Layout
