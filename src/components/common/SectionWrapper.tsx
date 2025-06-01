"use client";

import { useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
  titleClassName,
  contentClassName,
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1, freezeOnceVisible: true });

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        'container mx-auto px-4 md:px-8 section-fade-in',
        isVisible && 'visible',
        className
      )}
    >
      {title && (
        <div className="mb-12 text-center">
          <h2 className={cn("text-3xl md:text-4xl font-headline font-semibold text-primary mb-2", titleClassName)}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className={cn(contentClassName)}>{children}</div>
    </section>
  );
}
