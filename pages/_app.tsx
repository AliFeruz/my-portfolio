import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from 'next/font/local'

const strawford = localFont({
  src: [
    {
      path: '../fonts/strawford-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/strawford-medium.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/strawford-bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
      <main className={`${strawford.className} relative bg-white`}>
          <Navbar/>
          <Component {...pageProps} />
          <Footer/>
      </main>
  );
}


