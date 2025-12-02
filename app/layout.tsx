import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TEBITA TECH | Liquid Obsidian Intelligence',
  description: 'From a single drop, an ocean of intelligence. Precision engineering meets artificial intelligence. Full-stack architecture and hyper-automation solutions.',
  keywords: 'AI, Machine Learning, Full Stack Development, Automation, Cloud Architecture, Software Engineering',
  authors: [{ name: 'Tebita Tech' }],
  openGraph: {
    title: 'TEBITA TECH | Liquid Obsidian Intelligence',
    description: 'From a single drop, an ocean of intelligence.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
