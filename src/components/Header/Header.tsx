import NextLink from 'next/link';
import { InstagramIcon } from '@components/icons';
import Logo from './Logo';
import { Container, ToggleModeButton } from '@components/ui';
import { LINKS } from '@constants';
import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, TerminalIcon, XIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import Link from 'next/link';

const menuItems = [
  { slug: '/work', label: 'WORK' },
  { slug: '/lab', label: 'LAB' },
  { slug: '/about', label: 'ABOUT' },
];

function Header() {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const cnLink = 'text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 transition';

  return (
    <Disclosure
      as="header"
      className="sticky top-0 z-50 inset-x-0 w-full my-0 md:my-10 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300 ease-in-out"
    >
      {({ open }) => (
        <>
          <Container className="flex w-full justify-between items-center py-4 lg:py-8">
            <nav className="hidden sm:flex-1 sm:flex items-center gap-5">
              <NextLink href="/">
                <div className="cursor-pointer opacity-25">
                  <TerminalIcon className="w-6 h-6" />
                </div>
              </NextLink>
              {menuItems.map((item) => (
                <div key={item.slug}>
                  <NextLink href={item.slug}>
                    <a className={classNames(cnLink, 'font-sans font-bold')}>{item.label}</a>
                  </NextLink>
                </div>
              ))}
            </nav>

            <div className="flex-1 flex sm:justify-center items-center">
              <Logo />
            </div>

            <nav className="flex-1 flex items-center justify-end gap-5">
              <div className="hidden sm:block">
                {locale === 'en' ? (
                  <Link href={asPath} locale="es">
                    <a className={classNames(cnLink, 'font-sans font-bold')}>ES</a>
                  </Link>
                ) : (
                  <Link href={asPath} locale="en">
                    <a className={classNames(cnLink, 'font-sans font-bold')}>EN</a>
                  </Link>
                )}
              </div>

              <a className={classNames(cnLink, '')} target="_blank" rel="noopener noreferrer" href={LINKS.INSTAGRAM}>
                <InstagramIcon />
              </a>

              <ToggleModeButton className={classNames(cnLink, '')} />
            </nav>

            <div className="ml-4 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className={classNames(cnLink, '')}>
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
          </Container>

          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
              <>
                <nav className="flex flex-col gap-4 p-9">
                  {menuItems.map((item) => (
                    <div key={item.slug}>
                      <NextLink href={item.slug}>
                        <a className={classNames(cnLink, 'p-2 block font-sans font-bold')}>{item.label}</a>
                      </NextLink>
                    </div>
                  ))}

                  <NextLink href="/">
                    <a className={classNames(cnLink, 'p-2 block font-sans font-bold')}>HOME</a>
                  </NextLink>

                  <div className="font-sans font-bold text-xs mt-4">
                    {locale === 'en' ? (
                      <Link href={asPath} locale="es">
                        <a className={classNames(cnLink, 'p-2 block')}>ESPAÑOL</a>
                      </Link>
                    ) : (
                      <Link href={asPath} locale="en">
                        <a className={classNames(cnLink, 'p-2 block')}>ENGLISH</a>
                      </Link>
                    )}
                  </div>
                </nav>
              </>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Header;
