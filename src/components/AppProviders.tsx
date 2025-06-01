"use client";

import type { ReactNode } from 'react';
// import { ThemeProvider } from "next-themes"; // If you want to add theme toggling later

type AppProvidersProps = {
  children: ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  // For now, this is simple. If you add ThemeProvider or others, they go here.
  // return (
  //   <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
  //     {children}
  //   </ThemeProvider>
  // );
  return <>{children}</>;
}
