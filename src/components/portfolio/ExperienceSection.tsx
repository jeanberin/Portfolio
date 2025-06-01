import SectionWrapper from '@/components/common/SectionWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Experience } from '@/types/portfolio';
import { Briefcase, CheckCircle } from 'lucide-react';

interface ExperienceSectionProps {
  overviewText: string;
  experiences: Experience[];
}

export default function ExperienceSection({ overviewText, experiences }: ExperienceSectionProps) {
  return (
    <SectionWrapper id="experience" title="Work Experience" subtitle="My professional journey and accomplishments.">
      <Card className="shadow-lg mb-12">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-headline text-primary">
            <Briefcase className="mr-2 h-6 w-6" />
            Experience Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md leading-relaxed text-foreground whitespace-pre-line">
            {overviewText}
          </p>
        </CardContent>
      </Card>

      <div className="relative space-y-10 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:-translate-x-px md:before:mx-auto md:before:translate-x-0">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md md:absolute md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2">
              <Briefcase className="w-5 h-5" />
            </div>
            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">{exp.role}</CardTitle>
                <CardDescription className="text-md text-muted-foreground">
                  {exp.company} | {exp.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-foreground whitespace-pre-line">{exp.description}</p>
                <ul className="space-y-1">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-accent shrink-0" />
                      {ach}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
