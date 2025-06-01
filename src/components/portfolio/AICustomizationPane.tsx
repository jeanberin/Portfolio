"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { customizePortfolio, type CustomizePortfolioInput, type CustomizePortfolioOutput } from '@/ai/flows/portfolio-customization';
import type { PortfolioTextContent, PortfolioState } from '@/types/portfolio';
import { useToast } from "@/hooks/use-toast";
import { Loader2, Sparkles } from 'lucide-react';

interface AICustomizationPaneProps {
  currentTextContent: PortfolioTextContent;
  onCustomizationComplete: (newSectionsOrder: string[], newTextContent: PortfolioTextContent) => void;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AICustomizationPane({ currentTextContent, onCustomizationComplete, isOpen, onOpenChange }: AICustomizationPaneProps) {
  const [recruiterRole, setRecruiterRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recruiterRole.trim()) {
      toast({ title: "Input Required", description: "Please enter the recruiter's role.", variant: "destructive" });
      return;
    }
    setIsLoading(true);

    const input: CustomizePortfolioInput = {
      recruiterRole,
      aboutMe: currentTextContent.aboutMe,
      skills: currentTextContent.skills,
      experience: currentTextContent.experience,
      projects: currentTextContent.projects,
      education: currentTextContent.education,
      hobbies: currentTextContent.hobbies,
    };

    try {
      const result: CustomizePortfolioOutput = await customizePortfolio(input);
      const newTextContent: PortfolioTextContent = {
        ...currentTextContent, // Keep hero static, or handle separately if AI modifies it
        aboutMe: result.customizedAboutMe,
        skills: result.customizedSkills,
        experience: result.customizedExperience,
        projects: result.customizedProjects,
        education: result.customizedEducation,
        hobbies: result.customizedHobbies,
      };
      onCustomizationComplete(result.customizedSections, newTextContent);
      toast({ title: "Portfolio Customized!", description: "Content and layout updated by AI." });
      onOpenChange(false); // Close dialog on success
    } catch (error) {
      console.error("AI Customization Error:", error);
      toast({ title: "Error", description: "Failed to customize portfolio. Please try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl font-headline">
            <Sparkles className="mr-2 h-6 w-6 text-primary" />
            AI Portfolio Customization
          </DialogTitle>
          <DialogDescription>
            Tailor your portfolio for a specific recruiter. Enter their role below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="recruiterRole" className="text-right col-span-1">
                Recruiter's Role
              </Label>
              <Input
                id="recruiterRole"
                value={recruiterRole}
                onChange={(e) => setRecruiterRole(e.target.value)}
                placeholder="e.g., Engineering Manager, HR Specialist"
                className="col-span-3"
                disabled={isLoading}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline" disabled={isLoading}>
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Customizing...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Customize
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
