const ProductSkeleton = () => {
  return (
    <div className="w-40 sm:w-64 h-64 space-y-1 sm:space-y-2 ">
      <div className="w-full h-40 bg-gray-200 animate-pulse"></div>
      <div className="w-full h-5 bg-gray-200 animate-pulse"></div>
      <div className="w-full h-5 bg-gray-200 animate-pulse"></div>
      <div className="w-full h-5 bg-gray-200 animate-pulse"></div>
    </div>
  );
};

export default ProductSkeleton;
