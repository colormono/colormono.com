import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '@utils/gtag';

export const useAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      // Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
      //   includedDomains: ['colormono.com']
      // });
    }

    function onRouteChangeComplete(url) {
      gtag.pageview(url);
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, []);
};
