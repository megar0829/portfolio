import {Metadata} from "next";
import "@/assets/scss/style.scss";
export const metadata: Metadata = {
  title: "프론트엔드 개발자 배정식",
  description: "프론트엔드 개발자 배정식입니다.",
  keywords: ["포트폴리오", "리액트", "넥스트", "portfolio", "react.js", "next.js", "megar0829"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="favicon.svg" />
      <body>{children}</body>
    </html>
  );
}
