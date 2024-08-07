import Header from "@/components/Header";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mostafa CV",
  description: "Generated by create next app",
  icons: {
    icon: {
      url: "/logo/logo_MD.png",
    },
  },
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      <section className="min-h-[calc(100vh-64px)] mb-16 md:mb-0 md:mt-16 py-10">
        {children}
      </section>
    </main>
  );
}
