import { Customers } from '../../components/ui/customers';
import { Product } from '../../components/ui/product';
import SiteScores from '../../components/ui/site-scores';
import { Why } from '../../components/ui/why';

export default function About() {
  return (
    <div className="flex flex-col bg-white text-black min-h-screen">
      <div className="flex flex-col items-center pt-12">
        <Why />
        <SiteScores />
        <Product />
        <Customers />
      </div>
    </div>
  );
}
