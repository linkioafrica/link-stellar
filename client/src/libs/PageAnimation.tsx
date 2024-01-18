import { motion } from "framer-motion";

type Animation = {
  initial: { opacity: number; x: number };
  animate: { opacity: number; x: number };
  exit: { opacity: number; x: number };
};

const fadeAnimation: Animation = {
  initial: { opacity: 0.1, x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0.1, x: 0 },
};

const slideAnimation: Animation = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

export const FadeInOutAnimation = ({ children }: any) => {
  return (
    <motion.div
      variants={fadeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInOutAnimation = ({ children }: any) => {
  return (
    <motion.div
      variants={slideAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
};
