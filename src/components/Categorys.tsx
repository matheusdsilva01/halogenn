import Image from "next/image"

const Categorys = () => {
  return (
    <div className="relative mb-16 flex w-full px-3.5 pt-8 lg:-mt-[309px] lg:mb-28">
      <section className="w-full flex-col lg:m-auto lg:flex lg:w-auto lg:flex-row">
        <div className="flex w-full max-w-none flex-col bg-[#F9F0EE] px-9 py-5 text-primary lg:h-[509px] lg:max-w-[434px] lg:px-[71px] lg:pb-16 lg:pt-24">
          <p className="hidden text-[18px] font-bold lg:block">PRODUTOS</p>
          <div className="mt-auto flex lg:block">
            <Image src="/science.svg" width={32} height={32} alt="science" />
            <p className="my-auto ml-5 max-w-[129px] text-lg/5 lg:ml-0 lg:max-w-none lg:text-3xl">
              Vidrarias e Equipamentos
            </p>
            <Image
              src="grid-square.svg"
              alt="grid-square icon"
              width={100}
              height={69}
              className="ml-auto lg:hidden"
            />
          </div>
        </div>
        <div className="flex w-full max-w-none flex-col bg-tertiary px-9 py-5 text-white lg:h-[541px] lg:max-w-[434px] lg:px-[71px] lg:pb-16 lg:pt-24">
          <p className="hidden text-[18px] font-bold lg:block">QUÍMICOS</p>
          <div className="mt-auto flex lg:block">
            <Image src="/bottle.svg" width={34} height={40} alt="bottle" />
            <p className="my-auto ml-5 max-w-[129px] text-lg/5 lg:ml-0 lg:max-w-none lg:text-3xl lg:font-medium">
              Materiais Químicos
            </p>
            <Image
              src="grid-square.svg"
              alt="grid-square icon"
              width={100}
              height={69}
              className="ml-auto lg:hidden"
            />
          </div>
        </div>
        <div className="flex w-full max-w-none flex-col bg-[#F9F0EE] px-9 py-5 text-primary lg:h-[509px] lg:max-w-[434px] lg:px-[71px] lg:pb-16 lg:pt-24">
          <p className="hidden text-[18px] font-bold lg:block">LABORATÓRIOS</p>
          <div className="mt-auto flex lg:block">
            <Image src="tools.svg" alt="tools icon" width={25} height={22} />
            <p className="my-auto ml-5 max-w-[129px] text-lg/5 lg:ml-0 lg:max-w-none lg:text-3xl">
              Ferramentas e utensílios
            </p>
            <Image
              src="grid-square-black.svg"
              alt="grid-square black icon"
              width={100}
              height={69}
              className="ml-auto lg:hidden"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Categorys
