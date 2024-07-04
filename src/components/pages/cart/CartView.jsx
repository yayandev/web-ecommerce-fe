"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const CartView = () => {
  const [qty, setQty] = useState(1);

  const plusQty = () => {
    if (qty < 10) setQty(qty + 1);
  };

  const minusQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  return (
    <div className="w-full space-y-5 p-4">
      <h1 className="text-xl font-bold">Cart</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="text-center">
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
                #
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
                Product
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
                Quantity
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
                Price
              </th>
              <th className="py-2 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm">
                Sub total
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="py-2 px-4 border-b">
                <button>
                  <FaTrash />
                </button>
              </td>
              <td className="py-2 px-4 border-b ">
                <Link
                  href="#"
                  className="flex gap-2 items-center justify-center"
                >
                  <img
                    src="https://picsum.photos/200/300"
                    className="w-10 h-10"
                    alt=""
                  />
                  <span>Product 1</span>
                </Link>
              </td>
              <td className="py-2 px-4 border-b">
                <div className="flex items-center justify-center text-2xl">
                  <button
                    onClick={minusQty}
                    disabled={qty === 1 ? true : false}
                    className="disabled:cursor-not-allowed font-semibold hover:text-red-500"
                  >
                    -
                  </button>
                  <span className="mx-2 font-semibold text-lg">{qty}</span>
                  <button
                    onClick={plusQty}
                    disabled={qty === 10 ? true : false}
                    className="disabled:cursor-not-allowed font-semibold hover:text-red-500"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="py-2 px-4 border-b">$10.00</td>
              <td className="py-2 px-4 border-b">$20.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10 items-start">
        <form action="" className="w-full flex gap-3">
          <input
            type="text"
            placeholder="Coupon code"
            className="flex-1 w-full p-3 border focus:outline-red-500 rounded"
          />
          <Button
            variant="danger"
            className="w-max font-semibold text-xs sm:text-sm"
          >
            Apply Coupon
          </Button>
        </form>
        <div className="w-full space-y-3 p-3 sm:p-5 border rounded">
          <h1 className="text-lg font-semibold">Cart total</h1>
          <div className="pb-2 border-b flex justify-between">
            <span>Subtotal:</span>
            <span className="font-semibold">$20.00</span>
          </div>
          <div className="pb-2 border-b flex justify-between">
            <span>Shipping:</span>
            <span className="font-semibold">FREE</span>
          </div>
          <div className="pb-2 border-b flex justify-between">
            <span>Total:</span>
            <span className="font-semibold">$20.00</span>
          </div>
          <div className="flex justify-center">
            <Button variant="danger" size="large">
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartView;
