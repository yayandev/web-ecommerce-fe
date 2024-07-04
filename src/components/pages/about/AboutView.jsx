import TeamSection from "./TeamSection";

/* eslint-disable @next/next/no-img-element */
const AboutView = () => {
  return (
    <div className="w-full py-10 space-y-10">
      <div className="flex  flex-col sm:flex-row gap-3 items-start sm:gap-10">
        <div className="space-y-3 flex-1">
          <h1 className="text-xl sm:text-3xl font-bold">Our Story</h1>
          <p className="text-sm">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.{" "}
          </p>
          <p className="text-sm">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="flex-1">
          <img src="/about-hero.png" className="w-full object-contain" alt="" />
        </div>
      </div>
      <div className="grid my-10 grid-cols-1 sm:grid-cols-4 gap-5 sm:gap-10">
        <div className="w-full hover:bg-red-500 hover:text-white p-3 border flex flex-col gap-2 items-center">
          <img
            src="/icon_shop.png"
            className="w-20 h-20 border-8 border-gray-300 object-contain p-3 bg-black rounded-full"
            alt=""
          />
          <h1 className="text-xl font-bold">10.5K</h1>
          <p className="text-sm text-center">Sallers active our site</p>
        </div>
        <div className="w-full hover:bg-red-500 hover:text-white p-3 border flex flex-col gap-2 items-center">
          <img
            src="/Icon-Sale.png"
            className="w-20 h-20 border-8 border-gray-300 object-contain p-3 bg-black rounded-full"
            alt=""
          />
          <h1 className="text-xl font-bold">33K</h1>
          <p className="text-sm text-center">Mopnthly Product Sale</p>
        </div>
        <div className="w-full hover:bg-red-500 hover:text-white p-3 border flex flex-col gap-2 items-center">
          <img
            src="/icon-Shopping bag.png"
            className="w-20 h-20 border-8 border-gray-300 object-contain p-3 bg-black rounded-full"
            alt=""
          />
          <h1 className="text-xl font-bold">45.5K</h1>
          <p className="text-sm text-center">Customer active in our site</p>
        </div>
        <div className="w-full hover:bg-red-500 hover:text-white p-3 border flex flex-col gap-2 items-center">
          <img
            src="/icon-Moneybag.png"
            className="w-20 h-20 border-8 border-gray-300 object-contain p-3 bg-black rounded-full"
            alt=""
          />
          <h1 className="text-xl font-bold">25K</h1>
          <p className="text-sm text-center">Anoual gross sale in our site</p>
        </div>
      </div>
      <TeamSection />
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

export default AboutView;
