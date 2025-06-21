import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src="/js/site.js" strategy="afterInteractive" />
    </>
  );
}
