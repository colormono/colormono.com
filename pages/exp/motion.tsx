import type { NextPage } from 'next';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type MyRectProps = {
  className: string;
  onClick: () => void;
};

const MyRect = ({ className = 'bg-black', onClick }: MyRectProps) => (
  <div className={`w-20 h-20 rounded ${className}`} onClick={onClick} />
);

export const MyComponent = () => (
  <motion.div
    animate={{ scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0] }}
    transition={{ duration: 2.5 }}
    className="w-20 h-20 bg-black rounded"
  />
);

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
};

const Page: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-4">
      <h1>Animations</h1>
      {/* Tailwind and useState */}
      <MyRect
        className={`cursor-pointer transition-colors duration-500 ease-in-out ${isOpen ? 'bg-red-500' : 'bg-red-900'} `}
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      />

      {/* framer-motion basic */}
      <MyComponent />

      {/* framer-motion gestures */}
      <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="w-20 h-20 bg-blue-500" />
        </motion.button>
      </motion.nav>

      {/* animate presence */}
      <AnimatePresence></AnimatePresence>
      <motion.nav animate={isOpen ? 'open' : 'closed'} variants={variants}>
        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <div className="w-20 h-20 bg-blue-500" />
        </motion.button>
      </motion.nav>
    </div>
  );
};

export default Page;
