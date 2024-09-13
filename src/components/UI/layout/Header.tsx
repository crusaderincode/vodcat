"use client";
import { Button } from "@/components";
import { useState } from "react";
import { NavModal } from "./NavModal";


const btnSize = "py-3 px-4 xl:py-4 xl:px-5";

export const Header = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openModal = () => setIsModalOpen(true);
   const closeModal = () => setIsModalOpen(false);

   
  return (
    <header className="flex w-full justify-end lg:justify-between container z-20">
      <div className="gap-x-5 xl:gap-x-10 text-lg lg:text-2xl xl:text-3xl hidden lg:flex">
        <Button type="yellow" text="Holders parser" className={btnSize} />
        <Button type="yellow" text="Token sender" className={btnSize} />
        <Button type="yellow" text="Volume bot" className={btnSize} />
      </div>

      <div className="gap-x-5 xl:gap-x-10 text-lg lg:text-2xl xl:text-3xl hidden lg:flex">
        <Button
          type="purple"
          text="Dexscreener"
          withIcon="screener"
          className={btnSize}
        />

        <a
          href="https://www.dextools.io/app/en/solana/pair-explorer/479ekZizdwB756KbtW3jeMAQ8p6ozKiX6XXKsihDYFRv?t=1726117532509"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            type="purple"
            text="Dextools"
            withIcon="tools"
            className={btnSize}
          />
        </a>
      </div>

      <div className="flex lg:hidden">
        <Button
          type="yellow"
          text="Info"
          className={btnSize}
          onClick={openModal}
        />
      </div>

      <NavModal isOpen={isModalOpen} onClose={closeModal} />
    </header>
  );
};
