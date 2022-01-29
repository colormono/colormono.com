import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { useAnalytics } from '@/utils/analytics';
import MDXComponents from '@/components/MDXComponents';
import SEO from '@/config/seo';
import '@/styles/global.css';

type AppLayoutProps = AppProps & {
  Component: any;
  pageProps: any;
};

export default function App({ Component, pageProps }: AppLayoutProps) {
  useAnalytics();

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        {getLayout(<Component {...pageProps} />)}
      </MDXProvider>
    </ThemeProvider>
  );
}
