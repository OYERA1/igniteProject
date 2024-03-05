import { roboto, roboto_mono } from "./fonts";

import type { Metadata } from "next";

import "./globals.css";
import Container from "../components/Container";
import Card from "../components/Form/Card";
import Header from "../components/Header";
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
        <Container>
          <Card>
            <Header />
            {children}
          </Card>
        </Container>
      </body>
    </html>
  );
}
