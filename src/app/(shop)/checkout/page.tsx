import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

const CheckoutPage = () => {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />
        <span className="text-xl">Detalle</span>
        <Link href="/cart">Editar carrito</Link>
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
              <p className="mb-5">
                <span className="text-xs">
                  Al hacer click en "Finalizar Compra", aceptas nuestros{" "}
                  <a href="#" className="underline">
                    Términos y Condiciones
                  </a>{" "}
                  y{" "}
                  <a href="#" className="underline">
                    Política de Privacidad
                  </a>
                </span>
              </p>
              <Link
                href="/orders/1"
                className="flex btn-primary justify-center"
              >
                Finalizar compra
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
