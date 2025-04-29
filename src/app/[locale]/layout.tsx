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
            <div className="fixed top-0 left-0 mix-blend-lighten">
              <img src="/home/image-bg.png" alt="" />
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
