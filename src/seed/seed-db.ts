import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const { categories, products } = initialData;
  const categoriesData = categories.map((category) => ({
    name: category,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  console.log(categoriesMap);
  console.log("Ejecutado correctamente");

  products.forEach(async (p) => {
    const { type, images, ...product } = p;

    const dbProduct = await prisma.product.create({
      data: { ...product, categoryId: categoriesMap[type] },
    });

    const imagesData = images.map((i) => ({
      url: i,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
