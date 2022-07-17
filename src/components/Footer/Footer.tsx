import Link from 'next/link';
import ExternalLink from '@components/ExternalLink';
import { GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@components/icons';
import NowPlaying from './NowPlaying';
import { Container } from '@components/ui';

export default function Footer() {
  return (
    <footer className="text-base font-sans pt-12 pb-24">
      <Container className="flex flex-col md:flex-row gap-12 max-w-7xl">
        <div className="flex space-x-4">
          <ExternalLink href="https://instagram.com/colormono">
            <InstagramIcon />
          </ExternalLink>
          <ExternalLink href="https://twitter.com/colormono">
            <TwitterIcon />
          </ExternalLink>
          <ExternalLink href="https://github.com/colormono">
            <GithubIcon />
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/colormono">
            <LinkedinIcon />
          </ExternalLink>
          {/* <ExternalLink href="mailto:hello@colormono.com">
            <EmailIcon />
          </ExternalLink> */}
        </div>

        <div className="space-x-4 flex-grow">
          <ExternalLink href="https://photos.colormono.com">/photos</ExternalLink>
          <Link href="/awesome">
            <a className="text-gray-500 hover:text-gray-600">/awesome</a>
          </Link>
          <Link href="/exp">
            <a className="text-gray-500 hover:text-gray-600">/exp</a>
          </Link>
          {/* <Link href="/uses">
            <a className="text-gray-500 hover:text-gray-600">/uses</a>
          </Link> */}
          {/* <Link href="/snippets">
          <a className="text-gray-500 hover:text-gray-600">/snippets</a>
        </Link> */}
        </div>

        <NowPlaying />
      </Container>
    </footer>
  );
}
