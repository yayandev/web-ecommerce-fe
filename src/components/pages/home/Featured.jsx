const Featured = () => {
  return (
    <div className="w-full space-y-5 border-b py-10">
      <div className="p-3 border-l-8 border-red-500 font-semibold text-red-500">
        Featured
      </div>
      <div className="flex justify-between sm:items-center">
        <div className="flex gap-5 sm:gap-20 flex-col sm:flex-row">
          <h1 className="text-xl sm:text-3xl font-bold">New Arrival</h1>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 py-5 sm:py-10">
        <div className="flex flex-col gap-2 items-center">
          <img
            src="/icon-delivery.png"
            className="w-20 h-20 border-8 border-gray-300 object-contain p-3 bg-black rounded-full"
            alt=""
          />
          <h1 className="text-xl font-bold">FREE AND FAST DELIVERY</h1>
          <p className="text-sm text-center">
            Free delivery for all orders over $140
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img
            src="/icon-handset.png"
            className="w-20 h-20 border-8 border-gray-300 object-contain p-3 bg-black rounded-full"
            alt=""
          />
          <h1 className="text-xl font-bold">24/7 CUSTOMER SERVICE</h1>
          <p className="text-sm text-center">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <img
            src="/icon-secure.png"
            className="w-20 h-20 border-8 border-gray-300 object-contain p-3 bg-black rounded-full"
            alt=""
          />
          <h1 className="text-xl font-bold">MONEY BACK GUARANTEE</h1>
          <p className="text-sm text-center">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
