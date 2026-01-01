import { industries, IndustrySlug } from '@/lib/industries-data';
import { notFound } from 'next/navigation';
import IndustryContent from '@/components/sections/IndustryContent';
import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const industry = industries[slug as IndustrySlug];

    if (!industry) {
        return {
            title: 'Industry Not Found | Tebita Tech',
        };
    }

    return {
        title: `${industry.title} | AI Automation Solutions | Tebita Tech`,
        description: industry.hero || `Transform your ${industry.title} business with Tebita Tech's intelligent automation and seamless integrations.`,
        openGraph: {
            title: `${industry.title} Automation Solutions`,
            description: industry.description,
            type: 'article',
        },
    };
}

export default async function IndustryPage({ params }: Props) {
    const { slug } = await params;
    const industry = industries[slug as IndustrySlug];

    if (!industry) {
        notFound();
    }

    return <IndustryContent slug={slug as IndustrySlug} />;
}
