import Hero from '@/components/sections/Hero';
import Impact from '@/components/sections/Impact';
import Portfolio from '@/components/sections/Portfolio';
import LiveMetrics from '@/components/sections/LiveMetrics';
import Testimonials from '@/components/sections/Testimonials';
import Philosophy from '@/components/sections/Philosophy';
import Footer from '@/components/sections/Footer';
import Navigation from '@/components/sections/Navigation';
import CustomCursor from '@/components/ui-custom/CustomCursor';
import LoadingScreen from '@/components/ui-custom/LoadingScreen';
import ScrollProgress from '@/components/ui-custom/ScrollProgress';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <main className="relative overflow-x-hidden">
        <Navigation />
        <Hero />
        <Impact />
        <Portfolio />
        <LiveMetrics />
        <Testimonials />
        <Philosophy />
        <Footer />
      </main>
    </>
  );
}
