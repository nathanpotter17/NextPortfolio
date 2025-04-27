import { Pricing } from '../../components/ui/pricing';
import { Hero } from '../../components/ui/hero';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between mt-[70px]">
      <Hero />
      <Pricing />
    </div>
  );
}
