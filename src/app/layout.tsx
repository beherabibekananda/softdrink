import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import localFont from 'next/font/local'

import "./app.css"
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";
import FlyingCanEffect from "@/components/FlyingCanEffect";
import ViewCanvas from "@/components/ViewCanvas";
import Footer from "@/components/Footer";


const alpino = localFont({
  src: '../../public/fonts/Alpino-Variable.woff2',
  display: 'swap',
  weight: '100 900',
  variable: '--font-alpino',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="overflow-x-hidden bg-black text-white">
        <Header />
        <CartDrawer />
        <Toast />
        <FlyingCanEffect />
        <main>
          {children}
          <ViewCanvas />
        </main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
