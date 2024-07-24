import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <h1 className="uppercase text-blue-500">Hello world</h1>
    </main>
  );
}
