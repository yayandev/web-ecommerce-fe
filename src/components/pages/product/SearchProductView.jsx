"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductSkeleton from "../home/ProductSkeleton";
import ProductCard from "@/components/ui/ProductCard";

const SearchProductView = () => {
  const { keyword } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(30);
  const [skip, setSkip] = useState(0);

  const getProductsByCategory = async () => {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${keyword}&limit=${limit}&skip=${skip}`
    );
    const data = await res.json();
    setProducts((prevProducts) => [...prevProducts, ...data?.products]);
    setTotal(data?.total);
    setLoading(false);
    setIsLoadingMore(false);
  };

  useEffect(() => {
    getProductsByCategory();
  }, [skip]);

  useEffect(() => {
    setLoading(true);
    getProductsByCategory();
  }, [keyword]);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setSkip((prevSkip) => prevSkip + limit);
  };

  return (
    <div className="w-full space-y-5 py-10">
      <div className="p-3 border-l-8 border-red-500 font-semibold text-red-500">
        Search Result for : {keyword}
      </div>
      {loading && skip === 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-5">
          {products?.map((item, index) => (
            <ProductCard item={item} key={index} />
          ))}
          {isLoadingMore && (
            <>
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
              <ProductSkeleton />
            </>
          )}
        </div>
      )}
      {total > products.length && !isLoadingMore && !loading && (
        <div className="flex justify-center">
          <button
            onClick={handleLoadMore}
            disabled={isLoadingMore}
            className="hover:opacity-75 sm:py-3 sm:px-5 py-2 px-3 rounded text-white bg-red-500 font-semibold"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchProductView;
