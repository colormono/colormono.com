import Link from 'next/link';

export default function Button({ children, href }) {
  return (
    <Link href={href}>
      <button
        type="button"
        className="inline-flex py-1 border-b font-bold font-sans uppercase hover:border-black dark:hover:border-black focus:outline-none"
      >
        {children}
      </button>
    </Link>
  );
}
