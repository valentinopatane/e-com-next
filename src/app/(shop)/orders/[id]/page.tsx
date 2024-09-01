import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Props {
  params: {
    id: string;
  };
}

const OrderPage = ({ params }: Props) => {
  const { id } = params;
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />
        <span className="text-xl">Detalle de orden</span>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <div
              className={clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-500": false,
                  "bg-green-700": true,
                }
              )}
            >
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente de pago</span> */}
              <span className="mx-2">Pagada</span>
            </div>
            {productsInCart.map((product) => (
              // Item
              <div key={product.slug} className="flex mb-5 justify-between">
                <Image
                  src={`/products/${product.images[0]}`}
                  alt={product.title}
                  height={100}
                  width={100}
                  className="mr-5 rounded"
                ></Image>
                <div className="w-full flex-col justify-center">
                  <p>{product.title}</p>
                  <p>$ {product.price} x 3</p>
                  <p className="font-bold">Subtotal: $ {product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-xl mb-2 font-bold">Dirección de entrega</h2>
            <div className="mb-10 grid grid-cols-1">
              <p className="text-xl">Juan Juan</p>
              <p>Av. Siempre Viva</p>
              <p>Col. Centro</p>
              <p>Apapapa</p>
              <p>Buenos Aires</p>
              <p>CP 1200</p>
              <p>12-12-12-12</p>
            </div>

            <h2 className="text-xl mb-2">Resumen</h2>
            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3</span>
              <span>Subtotal</span>
              <span className="text-right">$ 100</span>
              <span>Impuestos (15%)</span>
              <span className="text-right">$ 15</span>
              <span className="mt-5 text-2xl">Total</span>
              <span className="text-right mt-5 text-2xl">$ 115</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <div
                className={clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    "bg-red-500": false,
                    "bg-green-700": true,
                  }
                )}
              >
                <IoCardOutline size={30} />
                {/* <span className="mx-2">Pendiente de pago</span> */}
                <span className="mx-2">Pagada</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
