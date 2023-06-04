import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import '@/styles/globals.css';
import Head from 'next/head';
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
      <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className={`font-mont bg-light dark:bg-dark w-full min-h-screen`}>
            <Navbar />
              <Component key={router.asPath} {...pageProps} />
            <Footer />
          </main>

      </>

  )
};
