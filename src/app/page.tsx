import Image from "next/image";
import Hero from "./components/Hero";
import FlashSales from "./components/FlashSales"
import Category from "./components/Category";
import SellingProducts from "./components/SellingProducts";
import Music from "./components/Music";
import ExploreProducts from "./components/ExploreProducts";
import NewArrival from "./components/NewArrival";
import FreeDelivery from "./components/FreeDelivery";
export default function Home() {
  return (
    <div>
      <Hero />
      <FlashSales />
      <Category />
      <SellingProducts />
      <Music />
      <ExploreProducts />
      <NewArrival />
      <FreeDelivery />
    </div>
    
  );
}
