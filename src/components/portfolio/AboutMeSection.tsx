import SectionWrapper from '@/components/common/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { User } from 'lucide-react';

interface AboutMeSectionProps {
  content: string;
}

export default function AboutMeSection({ content }: AboutMeSectionProps) {
  return (
    <SectionWrapper id="about-me" title="About Me" subtitle="A little bit about my journey and passion.">
      <div className="grid md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="/img/about.webp"
            alt="profile picture"
            width={300}
            height={300}
            className="rounded-full shadow-xl border-4 border-primary object-cover"
            data-ai-hint="professional portrait"
          />
        </div>
        <div className="md:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-headline text-primary">
                <User className="mr-3 h-7 w-7" />
                Who I Am
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-foreground whitespace-pre-line">
                {content}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
