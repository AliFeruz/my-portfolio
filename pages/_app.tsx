import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from 'next/font/local'
import Head from "next/head";

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
          <Head>
          <title>Ali Feruz - Web Developer</title>
          <meta
            name="description"
            content="Ali Feruz is a web developer specializing in creating innovative and efficient web solutions. Explore my portfolio, projects, and services."
          />
          <meta name="keywords" content="Ali Feruz, web developer, portfolio, projects, services, software development" />
          <meta name="author" content="Ali Feruz" />
          <link rel="canonical" href="aliferuz.com" />
          <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ali Feruz",
            "url": "aliferuz.com",
            "sameAs": [
              "https://www.linkedin.com/in/aliferuz/",
              "https://github.com/aliferuz"
            ],
            "description": "Ali Feruz is a web developer specializing in creating innovative and efficient web solutions."
          }
          `}
          </script>
          <meta property="og:title" content="Ali Feruz - Web Developer & UX/UI Designer" />
          <meta property="og:description" content="Ali Feruz is a web developer specializing in creating innovative and efficient web solutions. Explore my portfolio, projects, and services." />
          <meta property="og:image" content="https://aliferuz.com/preview.png" />
          <meta property="og:url" content="https://aliferuz.com" />
          <meta property="og:type" content="website" />
          </Head>
          <Navbar/>
          <Component {...pageProps} />
          <Footer/>
      </main>
  );
}


