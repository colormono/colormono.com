import Link from 'next/link';
import { Container, ScrollToTop } from '@components/ui';
import ExternalLink from '@components/ExternalLink';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@components/icons';
import NowPlaying from './NowPlaying';
import { LINKS } from '@constants';

export default function Footer() {
  return (
    <footer className="relative z-50 text-base font-sans pt-12 pb-24 md:pt-24 bg-white dark:bg-black">
      <Container className="flex flex-col xl:flex-row gap-12 max-w-7xl">
        <div className="flex space-x-4">
          <ExternalLink href={LINKS.INSTAGRAM}>
            <InstagramIcon />
          </ExternalLink>
          <ExternalLink href={LINKS.TWITTER}>
            <TwitterIcon />
          </ExternalLink>
          <ExternalLink href={LINKS.GITHUB}>
            <GithubIcon />
          </ExternalLink>
          <ExternalLink href={LINKS.LINKEDIN}>
            <LinkedinIcon />
          </ExternalLink>
          {/* <ExternalLink href="mailto:hello@colormono.com">
            <EmailIcon />
          </ExternalLink> */}
        </div>

        <div className="flex flex-col gap-4 flex-grow sm:flex-row">
          <Link href="/work">
            <a className="text-gray-500 hover:text-gray-600">/work</a>
          </Link>
          <Link href="/lab">
            <a className="text-gray-500 hover:text-gray-600">/lab</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-500 hover:text-gray-600">/about</a>
          </Link>
          <ExternalLink href="https://photos.colormono.com">/photos</ExternalLink>

          {process.env.NODE_ENV === 'development' ? (
            <>
              <Link href="/notes">
                <a className="text-gray-500 hover:text-gray-600">/notes</a>
              </Link>
              <Link href="/design-system">
                <a className="text-gray-500 hover:text-gray-600">/design-system</a>
              </Link>
              <Link href="/snippets">
                <a className="text-gray-500 hover:text-gray-600">/snippets</a>
              </Link>
            </>
          ) : null}

          <Link href="/awesome">
            <a className="text-gray-500 hover:text-gray-600">/awesome</a>
          </Link>
        </div>

        <NowPlaying />
      </Container>

      <ScrollToTop />
    </footer>
  );
}
