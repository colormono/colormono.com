import NextLink from 'next/link';
import { InstagramIcon } from '@components/icons';
import Logo from './Logo';
import { Container, ToggleModeButton } from '@components/ui';
import { LINKS } from '@constants';
import classNames from 'classnames';
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const menuItems = [
  { slug: '/work', label: 'WORK' },
  { slug: '/lab', label: 'LAB' },
  { slug: '/about', label: 'ABOUT' },
];

function Header() {
  const cnLink = 'text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 transition';

  return (
    <Disclosure
      as="header"
      className="sticky top-0 z-50 inset-x-0 w-full my-0 md:my-10 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300 ease-in-out"
    >
      {({ open }) => (
        <>
          <Container className="flex w-full justify-between items-center py-4 lg:py-8">
            <nav className="hidden sm:flex-1 sm:flex items-center gap-4">
              {menuItems.map((item) => (
                <div key={item.slug}>
                  <NextLink href={item.slug}>
                    <a className={classNames(cnLink, 'p-1 font-sans font-bold')}>{item.label}</a>
                  </NextLink>
                </div>
              ))}
            </nav>

            <div className="flex-1 flex sm:justify-center items-center">
              <Logo />
            </div>

            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="inline-flex items-center justify-center rounded text-black hover:bg-neutral-100 hover:text-neutral-500 focus:outline-none">
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
              <nav className="flex flex-col gap-4 p-8">
                {menuItems.map((item) => (
                  <div key={item.slug}>
                    <NextLink href={item.slug}>
                      <a className={classNames(cnLink, 'p-1 font-sans font-bold')}>{item.label}</a>
                    </NextLink>
                  </div>
                ))}
              </nav>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Header;
