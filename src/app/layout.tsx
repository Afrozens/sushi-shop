import { Header } from "@/components";
import "./globals.css";
import { Oswald } from "next/font/google";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata = {
  title: "Komesushi",
  description:
    "KomeSushi: tienda online de sushi con registro de usuarios, opiniones y pedidos a través de la web. Disfruta deliciosos platillos frescos en un clic.",
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
    shortcut: { url: "./favicon.png", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={oswald.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
