import { motion } from "framer-motion";

export const MotionDiv = ({
  children,
  initialY = 60,
  duration = 0.6,
  delay,
}) => {
  return (
    <motion.div
      initial={{ y: initialY, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration, delay, ease: [0.6, -0.05, 0.01, 0.99] }}
      //   variants={{
      //     initial: {
      //       y: 60,
      //       opacity: 0,
      //     },
      //     animate: {
      //       y: 0,
      //       opacity: 1,
      //       transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
      //     },
      //   }}
    >
      {children}
    </motion.div>
  );
};
