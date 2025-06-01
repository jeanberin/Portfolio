
import SectionWrapper from '@/components/common/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import type { Skill } from '@/types/portfolio';
import Image from 'next/image'; // Import next/image

interface SkillsSectionProps {
  skills: Skill[];
}

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <SectionWrapper id="skills" title="My Skills" subtitle="Technologies and tools I excel in.">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <Card key={skill.name} className="hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6 flex flex-col items-center justify-center aspect-square">
              <div className="relative h-16 w-16 mb-3">
                <Image
                  src={skill.iconUrl}
                  alt={`${skill.name} logo`}
                  width={48}
                  height={48}
                  className="object-contain"
                  data-ai-hint={skill.dataAiHint || skill.name.toLowerCase() + " logo"}
                />
              </div>
              <p className="text-base font-medium text-center text-foreground">{skill.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
