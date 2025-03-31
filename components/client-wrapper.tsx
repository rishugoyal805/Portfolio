// ✅ app/components/client-wrapper.tsx (Client Component)
"use client"; // ✅ Mark this as a Client Component

import React from "react";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/scroll-progress";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ScrollProgress />
      <Header />
      {children}
    </ThemeProvider>
  );
}
