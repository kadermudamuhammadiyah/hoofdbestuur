import "./globals.css";
import type { Metadata } from "next";

interface Props {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Kader Muda Muhammadiyah",
  description: "We Are Muhammadiyah Edutech Agency",
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
