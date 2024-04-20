import { Customers } from "@/_components/home/customers";
import { Hero } from "@/_components/home/hero";
import { Navbar } from "@/_components/home/navbar";
import { Pricing } from "@/_components/home/pricing";
import { Product } from "@/_components/home/product";
import { Why } from "@/_components/home/why";

export default function Home() {
  return (
    <main className="font-InterTight flex min-h-screen flex-col items-center justify-between pt-[1rem]">
      <Hero />
      <Why />
      <Product />
      <Pricing />
      <Customers />
    </main>
  );
}
