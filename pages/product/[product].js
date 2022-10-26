import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import data from '../../utils/data';

const ProductDetails = () => {
    const { query } = useRouter();
    // const { product } = query;
    const product = data.products.find(x => x.slug === query.product);
    if (!product) {
        return <div>Product is Unavailable!</div>
    }
    return (
        <Layout title={product?.name}>
            <div className='grid md:grid-cols-4 md:gap-3'>
                <div className='md:col-span-2'>
                    <Image
                        src={product?.image}
                        alt={product?.name}
                        width={640}
                        height={640}
                        layout="responsive"
                    />

                </div>
                <div>
                    <ul className='space-y-2'>
                        <li>
                            <h1>{product?.name}</h1>
                        </li>
                        <li>
                            <h1><span className='font-bold'>Catagory</span>: {product?.category}</h1>
                        </li>
                        <li>
                            <h1><span className='font-bold'>Brand</span>: {product?.brand}</h1>
                        </li>
                        <li>
                            <h1>{product.rating} of {product.numReviews} reviews</h1>
                        </li>
                        <li>
                            <h1><span className='font-bold'>Description</span>: {product.discription}</h1>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='card p-2 space-y-2'>
                        <div className="flex justify-between px-2">
                            <h2>Price</h2>
                            <h2>${product.price}</h2>
                        </div>
                        <div className="flex justify-between px-2">
                            <h2>Status</h2>
                            <h2>{product.countInStock > 0 ? 'In stock' : 'Unavailable'}</h2>
                        </div>
                        <button className='primary-button w-full'>Add to cart</button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProductDetails;