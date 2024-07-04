import Carousel from "./Carousel";
import CollectionSidebar from "./CollectionSidebar";

const HomeView = () => {
  return (
    <div className="w-full flex gap-5">
      <div className="w-96 sm:block hidden p-3 border-r space-y-5">
        <CollectionSidebar />
      </div>
      <Carousel />
    </div>
  );
};

export default HomeView;
