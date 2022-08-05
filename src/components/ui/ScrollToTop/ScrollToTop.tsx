import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ArrowCircleUpIcon } from '@heroicons/react/outline';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className={classNames(
        'fixed right-6 cursor-pointer transition-all',
        'text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300',
        isVisible ? 'opacity-100 bottom-8' : 'opacity-0 bottom-0'
      )}
    >
      <ArrowCircleUpIcon className="w-8 h-8" />
    </div>
  );
};
