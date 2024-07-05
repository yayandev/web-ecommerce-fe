"use client";
import StarRating from "@/components/ui/StarRating";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import RelatedProduct from "./RelatedProduct";
import Link from "next/link";

const DetailProductView = ({ product }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  return (
    <div className="w-full space-y-10 py-10">
      <div className="w-full flex flex-col sm:flex-row gap-5">
        <div className="flex-1 w-full">
          <div className="flex gap-3">
            <div className="sm:w-24 w-20  max-h-52 sm:max-h-96 overflow-y-auto flex flex-col gap-3 px-1">
              {product.images.map((image, index) => (
                <button
                  onClick={() => setActiveImage(index)}
                  key={index}
                  className={`bg-gray-100 ${
                    activeImage === index && "border-2 border-gray-500"
                  }`}
                >
                  <img
                    src={image}
                    alt="image"
                    className="w-full h-20 object-contain"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 w-full">
              <img
                src={product.images[activeImage]}
                alt="image"
                className="w-full h-52 sm:h-96 object-contain bg-gray-100"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 w-full space-y-3">
          <h1 className="text-xl sm:text-3xl font-bold">{product.title}</h1>
          <div className="flex gap-2 items-center text-sm text-gray-500">
            <StarRating rating={product.rating} />
            <div>
              {"("}
              <span>{product?.reviews?.length} Reviews</span>
              {")"}
            </div>
            <span>|</span>
            <span className="text-green-500">
              {product?.availabilityStatus}
            </span>
          </div>
          <p className="text-lg sm:text-xl font-semibold">${product.price}</p>
          <p className="text-sm">{product.description}</p>
          <div className="h-1 w-full bg-gray-200"></div>
          <div className="flex gap-2 flex-col sm:flex-row">
            <div className="flex-1">
              <div className="flex gap-2">
                <button
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                  className="py-2 px-3 disabled:cursor-not-allowed disabled:bg-gray-200 rounded-sm border font-semibold text-lg"
                >
                  -
                </button>
                <div className="w-full p-2 border text-center font-semibold">
                  {quantity} / {product.stock}
                </div>
                <button
                  onClick={incrementQuantity}
                  disabled={quantity >= product.stock}
                  className="py-2 px-3 disabled:cursor-not-allowed disabled:opacity-80 rounded-sm text-white bg-red-500 font-semibold text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex-1 flex gap-2">
              <Link
                href={`/order/${product.id}?qty=${quantity}`}
                className="text-center flex-1 py-2 px-3 rounded-sm bg-red-500 text-white font-semibold text-lg"
              >
                Buy Now
              </Link>
              <button className="flex-1 flex justify-center items-center py-2 px-3 rounded-sm border font-semibold text-lg">
                <FaShoppingCart />
              </button>
            </div>
          </div>
          <h3 className="pb-2 border-b-2 border-black w-max text-lg font-semibold">
            Reviews
          </h3>
          {product?.reviews?.length === 0 && (
            <p className="text-sm text-gray-500">No reviews yet</p>
          )}

          {product?.reviews?.map((review, index) => (
            <div className="flex gap-2" key={index}>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">
                    {review.reviewerName}
                  </h3>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text-sm text-gray-500">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RelatedProduct category={product.category} />
    </div>
  );
};

export default DetailProductView;
