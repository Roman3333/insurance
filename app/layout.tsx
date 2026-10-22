import { TanstackQuery } from '@/app/providers/TanStackQuery';
import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { onest } from '@/shared/assets/fonts/fonts';
import '@/app/styles/globals.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${onest.variable}`}>
        <div id="__next">
          <TanstackQuery>
            <Header />

            <main>{children}</main>

            <Footer />
          </TanstackQuery>
        </div>
      </body>
    </html>
  );
}
