import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Transition = ({ children }: Props) => {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
};
