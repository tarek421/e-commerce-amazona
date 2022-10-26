import Layout from '../components/Layout';
import Products from '../components/Products';
import data from '../utils/data';

export default function Home() {
  return (
    <div>
      <Layout title="Home page">
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {
            data.products.map(product => <Products product={product} key={product.slug} />)
          }
        </div>
      </Layout>
    </div>
  )
}


// const Home = () => {
//   return (
//     <div>
//       Enter
//     </div>
//   );
// }

// export const getStaticProps = async () => {
//   const response = await fetch(data)
//   const datas = await response.json()
//   console.log(datas);

//   return {
//     props: {
//       product: datas,
//     }
//   }
// }

// export default Home;