import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

const CartPage = () => {
  //Validacion vacio
  // redirect("/empty");
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />
        <span className="text-xl">Agregar más Items</span>
        <Link href="/">Continúa comprando</Link>
        {/* Carrito Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Item Container */}
          <div className="flex flex-col mt-5">
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
                  <p>$ {product.price}</p>
                  <QuantitySelector quantity={3} />
                </div>
                <button className="underline mt-3">Remover</button>
              </div>
            ))}
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-72">
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
              <Link
                href="/checkout/address"
                className="flex btn-primary justify-center"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
