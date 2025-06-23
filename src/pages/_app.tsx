import Head from "next/head";
import "../styles/globals.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "../styles/embla.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AI Call Center Agents | Automate Customer Calls with AI</title>
        <meta
          name="description"
          content="Revolutionize your call center with AI-powered voice agents. Handle customer calls, automate responses, and boost efficiency while cutting costs."
        />
        <meta
          name="keywords"
          content="AI call center, virtual call agents, automated customer service, AI-powered calling, AI customer support"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AI Startup" />

        <meta
          property="og:title"
          content="AI Call Center Agents | Automate Customer Calls with AI"
        />
        <meta
          property="og:description"
          content="Transform your call center with AI-driven agents that provide instant customer support, reduce costs, and improve satisfaction."
        />
        {/* <meta
          property="og:image"
          content="https://yourwebsite.com/images/ai-call-center.jpg"
        /> */}
        <meta property="og:url" content="https://intalk.ai" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI Call Center Agents | Automate Customer Calls with AI"
        />
        <meta
          name="twitter:description"
          content="Revolutionize your customer support with AI-powered voice agents that provide human-like conversations."
        />
        {/* <meta
          name="twitter:image"
          content="https://yourwebsite.com/images/ai-call-center.jpg"
        /> */}

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "AI Call Center Agent",
            description:
              "AI-powered call center agents that handle customer calls, automate responses, and improve efficiency.",
            applicationCategory: "AI Call Center Software",
            operatingSystem: "Web",
            creator: {
              "@type": "Organization",
              name: "In talk.AI",
              url: "https://intalk.ai",
              logo: "https://yourwebsite.com/logo.png",
            },
            sameAs: [
              "https://www.facebook.com/intalk",
              "https://www.twitter.com/intalk",
              "https://www.linkedin.com/company/ai-intalk",
            ],
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://intalk.ai",
            },
          })}
        </script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
