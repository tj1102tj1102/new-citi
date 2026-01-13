import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from 'sonner';

export const metadata: Metadata = {
  title: 'Credit Cards, Bank, and Loans - Personal and Business',
  description: 'Credit Cards, Bank, and Loans - Personal and Business'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
        <Toaster position='top-right' />
      </body>
    </html>
  );
}
