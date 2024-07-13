import { fetchAllProducts } from "@/actions";
import ProductCard from "@/components/product";
import Image from "next/image";

export default async function Home() {
  const getProducts = await fetchAllProducts();
  console.log(getProducts);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Shopping Cart</h1>
      <div className="min-h-[80vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">
        {
          getProducts && getProducts?.data && getProducts.data.length > 0 ? 
          getProducts.data.map((product)=>{
            return <ProductCard product={product}/>
          }) : <div className="text-4xl font-bold">No Products Available</div> 
        }
      </div>
    </main>
  );
}
