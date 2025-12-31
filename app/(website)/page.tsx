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
import { getPayload } from 'payload';
import config from '@/payload.config';

export const dynamic = 'force-dynamic';

export default async function Home() {
  let services: any[] = [];
  let projects: any[] = [];
  let philosophy: any[] = [];

  try {
    const payload = await getPayload({ config });

    const [servicesData, projectsData, philosophyData] = await Promise.all([
      payload.find({ collection: 'services', sort: 'number' }),
      payload.find({ collection: 'projects' }),
      payload.find({ collection: 'philosophy' })
    ]);

    services = servicesData.docs;
    projects = projectsData.docs;
    philosophy = philosophyData.docs;
  } catch (error) {
    console.error('Failed to fetch data from PayloadCMS. Using fallback local data.', error);
  }

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main className="relative overflow-x-hidden">
        <Hero />
        <Impact initialServices={services} />
        <TechStack />
        <Portfolio initialProjects={projects} />
        <LiveMetrics />
        <Testimonials />
        <Philosophy initialPhilosophy={philosophy} />
        <Footer />
      </main>
    </>
  );
}
