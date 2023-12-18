import Image from "next/image"
import { toBRL } from "@/util/parse"

interface ProductCardProps {
  name: string
  price: number
  score: number
  image: string
}

const ProductCard = ({ image, name, price, score }: ProductCardProps) => {
  return (
    <div className="max-w-[376px] rounded-xl shadow">
      <Image
        src={image}
        alt="cup image"
        width={376}
        height={176}
        className="h-[176px] object-cover"
      />
      <div className="flex px-[18px] pb-4 pt-6">
        <div>
          <p className="text-lg font-medium text-tertiary">{name}</p>
          <span className="text-sm text-[#A1A1A1]">
            Nota: {score.toFixed(1)}
          </span>
        </div>
        <p className="ml-auto text-lg font-medium text-tertiary">
          {toBRL(price)}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
