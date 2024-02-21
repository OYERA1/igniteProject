import Container from "@/components/Container";
import type { Metadata } from "next";
import { roboto, roboto_mono } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ignite Timer",
  description: "Oyera's project!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${roboto_mono.variable}`}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
