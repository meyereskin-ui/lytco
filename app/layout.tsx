import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LYTCO Mineral Resources | Copper Processing in Zambia",
  description:
    "LYTCO Mineral Resources Limited is developing an integrated commercial-scale copper processing platform in Mumbwa District, Central Province, Zambia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
