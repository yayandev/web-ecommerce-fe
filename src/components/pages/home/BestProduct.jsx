"use client";
import React, { useEffect, useState } from "react";
import ProductSkeleton from "./ProductSkeleton";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

const BestProduct = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.API_URL}/products?limit=10`)
      .then((result) => {
        result.json().then((res) => {
          setProducts(res.products);
        });
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="w-full space-y-5 border-b py-10">
      <div className="p-3 border-l-8 border-red-500 font-semibold text-red-500">
        This Month
      </div>
      <div className="flex justify-between sm:items-center">
        <div className="flex gap-5 sm:gap-20 flex-col sm:flex-row">
          <h1 className="text-xl sm:text-3xl font-bold">
            Best Selling Produtcs
          </h1>
        </div>
        <div className="flex gap-3">
          <Link
            href="/product"
            className="hover:opacity-75 sm:py-3 sm:px-5 py-2 px-3 rounded text-white bg-red-500 font-semibold"
          >
            View All
          </Link>
        </div>
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
    </div>
  );
};

export default BestProduct;
