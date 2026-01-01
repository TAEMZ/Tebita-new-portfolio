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
  let testimonials: any[] = [];
  let metrics: any[] = [];
  let contact: any = null;
  let techCategories: any[] = [];

  try {
    const payload = await getPayload({ config });

    const [servicesData, projectsData, philosophyData, testimonialsData, metricsData, contactData, techCategoriesData] = await Promise.all([
      payload.find({ collection: 'services', sort: 'number' }),
      payload.find({ collection: 'projects' }),
      payload.find({ collection: 'philosophy' }),
      payload.find({ collection: 'testimonials' }),
      payload.find({ collection: 'metrics', sort: 'order' }),
      payload.find({ collection: 'contact', limit: 1 }),
      payload.find({ collection: 'tech-categories', sort: 'order' })
    ]);

    services = servicesData.docs;
    projects = projectsData.docs;
    philosophy = philosophyData.docs;
    testimonials = testimonialsData.docs;
    metrics = metricsData.docs;
    contact = contactData.docs[0] || null;
    techCategories = techCategoriesData.docs;
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
        <TechStack initialTechCategories={techCategories} />
        <Portfolio initialProjects={projects} />
        <LiveMetrics initialMetrics={metrics} />
        <Testimonials initialTestimonials={testimonials} />
        <Philosophy initialPhilosophy={philosophy} />
        <Footer initialContact={contact} />
      </main>
    </>
  );
}
