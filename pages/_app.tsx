import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { useAnalytics } from '@utils/analytics';
import MDXComponents from '@components/MDXComponents';
import { SEO } from '@constants';
import '@styles/global.css';

type AppLayoutProps = AppProps & {
  Component: any;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  useAnalytics();

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
