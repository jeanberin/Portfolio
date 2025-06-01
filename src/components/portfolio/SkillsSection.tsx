import SectionWrapper from '@/components/common/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Skill } from '@/types/portfolio';
import { Code } from 'lucide-react';

interface SkillsSectionProps {
  overviewText: string;
  skills: Skill[];
}

export default function SkillsSection({ overviewText, skills }: SkillsSectionProps) {
  return (
    <SectionWrapper id="skills" title="My Skills" subtitle="Technologies and tools I excel in.">
      <Card className="shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-headline text-primary">
            <Code className="mr-2 h-6 w-6" />
            Skills Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md leading-relaxed text-foreground whitespace-pre-line">
            {overviewText}
          </p>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <Card key={skill.name} className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6 flex flex-col items-center justify-center">
              <skill.icon className="mb-3 h-10 w-10 text-primary" />
              <p className="text-lg font-medium text-center">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
