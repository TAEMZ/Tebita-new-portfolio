import Hero from '@/components/sections/Hero';
import Impact from '@/components/sections/Impact';
import Portfolio from '@/components/sections/Portfolio';
import LiveMetrics from '@/components/sections/LiveMetrics';
import Testimonials from '@/components/sections/Testimonials';
import Philosophy from '@/components/sections/Philosophy';
import Footer from '@/components/sections/Footer';
import Header from '@/components/sections/Header';
import CustomCursor from '@/components/ui-custom/CustomCursor';
import LoadingScreen from '@/components/ui-custom/LoadingScreen';
import ScrollProgress from '@/components/ui-custom/ScrollProgress';
import TechStack from '@/components/sections/TechStack';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main className="relative overflow-x-hidden">
        <Hero />
        <Impact />
        <TechStack />
        <Portfolio />
        <LiveMetrics />
        <Testimonials />
        <Philosophy />
        <Footer />
      </main>
    </>
  );
}
