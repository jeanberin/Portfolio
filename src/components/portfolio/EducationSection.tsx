import SectionWrapper from '@/components/common/SectionWrapper';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Education } from '@/types/portfolio';
import { GraduationCap, BookOpen } from 'lucide-react';

interface EducationSectionProps {
  educations: Education[];
}

export default function EducationSection({ educations }: EducationSectionProps) {
  return (
    <SectionWrapper id="education" title="Education" subtitle="My academic background and qualifications.">
      <div className="space-y-8">
        {educations.map((edu, index) => (
          <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">{edu.degree}</CardTitle>
              <CardDescription className="text-md text-muted-foreground">
                {edu.institution} | {edu.year}
              </CardDescription>
            </CardHeader>
            {edu.coursework && edu.coursework.length > 0 && (
              <CardContent>
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center">
                  <BookOpen className="mr-2 h-4 w-4 text-accent" />
                  Relevant Coursework:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {edu.coursework.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
