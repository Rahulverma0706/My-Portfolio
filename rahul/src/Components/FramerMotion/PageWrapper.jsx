import { motion } from 'framer-motion';

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }} // Start from the bottom
      animate={{ y: 0, opacity: 1 }} // Slide to center
      exit={{ y: '-100%', opacity: 0 }} // Exit to the top
      
      transition={{
        duration: 0.4, // Adjust for smoothness
        ease: 'easeOut',
      }}
      style={{ minHeight: '100vh', width: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
