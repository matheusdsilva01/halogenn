"use client"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { Product } from "@/types/product"
import ProductCard from "./ProductCard"

const Products = () => {
  function fetchProducts() {
    return axios.get<Product[]>(
      "https://run.mocky.io/v3/d98337a4-5035-4331-baa9-986b0951c4c1",
    )
  }
  const { data: response, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  })

  if (isLoading) {
    return (
      <div className="m-auto max-w-7xl px-6 pb-28 text-center lg:px-0">
        <p>Carregando...</p>
        <Loader2 className="m-auto h-full max-h-[144px] w-full max-w-[144px] animate-spin" />
      </div>
    )
  }

  return (
    <div className="m-auto max-w-7xl px-6 pb-28 lg:px-0">
      <h3 className="mb-16 text-2xl/6 font-bold text-primary">Produtos</h3>
      <section className="flex flex-wrap justify-center gap-x-[90px] gap-y-20">
        {response &&
          response.data.map(product => (
            <ProductCard
              key={product.name}
              image={product.image}
              name={product.name}
              price={product.price}
              score={product.score}
            />
          ))}
      </section>
    </div>
  )
}

export default Products
