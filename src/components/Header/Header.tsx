import NextLink from 'next/link';
import { InstagramIcon } from '@components/icons';
import Logo from './Logo';
import { Container, ToggleModeButton } from '@components/ui';
import { LINKS } from '@constants';
import classNames from 'classnames';

const menuItems = [
  { slug: '/work', label: 'WORK' },
  { slug: '/exp', label: 'LAB' },
  { slug: '/about', label: 'ABOUT' },
];

function Header() {
  const cnLink = 'text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 transition';

  return (
    <header className="sticky top-0 inset-x-0 z-10 w-full my-0 md:my-10 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300 ease-in-out">
      <Container className="flex w-full justify-between items-center md:py-3 lg:py-8">
        <nav className="flex-1 flex items-center gap-4">
          {menuItems.map((item) => (
            <div key={item.slug}>
              <NextLink href={item.slug}>
                <a className={classNames(cnLink, 'p-1 font-sans font-bold')}>{item.label}</a>
              </NextLink>
            </div>
          ))}
        </nav>

        <div className="flex-1 flex justify-center items-center">
          <Logo />
        </div>

        <nav className="flex-1 flex items-center justify-end gap-2">
          <a className={classNames(cnLink, '')} target="_blank" rel="noopener noreferrer" href={LINKS.INSTAGRAM}>
            <InstagramIcon />
          </a>

          <ToggleModeButton className={classNames(cnLink, '')} />
        </nav>
      </Container>
    </header>
  );
}

export default Header;
