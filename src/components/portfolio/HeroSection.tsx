
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { ctaButtons } from '@/config/portfolio-data';
import type { PortfolioTextContent } from '@/types/portfolio';

interface HeroSectionProps {
  content: Pick<PortfolioTextContent, 'heroTitle' | 'heroSubtitle'>;
  nextSectionId: string;
}

export default function HeroSection({ content, nextSectionId }: HeroSectionProps) {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        {/* Subtle background pattern or animation can go here */}
      </div>
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold mb-6 text-primary animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          {content.heroTitle}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-10 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          {content.heroSubtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center mx-auto space-y-4 sm:space-y-0 sm:space-x-4 mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          {ctaButtons.map((cta) => (
            <Button key={cta.label} size="lg" asChild variant={cta.variant}>
              <Link href={cta.url} target={cta.label === 'View Resume' ? '_blank' : undefined}>
                {cta.icon && <cta.icon className="mr-2 h-5 w-5" />}
                {cta.label}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
