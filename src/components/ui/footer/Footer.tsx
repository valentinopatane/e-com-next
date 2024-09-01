import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center items-center text-xs h-10">
      <Link href={"/"}>
        <span>Shop | ©</span>
        <span>{new Date().getFullYear()}</span>
      </Link>
    </footer>
  );
};
