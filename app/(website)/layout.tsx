import '../globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TEBITA TECH | Precision AI & Workflow Automation',
  description: 'Tebita Tech provides enterprise-grade AI automation, full-stack web development, and intelligent workflow solutions. Scalable architecture for modern businesses.',
  keywords: 'AI Automation, Workflow Optimization, Next.js Development, Custom Software Ethiopia, Tebita Tech, Intelligent Systems',
  authors: [{ name: 'Tebita Tech' }],
  openGraph: {
    title: 'TEBITA TECH | Precision AI & Workflow Automation',
    description: 'Transforming businesses with intelligent automation and scalable architecture.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
