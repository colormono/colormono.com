import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { useAnalytics } from '@utils/analytics';
import MDXComponents from '@components/MDXComponents';
import { PageLayoutType } from '@types/PageLayout';
import DefaultPageLayout from '@layouts/Page';
import { SEO } from '@constants';
import '@styles/global.css';

type AppLayoutProps = AppProps & {
  Component: PageLayoutType;
  pageProps: any;
};

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const PageLayout = Component.layout || DefaultPageLayout;
  useAnalytics();

  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
        <DefaultSeo {...SEO} />
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
