import React, { Fragment } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import MDXComponents from '@/components/MDXComponents';
import SEO from '../next-seo.config';
import { useAnalytics } from '@/lib/analytics';
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
