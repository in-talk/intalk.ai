import { Html, Head, Main, NextScript } from "next/document";
export const metadata = {
  title: "AI-Powered Calling Bots | Transforming Customer Support 24/7",
  description: "Discover the future of customer service with AI-driven calling bots. Automate calls, boost efficiency, and deliver seamless, human-like conversations—available anytime, anywhere.",
};


export default function Document() {
  return (
    <Html lang="en">
      <Head/>
      
      <body   className={` bg-gray-950 font-inter text-base text-gray-200 antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
