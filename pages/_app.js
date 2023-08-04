import { ThirdwebProvider } from '@thirdweb-dev/react';
import Head from 'next/head';
import '../styles/globals.css';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'binance';

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Head>
        {/* Add your SEO information here */}
        <title>Limtless Network Dex</title>
        <meta name="description" content="Limitless Network Dex" />
        {/* Add more meta tags or other SEO-related elements as needed */}
      </Head>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
