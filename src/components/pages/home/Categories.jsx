"use client";

import { useEffect, useState } from "react";

const Categories = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.API_URL}/products/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div className="w-full py-10 space-y-5 border-b">
      <div className="p-3 border-l-8 border-red-500 font-semibold text-red-500">
        Categories
      </div>
      <h1 className="text-xl font-bold sm:text-3xl">Browse By Category</h1>
      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 gap-3">
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
          <div className="w-full h-10 bg-gray-200 animate-pulse"></div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 gap-3">
          {categories.map((category, index) => (
            <a
              href={`/product/category/${category.slug}`}
              key={index}
              className="w-full p-3 rounded border hover:shadow text-center font-semibold"
            >
              {category.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
