"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const OrderView = ({ product }) => {
  const searchParams = useSearchParams();
  const qty = searchParams.get("qty");
  return (
    <div className="w-full space-y-3 py-10">
      <h1 className="text-xl font-bold sm:text-3xl">Order Product</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <form action="" className="w-full space-y-3">
          <input
            type="text"
            className="w-full bg-gray-100 focus:outline-none rounded p-2"
            placeholder="Name"
          />

          <input
            type="email"
            className="w-full bg-gray-100 focus:outline-none rounded p-2"
            placeholder="Email"
          />

          <input
            type="number"
            className="w-full bg-gray-100 focus:outline-none rounded p-2"
            placeholder="Phone"
          />

          <textarea
            name=""
            id=""
            rows="8"
            className="w-full bg-gray-100 focus:outline-none rounded p-2"
            placeholder="Address"
          ></textarea>
        </form>
        <div className="w-full space-y-3">
          <div className="flex p-3 rounded border justify-between items-center">
            <div className="flex gap-3 items-center">
              <img src={product.thumbnail} className="w-20 h-20" alt="" />
              <h1 className="font-semibold text-lg">{product.title}</h1>
            </div>
            <p className="text-red-500 font-semibold text-lg">
              ${product.price}
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <h3>Subtotal:</h3>
              <p>${product.price}</p>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <h3>Qty:</h3>
              <p>{qty}</p>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <h3>Shipping:</h3>
              <p>Free</p>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <h3>Total:</h3>
              <p>${(product.price * qty).toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <Link
                href={`/product/${product.id}`}
                className=" bg-gray-100 py-2 px-3 rounded font-semibold"
              >
                Cancel
              </Link>
              {qty > product.stock || qty < 1 ? (
                <button
                  disabled={true}
                  className="disabled:cursor-not-allowed bg-gray-100 py-2 px-3 rounded font-semibold"
                >
                  Out of Stock
                </button>
              ) : (
                <button className="bg-red-500 text-white py-2 px-3 rounded font-semibold">
                  Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderView;
