import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Nav } from "@/components/navbar";

import { siteConfig } from "@/config/site";
<<<<<<< HEAD
=======
import { fontSans, fontSerif } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
>>>>>>> 439b134bfeb8981eef11d4b46eb06aba0e2b1601

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/ninoscantores_logo_redondo.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body>
        <Nav />
        <main className="container mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
