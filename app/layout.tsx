import type { Metadata } from "next";
import { Nunito, Bricolage_Grotesque, Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import TabTitleHook from "@/components/tab-title-hook";
import LoadingScreen from "@/components/loading-screen";

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CopyStudio Web",
  description:
    "CopyStudio Web — deine Agentur für digitale Erlebnisse.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${nunito.variable} ${bricolage.variable} ${inter.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-[#090909] text-white antialiased" suppressHydrationWarning>
        <TabTitleHook />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
