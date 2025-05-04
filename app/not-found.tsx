"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      </motion.div>
      <motion.h2
        className="text-3xl font-semibold text-foreground mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Page Not Found
      </motion.h2>
      <motion.p
        className="text-muted-foreground mb-8 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </motion.p>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <Button asChild className="hover:scale-105 transition-transform">
          <Link href="/">
            Go Back Home
          </Link>
        </Button>
      </motion.div>
    </div>
  );
} 
export default NotFound