import { Product } from "@/interfaces";
import { ProductsGridItem } from "./ProductsGridItem";

interface Props {
  products: Product[];
}
export const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10">
      {products.map((p) => (
        <ProductsGridItem key={p.slug} product={p} />
      ))}
    </div>
  );
};
