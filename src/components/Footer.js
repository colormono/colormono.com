import Link from 'next/link';
import ExternalLink from '@/components/ExternalLink';
import { EmailIcon, GithubIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '@/components/icons';
import NowPlaying from './NowPlaying';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-white">
      <div className="w-full p-8 lg:p-16 max-w-[1280px] mx-auto flex justify-between">
        <div className="flex space-x-4 mb-4">
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
          <ExternalLink href="mailto:hello@colormono.com">
            <EmailIcon />
          </ExternalLink>
        </div>
        <div className="space-x-3">
          <ExternalLink href="https://photos.colormono.com">/photos</ExternalLink>
          {/* <Link href="/snippets">
          <a className="text-sm text-gray-500 hover:text-gray-600">/snippets</a>
        </Link> */}
          <Link href="/awesome">
            <a className="text-sm text-gray-500 hover:text-gray-600">/awesome</a>
          </Link>
        </div>
        <NowPlaying />
      </div>
    </footer>
  );
}
