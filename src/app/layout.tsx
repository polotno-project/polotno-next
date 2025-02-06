import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polotno NextJS',
  description: 'Design editor inside your app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
