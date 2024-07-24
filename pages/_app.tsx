import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="w-auto h-auto">
    <Navbar/>
    <Component {...pageProps} />
    </main>
  );
}
