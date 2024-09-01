import { ProductsGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <main>
      <Title title="Home" subtitle="Todos los artículos" />
      <ProductsGrid products={products} />
    </main>
  );
}
