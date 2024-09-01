import Link from "next/link";

export const PageNotFound = () => {
  return (
    <div>
      <p>Whoops! Lo sentimos mucho. Esta página no está disponible.</p>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
};
