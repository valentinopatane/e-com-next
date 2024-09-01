import {
  MobileSlideShow,
  QuantitySelector,
  SizeSelector,
  SlideShow,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  };
}
const ProductPage = ({ params }: Props) => {
  const { slug } = params;
  const product = initialData.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }
  return (
    <div className="mt-5 mb-20 grid grid-cols-1 gap-3 md:grid-cols-3">
      {/* Photo Slider */}
      <div className="col-span-1 md:col-span-2">
        <MobileSlideShow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        <SlideShow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>
      <div className="col-span-1 px-5 bg-blue-50">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className="text-lg mb-5">{product.price}</p>

        {/* Selector de Tallas */}
        <SizeSelector
          availableSizes={product.sizes}
          selectedSize={product.sizes[0]}
        />
        {/* Selector de Cantidad*/}
        <QuantitySelector quantity={2} />
        {/* Boton  */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductPage;
