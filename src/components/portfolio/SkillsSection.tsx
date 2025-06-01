import SectionWrapper from '@/components/common/SectionWrapper';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card key={skill.name} className="hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center font-medium">
                <skill.icon className="mr-3 h-6 w-6 text-primary" />
                {skill.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-muted-foreground">Proficiency</span>
                <span className="text-sm font-semibold text-primary">{skill.proficiency}%</span>
              </div>
              <Progress value={skill.proficiency} aria-label={`${skill.name} proficiency ${skill.proficiency}%`} className="h-3" />
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
