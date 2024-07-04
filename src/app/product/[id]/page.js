import NotFound from "@/app/not-found";
import DetailProductView from "@/components/pages/product/DetailProductView";

const getProduct = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
};

const DetailProductPage = async ({ params }) => {
  const product = await getProduct(params.id);

  if (product.message) {
    return <NotFound />;
  }

  return <DetailProductView product={product} />;
};

export default DetailProductPage;
