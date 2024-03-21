import Banner from "@/Components/Banner/Banner";
import Brand from "@/Components/Brand/Brand";
import Category from "@/Components/Category/Category";
import ProductsCard from "@/Components/ProductsCard/ProductsCard";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner/>
      <Category/>
      <ProductsCard/>
      <Brand/>
    </div>
  );
}
