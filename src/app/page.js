import BestProduct from "@/components/pages/home/BestProduct";
import Categories from "@/components/pages/home/Categories";
import Featured from "@/components/pages/home/Featured";
import FlashSale from "@/components/pages/home/FlashSale";
import HomeView from "@/components/pages/home/HomeView";

export default function Home() {
  return (
    <>
      <HomeView />
      <FlashSale />
      <Categories />
      <BestProduct />
      <Featured />
    </>
  );
}
