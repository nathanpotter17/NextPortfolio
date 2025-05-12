'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Product, ProductListResponse } from '../../../types/lib';
import { useCart } from '../../../context/CartContext';

export default function Page() {
  const { addToCart } = useCart();
  const [products, setProductsList] = useState<Product[]>([]);
  const [cool, setCool] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hide, setHidden] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch('/api/stripe/list-products', {
        method: 'GET',
      });

      const res: ProductListResponse = await response.json();

      if (!res.products || !Array.isArray(res.products)) {
        console.error('Invalid response format:', res);
        return;
      }

      setProductsList(res.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();

    setTimeout(() => {
      setLoading(false);
    }, 300);

    setTimeout(() => {
      setHidden(false);
    }, 450);
  }, []);

  const addCooldown = (i: number) => {
    setCool(true);
    const el = document.getElementById(`atc${i}`);
    if (el) {
      el.innerText = 'Adding...';
      setTimeout(() => (el.innerText = 'Added!'), 1000);
      setTimeout(() => {
        el.innerText = 'Add to Cart';
        setCool(false);
      }, 3000);
    }
  };

  return (
    <>
      {hide && (
        <div
          className={`min-h-screen bg-black transistion-opacity duration-150 ease-in-out ${loading ? 'opacity-100' : 'opacity-0'}`}
        ></div>
      )}

      <section
        className={`relative min-h-screen flex flex-col mx-auto text-center text-black z-0 transistion-opacity duration-150 ease-in-out ${hide ? 'opacity-0' : 'opacity-100'}`}
      >
        <div className="flex flex-col gap-y-4 md:flex-row mx-auto gap-x-4 text-black pb-12 m-6">
          {products.map((product, i) => (
            <div
              key={i}
              className="h-[500px] min-w-[350px] max-w-[350px] p-6 pt-0 bg-tl border-2 border-gray-500/20 rounded-lg text-td flex flex-col shadow-l"
            >
              <div
                className={
                  'flex justify-center items-center min-h-[215px] mt-[1.2rem]'
                }
              >
                <Image
                  src={
                    product.images[0] !== null &&
                    product.images[0] !== undefined
                      ? product.images[0]
                      : 'home/notavail.svg'
                  }
                  width={242}
                  height={217}
                  alt={product.name}
                  className="mx-auto"
                />
              </div>
              <div className="justify-center items-center my-2">
                <h3 className="text-lg text-center font-medium line-clamp-2">
                  {product.name}
                </h3>
              </div>
              <div className="h-[65px] overflow-hidden">
                <p className="text-center text-sm text-gray-700 leading-snug line-clamp-3">
                  {product.description}
                </p>
              </div>
              <p className="text-center text-gray-600 h-[30px] flex items-center justify-center">
                {`$${product.price}`}
              </p>
              <div className="flex justify-center mt-auto py-[1rem] space-x-2">
                <button
                  id={`atc${i}`}
                  type="button"
                  disabled={cool}
                  className="px-6 py-3 bg-gray-600 text-white text-sm uppercase rounded-md hover:cursor-pointer"
                  onClick={() => {
                    addCooldown(i);
                    addToCart({
                      ...product,
                      subdesc: `1 ${product.name}`,
                      price: product.price,
                      qty: 1,
                    });
                  }}
                >
                  Add to Cart
                </button>
                <Link href={`/products/${product.id}`}>
                  <button
                    type="button"
                    className="px-6 py-3 border border-gray-300 text-gray-700 text-sm uppercase rounded-md hover:cursor-pointer"
                  >
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
