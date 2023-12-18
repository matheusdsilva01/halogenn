import { Settings2, Square, Thermometer } from "lucide-react"
import Image from "next/image"

const Dropdown = () => {
  return (
    <div className="relative z-10 flex w-full flex-1 flex-wrap gap-y-6 border-white bg-primary px-5 py-16 text-white lg:h-auto lg:space-y-0 lg:border-t-[1px] lg:px-0">
      <h1 className="mr-5 max-w-[200px] text-xl font-medium">
        Catálogo completo de itens para você
      </h1>
      <section className="flex flex-wrap gap-x-16 gap-y-6">
        <div className="max-w-[259px]">
          <p>Laborátório</p>
          <div className="mt-4 flex flex-wrap justify-between gap-x-7 gap-y-5">
            <span className="flex text-sm">
              <Settings2 size={20} className="mr-1" />
              <p className="text-white/75">Equipamentos</p>
            </span>
            <span className="flex text-sm">
              <Thermometer size={20} className="mr-1" />
              <p className="text-white/75">Termômetros</p>
            </span>
            <span className="flex text-sm">
              <Image
                src="/glasses.svg"
                width={20}
                height={20}
                alt="glasses icon"
                className="mr-1"
              />
              <p className="text-white/75">Acessórios</p>
            </span>
          </div>
        </div>
        <div className="max-w-[259px]">
          <p>Utensílios</p>
          <div className="mt-4 flex flex-wrap justify-between gap-x-7 gap-y-5">
            <span className="flex text-sm">
              <Square size={20} className="mr-1" />
              <p className="text-white/75">Inox e Ferragens</p>
            </span>
            <span className="flex text-sm">
              <Image
                src="/chemistry.svg"
                width={20}
                height={20}
                alt="chemistry icon"
                className="mr-1"
              />
              <p className="text-white/75">Vidrarias</p>
            </span>
            <span className="flex text-sm">
              <Image
                src="/chest.svg"
                width={20}
                height={20}
                alt="chest icon"
                className="mr-1"
              />
              <p className="text-white/75">Plásticos</p>
            </span>
            <span className="flex text-sm">
              <Image
                src="/bowl.svg"
                width={20}
                height={20}
                alt="bowl icon"
                className="mr-1"
              />
              <p className="text-white/75">Porcelanas</p>
            </span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dropdown
