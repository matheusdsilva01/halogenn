import Image from "next/image"
import Categorys from "@/components/Categorys"
import Products from "@/components/Products"

const Home = () => {
  return (
    <>
      <Categorys />
      <Products />
      <div className="flex md:hidden">
        <Image
          src="/Linked Path Group.svg"
          className="m-auto"
          width={186}
          height={186}
          alt="Linked Path Group"
        />
      </div>
    </>
  )
}

export default Home
