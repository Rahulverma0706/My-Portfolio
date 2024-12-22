import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null; // Hide preloader when loading is complete

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        style={{
          width: '50px',
          height: '50px',
          background: '#3182CE',
          borderRadius: '50%',
        }}
      />
    </motion.div>
  );
};

export default Preloader;
