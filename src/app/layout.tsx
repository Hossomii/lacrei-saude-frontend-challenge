import type { Metadata } from "next";
import { Providers } from "@/lib/providers";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { CookieBanner } from "@/components/CookieBanner/CookieBanner";

export const metadata: Metadata = {
  title: "Lacrei Saúde | Desafio Front-end",
  description:
    "Projeto técnico front-end com foco em acessibilidade, responsividade e identidade visual da Lacrei Saúde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}