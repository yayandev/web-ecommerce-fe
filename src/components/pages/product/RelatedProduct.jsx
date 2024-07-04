"use client";

import { useEffect, useState } from "react";
import ProductSkeleton from "../home/ProductSkeleton";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

const RelatedProduct = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/category/${category}?limit=5`
    );
    const data = await res.json();
    setProducts(data.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-full space-y-5">
      <div className="p-3 border-l-8 border-red-500 font-semibold text-red-500">
        Related Products
      </div>
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
          {products.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
        </div>
      )}
      {products.length === 5 && (
        <div className="flex justify-center">
          <Link
            href={`/product/category/${category}`}
            className="text-white px-5 py-3 font-semibold rounded bg-red-500"
          >
            View All
          </Link>
        </div>
      )}
    </div>
  );
};

export default RelatedProduct;
