import React from "react";
import NotFoundPage from "../not-found";
import { ProductsGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { Category } from "@/interfaces";

interface Props {
  params: {
    id: Category;
  };
}

const products = initialData.products;

const CategoryPage = ({ params }: Props) => {
  const { id } = params;

  // if (id !== "women") {
  //   return <NotFoundPage />;
  // }

  const labels: Record<Category, string> = {
    men: "hombres",
    women: "mujeres",
    kids: "niños",
    unisex: "todos",
  };

  return (
    <main>
      <Title title={`Articulos para ${labels[id]}`} subtitle="Sitio web" />
      <ProductsGrid products={products.filter((p) => p.gender === id)} />
    </main>
  );
};
export default CategoryPage;
