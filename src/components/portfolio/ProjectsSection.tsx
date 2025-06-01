import SectionWrapper from '@/components/common/SectionWrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types/portfolio';
import { LayoutGrid, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectsSectionProps {
  overviewText: string;
  projects: Project[];
}

export default function ProjectsSection({ overviewText, projects }: ProjectsSectionProps) {
  return (
    <SectionWrapper id="projects" title="My Projects" subtitle="A selection of my recent work and contributions.">
      <Card className="shadow-lg mb-12">
        <CardHeader>
          <CardTitle className="flex items-center text-xl font-headline text-primary">
            <LayoutGrid className="mr-2 h-6 w-6" />
            Projects Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-md leading-relaxed text-foreground whitespace-pre-line">
            {overviewText}
          </p>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-48 md:h-56">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                data-ai-hint={project.dataAiHint || 'project image'}
              />
            </div>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map(tech => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{project.description}</p>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              {project.liveUrl && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              )}
              {project.repoUrl && (
                <Button variant="default" size="sm" asChild>
                  <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
