import { Customers } from '../../components/ui/customers';
import { Product } from '../../components/ui/product';
import SiteScores from '../../components/ui/site-scores';
import { Why } from '../../components/ui/why';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center pt-12">
        <Why />
        <Product />
        <SiteScores />
        <Customers />
      </div>
    </div>
  );
}
