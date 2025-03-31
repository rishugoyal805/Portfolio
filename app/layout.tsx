// "use client"

// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import Header from "@/components/header"
// import { ThemeProvider } from "@/components/theme-provider"
// import ScrollProgress from "@/components/scroll-progress"
// import './globals.css'
// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Rishu Goyal | Portfolio",
//   description: "Personal portfolio website of Rishu Goyal",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.className} antialiased`}>
//         <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
//           <ScrollProgress />
//           <Header />
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   )
// }

// ✅ app/layout.tsx (Server Component)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/client-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishu Goyal | Portfolio",
  description: "Personal portfolio website of Rishu Goyal",
  generator: "v0.dev",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ClientWrapper> {/* ✅ Client Component for ThemeProvider */}
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
