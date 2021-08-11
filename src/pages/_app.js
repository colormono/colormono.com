import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { useAnalytics } from '@/utils/analytics';
import MDXComponents from '@/components/MDXComponents';
import SEO from '@/config/seo';
import '@/styles/global.css';

export default function App({ Component, pageProps }) {
  useAnalytics();

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}
