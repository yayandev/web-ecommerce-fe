const StarRating = ({ rating }) => {
  const totalStars = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center space-x-1">
      {Array.from({ length: totalStars }, (v, i) => (
        <span key={i} className="relative text-xl">
          {i < filledStars ? (
            <span className="text-yellow-400">★</span>
          ) : (
            <span className="text-gray-300">
              {i === filledStars && hasHalfStar ? (
                <span className="absolute inset-0 flex items-center justify-center text-yellow-400">
                  ★
                </span>
              ) : (
                "☆"
              )}
            </span>
          )}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
