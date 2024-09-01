import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const EmptyCartPage = () => {
  return (
    <div className="flex justify-center items-center h-[800px] w-full">
      <div className="flex flex-col items-center">
        <IoCartOutline size={60} className="mx-5" />
        <h1 className="text-xl font-semibold">El carrito está vacío</h1>
        <Link href={"/"} className="text-blue-500 mt-2 text-xl">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default EmptyCartPage;
