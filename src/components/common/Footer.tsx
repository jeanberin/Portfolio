import Link from 'next/link';
import { socialLinks } from '@/config/portfolio-data';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="flex justify-center space-x-4 mb-6">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-6 w-6" />
              </Link>
            </Button>
          ))}
        </div>
        <p className="text-sm">
          &copy; {currentYear} DevFolio Spark. All rights reserved.
        </p>
        <p className="text-xs mt-2 text-muted-foreground">
          Designed with passion and coded with Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
