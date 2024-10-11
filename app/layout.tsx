import '@/app/ui/global.css' // tailwindcss
import { inter } from '@/app/ui/font' // font-inter

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ `${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
