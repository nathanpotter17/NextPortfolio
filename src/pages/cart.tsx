'use client';

import { useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useRouter } from 'next/router';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isHydrated, setIsHydrated] = useState(false);
  const [prod, setProd] = useState<string[]>([]);
  const [subtotal, setSubtotal] = useState('');
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    const p: string[] = [];
    let sub: number = 0;
    if (cart.length > 0) {
      for (let i = 0; i < cart.length; i++) {
        const item = cart[i];

        if (item.qty !== undefined) {
          const price = item.price.replace(/[^\d.]/g, '');
          const parsed = parseFloat(price);
          if (item) {
            sub += parsed * item.qty;

            p.push(
              `${item.name}>${item.subdesc}>${item.id}>${item.qty}>${
                parsed * item.qty
              }`
            );
          }
        }
      }
    }

    setProd(p);
    setSubtotal(sub.toFixed(2));
  }, [cart]);

  const triggerCheckout = async () => {
    try {
      if (prod.length === 0) {
        console.log('Cart is empty, cannot proceed to checkout.');
        return;
      }

      const req = await fetch('/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cart: prod,
        }),
      });

      const res = await req.json();

      if (res.url) {
        const checkoutUrl = res.url as string;
        setTimeout(() => {}, 2000);
        router.push(checkoutUrl);
      } else {
        console.log('Error getting 200');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center mt-[100px] p-4">
      <h2 className="text-3xl font-semibold mb-6">Shopping Cart</h2>
      {isHydrated ? (
        <>
          {cart.length === 0 ? (
            <p className="text-lg text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              <div className="w-full max-w-3xl bg-white p-6 rounded-lg shadow-xl">
                <ul className="divide-y divide-gray-300">
                  {cart.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center p-4"
                    >
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-lg font-medium">{item.name}</p>
                          <br></br>
                          <p className="text-gray-600">{item.subdesc}</p>
                          <p className="text-gray-600 mt-2">
                            Order Size: {item.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          inputMode="numeric"
                          value={item.qty}
                          min={1}
                          max={10}
                          onChange={(e) => {
                            const num = parseInt(e.target.value);

                            const safeNum = Math.max(1, Math.min(num, 10));
                            updateQuantity(item.id, item.name, safeNum);
                          }}
                          className="w-16 px-2 text-black py-1 border rounded-md text-center"
                        />

                        <button
                          onClick={() =>
                            removeFromCart(item.id, item.name, item.qty)
                          }
                          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                {subtotal && cart.length >= 1 && (
                  <div className="relative w-full flex justify-end items-center">
                    <p className="text-lg text-gray-500 mr-2">Subtotal:</p>
                    <p className="text-lg text-black">${subtotal}</p>
                  </div>
                )}
                <div className="flex justify-between mt-6">
                  <button
                    onClick={clearCart}
                    className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
                  >
                    Clear Cart
                  </button>

                  <button
                    onClick={() => {
                      triggerCheckout();
                    }}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-6 h-6 border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-blue-500"></div>
          <div>Loading your cart...</div>
        </div>
      )}
    </div>
  );
}
