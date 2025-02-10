import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export const metadata = {
  title: "AI-Powered Calling Bots | Transforming Customer Support 24/7",
  description:
    "Discover the future of customer service with AI-driven calling bots. Automate calls, boost efficiency, and deliver seamless, human-like conversations—available anytime, anywhere.",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/pagedone@1.2.2/src/css/pagedone.css "
          rel="stylesheet"
        />
         <link rel="icon" sizes="120x120" type="image/png" href="/favicon.png" />
      </Head>

      <body
        className={` bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <Main />
        <NextScript />
        {/* <!--Start of Tawk.to Script--> */}
        <Script id="chat-integration" type="text/javascript">
          {`
             
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
        (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/67a5ea303a842732607b52ae/1ijg1lk6k';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
        })();
                `}
        </Script>
        {/* <!--End of Tawk.to Script--> */}
      </body>
    </Html>
  );
}
