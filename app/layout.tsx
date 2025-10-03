import '@/styles/globals.css';
import HeaderAndFooter from '@/components/HeaderAndFooter';

export const metadata = {
  description:
    'London based senior full stack developer currently working at Lottie.org',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-black dark:text-white text-center">
        <HeaderAndFooter childWrappingTag="div">{children}</HeaderAndFooter>
      </body>
    </html>
  );
}
