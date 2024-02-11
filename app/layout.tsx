import type { Metadata } from "next";
import "./globals.css";
import { DarkModeProvider } from '@/context/darkModeContext';
import { Raleway, Open_Sans, Playfair_Display } from 'next/font/google'
import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import NextTopLoader from "nextjs-toploader";

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})
 
const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DarkModeProvider>
      <html lang="ru" className={`${playfair_display.variable} ${raleway.variable} ${open_sans.variable}`}>
        <body>
            {/* <Script id="metrika-counter" strategy="afterInteractive">
            {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(94063322, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`
            }
          </Script>
          <YandexMetrika /> */}
          <NextTopLoader height={6} color='#6767ab' />
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </DarkModeProvider>
  );
}
