import { Customers } from '@/_components/home/customers';
import { Footer } from '@/_components/home/footer';
import { Pricing } from '@/_components/home/pricing';
import { Product } from '@/_components/home/product';
import { Why } from '@/_components/home/why';

export default function About() {
  return (
    <div className="mt-24">
      <Why />
      <Product />
      <Pricing />
      <Customers />
      <Footer />
    </div>
  );
}
