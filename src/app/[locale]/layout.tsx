import "../../styles/globals.css";
import { Plus_Jakarta_Sans, Teko } from "next/font/google";

import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import ClientProviders from "@/components/client/layout/ClientProviders";
import DefaultLayout from "@/components/client/layout/DefaultLayout";
import Image from "next/image";

const jakartaFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-custom",
  display: "swap",
});

const tekoFont = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
  display: "swap",
});

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const { locale } = params;
  const locales = Array.from(routing.locales);
  if (!hasLocale(locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} className={`${jakartaFont.variable} ${tekoFont.variable}`}>
      <body className="antialiased">
        <ClientProviders>
          <DefaultLayout>
            <div className="fixed top-0 left-0 w-[100vw] h-[100vh] mix-blend-lighten">
              <Image src="/home/view-3d-car-model-2.svg" width={1920} height={1385} className="w-full" alt="Body Background" />
              <div className="relative aspect-[440/1174] md:aspect-[1920/980] w-full h-auto max-h-screen"></div>
            </div>
            {children}
          </DefaultLayout>
        </ClientProviders>
      </body>
    </html>
  );
}

function hasLocale(locales: string[], locale: string) {
  return locales.includes(locale);
}
