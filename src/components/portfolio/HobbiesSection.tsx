import SectionWrapper from '@/components/common/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import type { Hobby } from '@/types/portfolio';
import { Smile } from 'lucide-react';

interface HobbiesSectionProps {
  hobbies: Hobby[];
}

export default function HobbiesSection({ hobbies }: HobbiesSectionProps) {
  return (
    <SectionWrapper id="hobbies" title="Hobbies & Interests" subtitle="What I enjoy doing in my free time.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hobbies.map((hobby) => (
          <Card key={hobby.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {hobby.imageUrl && (
              <div className="relative w-full h-48">
                <Image
                  src={hobby.imageUrl}
                  alt={hobby.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  data-ai-hint={hobby.dataAiHint || 'hobby image'}
                />
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-lg flex items-center font-medium">
                {hobby.icon && <hobby.icon className="mr-2 h-5 w-5 text-primary" />}
                {hobby.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{hobby.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
