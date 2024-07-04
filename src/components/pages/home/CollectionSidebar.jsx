"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import CollectionSkeleton from "./CollectionSkeleton";

const CollectionSidebar = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.API_URL}/products/categories`)
      .then((result) => result.json())
      .then((res) => {
        setCollections(res);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <CollectionSkeleton />;
  }

  return (
    <div className="flex flex-col gap-5 h-72 overflow-x-auto">
      {collections.map((collection) => (
        <Link
          href={`/product/category/${collection.slug}`}
          key={collection.slug}
          className="font-semibold hover:text-red-500"
        >
          {collection.name}
        </Link>
      ))}
    </div>
  );
};

export default CollectionSidebar;
