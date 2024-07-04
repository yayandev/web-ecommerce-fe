import StarRating from "./StarRating";

const ProductCard = ({ item }) => {
  return (
    <div className="w-full sm:w-64 space-y-1 sm:space-y-2 text-start">
      <a href={`/product/${item.id}`}>
        <img
          src={item.thumbnail}
          className="h-44 object-contain"
          alt={item.title}
        />
      </a>
      <a href={`/product/${item.id}`}>
        <p className="font-semibold text-sm sm:text-xl">
          {item.title.length > 20
            ? item.title.slice(0, 20) + "..."
            : item.title}
        </p>
      </a>
      <p className="text-xs sm:text-sm">{item.category}</p>
      <p className="font-semibold text-red-500 text-sm sm:text-lg">
        ${item.price}
      </p>
      <div className="flex gap-2 items-center text-sm">
        <StarRating rating={item.rating} />
        <span className="text-xs">
          {"("}
          {item?.reviews?.length}
          {")"}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
