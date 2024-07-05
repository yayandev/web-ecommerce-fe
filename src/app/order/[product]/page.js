import NotFound from "@/app/not-found";
import OrderView from "@/components/pages/order/OrderView";

export const metadata = {
  title: "Order",
};

const getProduct = async (id) => {
  const res = await fetch(`${process.env.API_URL}/products/${id}`);
  const data = await res.json();
  return data;
};

export const OrderPage = async ({ params }) => {
  const { product } = params;

  const data = await getProduct(product);

  if (data.message) {
    return <NotFound />;
  }

  return (
    <>
      <OrderView product={data} />
    </>
  );
};

export default OrderPage;
