import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata: Metadata = {
  title: "ShueApp",
  description:
    "ShueApp is the friendly marketplace built just for shoes. Shop and sell with verified people you can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className}  antialiased`}>{children}</body>
    </html>
  );
}
