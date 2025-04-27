'use client';

import { Suspense, useEffect, useState } from 'react';
import { useCart } from '../../../context/CartContext';
import { useRouter } from 'next/router';
import { Check } from 'lucide-react';
import ContactForm from '../../../components/forms/resend/sendEmail';
import Image from 'next/image';

interface Product {
  id: string;
  object: string;
  active: boolean;
  created: number;
  default_price: string | null;
  description: string | null;
  images: string[];
  marketing_features: any[];
  livemode: boolean;
  metadata: Record<string, string>;
  name: string;
  package_dimensions: any | null;
  price: string;
  shippable: boolean | null;
  statement_descriptor: string | null;
  tax_code: string | null;
  unit_label: string | null;
  updated: number;
  url: string | null;
  subdesc?: string;
}

interface CartProduct {
  price: string;
  qty: number;
}

export default function ProductPage() {
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [price, setPrice] = useState<string>('$0.00');
  const [subdesc, setSubDesc] = useState('');
  const [cool, setCool] = useState<boolean>(false);
  const [prc, setPrc] = useState<CartProduct>({
    price: '',
    qty: 1,
  });
  const { addToCart } = useCart();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/stripe/product/${id}`);
        const data: Product = await response.json();

        if (!data || !data.id) {
          throw new Error('Product not found');
        }

        console.log('Fetched product:', data);

        if (data.price) {
          const formattedPrice = `$${parseFloat(data.price)
            .toFixed(2)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
          setPrice(formattedPrice);
          setPrc({
            price: formattedPrice,
            qty: 1,
          });
        }

        setProduct(data);
        setSubDesc(`1 ${data.name}`);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    try {
      fetchProduct();
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const addCooldown = () => {
    setCool(true);
    const el = document.getElementById('atc');
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
    <section className="min-h-screen flex flex-col items-center lg:mt-[100px] p-4">
      <div className="max-w-3xl w-full bg-white overflow-hidden">
        <div className="flex flex-col md:flex-row w-full">
          <div className="md:w-1/2 p-8 flex flex-col items-center">
            <Suspense fallback={<div>Loading image...</div>}>
              <Image
                id="product-image"
                src={product.images[0] || '/notavail.svg'}
                alt={product.name}
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </Suspense>
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
            <span className="flex items-center w-[7.2rem] p-2 bg-gray-200 text-gray-700 px-3 py-1 rounded mt-2">
              Availability
              <Check
                color="white"
                fill="#06aa00"
                size={16}
                className="bg-[#06aa00] rounded-full p-[2px] flex-shrink-0 ml-2"
              />
            </span>

            <p className="text-sm mt-4">{product?.description}</p>
            <div className="mt-4">
              <span
                id="price"
                className="text-3xl font-bold text-gray-600 mb-4"
              >
                {price}
              </span>
              <br></br>
              <span className="text-md text-gray-500">
                {subdesc || 'Select below'}
              </span>
            </div>
            <label className="block text-gray-700 text-sm font-semibold mt-4">
              Quantity
            </label>
            <p className="text-sm text-black">
              You can adjust the quantity for the current order size selected
              below on the Cart page.
            </p>
            <select
              className="mt-1 block w-full p-2 border rounded-lg"
              disabled={cool}
              value={prc.qty}
              onChange={(e) => {
                const num = parseInt(e.target.value);

                console.log('Selected quantity:', num);

                const el = document.getElementById('price');

                const cp = parseFloat(product.price);

                let res = '';
                if (el) {
                  res = `$${(cp * num)
                    .toFixed(2)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
                  setPrc({
                    price: res,
                    qty: num,
                  });

                  el.innerText = `${res}`;
                } else {
                  res = '$0';
                }
              }}
            >
              <option id="opt" value={'1'}>
                {prc.qty || 1}
              </option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={1 + i}>
                  {1 + i}
                </option>
              ))}
            </select>

            <div className="mt-4 flex space-x-4">
              <button
                id="atc"
                disabled={cool}
                onClick={() => {
                  addCooldown();
                  addToCart({
                    ...product,
                    price: prc.price,
                    qty: prc.qty,
                  });
                }}
                className="bg-gray-600 text-white px-6 py-2 rounded-lg w-full mt-2 cursor-pointer"
              >
                Add to Cart
              </button>
              <button
                disabled={cool}
                onClick={() => {
                  addToCart({
                    ...product,
                    price: prc.price,
                    qty: prc.qty,
                  });
                  router.push('/cart');
                }}
                className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg w-full mt-2 cursor-pointer"
              >
                Checkout Now
              </button>
            </div>

            <p className="mt-4 text-gray-700 text-sm mb-2">
              Have your requests? Ready for a bigger order?
            </p>
            <ContactForm
              classes="bg-gray-500/30 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-500/50 transition duration-300"
              buttonText="Contact Us"
            />
            <p className="text-xs text-gray-600 pt-2">
              SKU: {product.id.substring(5)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
