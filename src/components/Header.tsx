"use client"
import { useState } from "react"
import { ChevronDown, ChevronUp, MenuSquare } from "lucide-react"
import Image from "next/image"
import Dropdown from "./Dropdown"

const Header = () => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <header className="relative flex min-h-[504px] flex-col bg-primary lg:block lg:overflow-hidden">
      <nav className="flex max-w-7xl px-3.5 py-14 text-white lg:m-auto">
        <Image src="/logo.svg" alt="logo" width={160} height={35} />
        <div className="m-auto ml-16 hidden w-full items-center justify-between lg:flex">
          <ul className="flex space-x-10 xl:space-x-11 [&>*]:cursor-pointer">
            <li>Início</li>
            <li
              className={`flex ${dropdown ? "text-tertiary" : ""}`}
              onClick={() => setDropdown(prev => !prev)}
            >
              Produtos
              {dropdown ? (
                <ChevronUp className="ml-2.5 text-tertiary" width={12} />
              ) : (
                <ChevronDown className="ml-2.5" width={12} />
              )}
            </li>
            <li>Laudos</li>
            <li>Sobre nós</li>
            <li>Certificações</li>
            <li>Contato</li>
          </ul>
          <button className="flex place-items-center rounded-md bg-white/[0.09] px-[18px] py-3 text-center text-sm font-medium">
            <MenuSquare className="mr-1" width={15} strokeWidth={1} /> Orçamento
          </button>
        </div>
        <div className="ml-auto flex lg:hidden">
          <div className="rounded-lg bg-tertiary p-2.5">
            <MenuSquare size={20} />
          </div>
          <button className="ml-7" onClick={() => setDropdown(prev => !prev)}>
            <Image
              src="/menu-icon.svg"
              alt="menu icon"
              width={29}
              height={29}
            />
          </button>
        </div>
      </nav>
      <div className="mb-48 px-8 text-3xl text-[#E3F7FF] lg:mb-0 lg:hidden">
        <h2>
          Qualidade e expertise em produtos{" "}
          <span className="text-[#48C7F3]">químicos e acessórios</span>
        </h2>
        <p className="mt-2.5 text-base text-white">
          Estamos preparados para te entender e atender da melhor forma para
          suprir todas as suas demandas em químicos e similares.
        </p>
      </div>
      <Image
        className="absolute bottom-8 left-12 hidden lg:block"
        src="/Linked Path Group.svg"
        width={187}
        height={187}
        alt="Linked Path Group"
      />
      <Image
        className="absolute -bottom-[169px] left-1/2 mx-auto -translate-x-1/2 px-3.5 lg:-right-[123px] lg:-top-20 lg:left-auto lg:translate-x-0"
        src="/grid.svg"
        width={311}
        height={344}
        alt="grid"
      />
      {dropdown && (
        <div className="absolute left-0 top-36 z-50 h-[calc(100dvh-144px)] w-full max-w-7xl bg-primary text-white lg:static lg:m-auto lg:h-auto">
          <div className="px-5 lg:hidden">
            <h2 className="mb-9 text-xl">Navegue por nosso site</h2>
            <ul className="flex flex-col gap-y-3 [&>*]:cursor-pointer">
              <li>Início</li>
              <li>Produtos</li>
              <li>Laudos</li>
              <li>Sobre nós</li>
              <li>Certificações</li>
              <li>Contato</li>
            </ul>
          </div>
          <Dropdown />
        </div>
      )}
    </header>
  )
}

export default Header
