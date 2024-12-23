import { motion } from 'framer-motion';
import { useEffect } from 'react';

const PageWrapper = ({ children }) => {
  useEffect(() => {
    // Scroll to top on every page change
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '-100%', opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 200, 
        damping: 25,    
        duration: 0.4, 
    }}
    style={{
        position: 'relative',
        overflow:'auto',
        // minHeight: '100vh',
        width: '100%',
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
