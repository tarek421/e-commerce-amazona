/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const products = ({ product }) => {
    const { slug, image, name, rating, brand, price } = product;
    return (
        <div className='card text-center'>
            <Link href={`/product/${slug}`}>
                <a>
                    <img
                        src={image}
                        alt={slug}
                        className='rounded-md shadow-inner'
                    />
                </a>
            </Link>
            <div className='p-3'>
                <Link href={`/product/${slug}`}>
                    <h2 className='text-lg text-purple-600 cursor-pointer'>{name}</h2>
                </Link>
                <h3>{rating}</h3>
                <h4 className=''>{brand}</h4>
                <h3 className=''>{price}</h3>
                <button className='primary-button'>
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default products;