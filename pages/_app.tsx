import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/context/themeContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="w-auto h-auto">
      <ThemeProvider>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
      </ThemeProvider>
    </main>
  );
}
