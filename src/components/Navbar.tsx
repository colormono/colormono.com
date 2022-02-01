import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import NextLink from 'next/link';
import { InstagramIcon } from '@/components/icons';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  return (
    <div className="flex items-center font-bold">
      {/* <NextLink href="/work">
            <a className="p-1 sm:p-4 text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 transition">Work</a>
          </NextLink> */}
      {/* <NextLink href="/play">
            <a className="p-1 sm:p-4 text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 transition">Play</a>
          </NextLink> */}
      <NextLink href="/about">
        <a className="p-1 sm:p-4 text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 transition">
          About
        </a>
      </NextLink>
      {/* <NextLink href="/notes">
            <a className="p-1 sm:p-4 text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 transition">Notes</a>
          </NextLink> */}
      <div className="hidden md:inline-block">
        <NextLink href="/">
          <a className="p-1 sm:p-4 text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 transition">
            Home
          </a>
        </NextLink>
      </div>

      <div className="ml-4">
        <a
          className="text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 transition"
          target="_blank"
          rel="noopener noreferrer"
          href="https://instagram.com/colormono"
        >
          <InstagramIcon />
        </a>
      </div>

      <button
        aria-label="Toggle Dark Mode"
        type="button"
        className="text-black hover:text-gray-500 dark:text-white dark:hover:text-gray-400 h-6 w-6 ml-4 relative overflow-hidden focus:outline-none"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <>
            <svg
              className={`absolute inset-0 w-6 h-6 transform transition duration-200 ease-in-out ${
                theme === 'dark' ? 'translate-y-0' : 'translate-y-full'
              } `}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              ></path>
            </svg>

            <svg
              className={`absolute inset-0 w-6 h-6 transform transition duration-200 ease-in-out ${
                theme === 'dark' ? '-translate-y-full' : 'translate-y-0'
              } `}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              ></path>
            </svg>
          </>
        )}
      </button>
    </div>
  );
}
