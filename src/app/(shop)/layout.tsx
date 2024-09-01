import { TopMenu, Sidebar, Footer } from "@/components";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <TopMenu />
      <Sidebar />
      <div className="md:px-1">{children}</div>
      <Footer />
    </main>
  );
}
