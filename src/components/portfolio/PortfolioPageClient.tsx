
"use client";

import { useState, useMemo, useCallback } from 'react';
import type { PortfolioState, PortfolioTextContent, SECTION_MAP } from '@/types/portfolio';
import { initialPortfolioState } from '@/config/portfolio-data';

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutMeSection from '@/components/portfolio/AboutMeSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import EducationSection from '@/components/portfolio/EducationSection';
import HobbiesSection from '@/components/portfolio/HobbiesSection';
import AICustomizationPane from '@/components/portfolio/AICustomizationPane';

// Define a mapping from section names (as returned by AI) to components
const sectionComponentMap: Record<string, React.FC<any>> = {
  "About Me": AboutMeSection,
  "Skills": SkillsSection,
  "Experience": ExperienceSection,
  "Projects": ProjectsSection,
  "Education": EducationSection,
  "Hobbies": HobbiesSection,
};

export default function PortfolioPageClient() {
  const [portfolioState, setPortfolioState] = useState<PortfolioState>(initialPortfolioState);
  const [isCustomizePaneOpen, setIsCustomizePaneOpen] = useState(false);

  const handleCustomizationComplete = useCallback((newSectionsOrder: string[], newTextContent: PortfolioTextContent) => {
    setPortfolioState(prevState => ({
      ...prevState,
      sections: newSectionsOrder,
      content: newTextContent,
    }));
  }, []);

  // This function is no longer called from the Header, but kept in case it's used elsewhere or for future use.
  const toggleCustomizePane = useCallback(() => {
    setIsCustomizePaneOpen(prev => !prev);
  }, []);
  
  const orderedSections = useMemo(() => {
    // Ensure all unique sections from default and AI are included, AI order takes precedence
    const aiSectionSet = new Set(portfolioState.sections);
    const allPossibleSections = initialPortfolioState.sections; // Use this as the master list of possible sections
    
    const finalSectionOrder = [
      ...portfolioState.sections,
      ...allPossibleSections.filter(section => !aiSectionSet.has(section))
    ];
    return finalSectionOrder;

  }, [portfolioState.sections]);

  const renderSection = (sectionName: string, index: number) => {
    const Component = sectionComponentMap[sectionName];
    if (!Component) {
      console.warn(`No component found for section: ${sectionName}`);
      return null;
    }

    const props: any = { key: `${sectionName}-${index}` };

    switch (sectionName) {
      case "About Me":
        props.content = portfolioState.content.aboutMe;
        break;
      case "Skills":
        props.overviewText = portfolioState.content.skills;
        props.skills = portfolioState.structuredData.skills;
        break;
      case "Experience":
        props.overviewText = portfolioState.content.experience;
        props.experiences = portfolioState.structuredData.experience;
        break;
      case "Projects":
        props.overviewText = portfolioState.content.projects;
        props.projects = portfolioState.structuredData.projects;
        break;
      case "Education":
        props.overviewText = portfolioState.content.education;
        props.educations = portfolioState.structuredData.education;
        break;
      case "Hobbies":
        props.overviewText = portfolioState.content.hobbies;
        props.hobbies = portfolioState.structuredData.hobbies;
        break;
      default:
        return null;
    }
    return <Component {...props} />;
  };
  
  const nextSectionId = orderedSections.length > 0 ? orderedSections[0].toLowerCase().replace(/\s+/g, '-') : 'about-me';


  return (
    <div className="flex flex-col min-h-screen">
      <Header sectionOrder={orderedSections} />
      <main className="flex-grow">
        <HeroSection content={portfolioState.content} nextSectionId={nextSectionId} />
        {orderedSections.map((sectionName, index) => renderSection(sectionName, index))}
      </main>
      <Footer />
      {/* AICustomizationPane is still here but its trigger (button in Header) has been removed. */}
      <AICustomizationPane
        currentTextContent={portfolioState.content}
        onCustomizationComplete={handleCustomizationComplete}
        isOpen={isCustomizePaneOpen}
        onOpenChange={setIsCustomizePaneOpen}
      />
    </div>
  );
}
