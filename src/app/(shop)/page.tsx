import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title } from "@/components";
import { redirect } from "next/navigation";

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page });

  if (products.length === 0) {
    redirect("/");
  }

  return (
    <main>
      <Title title="Home" subtitle="Todos los artículos" />
      <ProductsGrid products={products} />
      <Pagination totalPages={totalPages} />
    </main>
  );
}
