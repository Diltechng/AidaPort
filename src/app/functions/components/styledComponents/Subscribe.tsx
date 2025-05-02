'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiCheck, FiX } from 'react-icons/fi';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    
    if (!email) {
      setError('Email is required');
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to subscribe');
      }

      setSuccess(true);
      setEmail(''); // Clear the input on success
    } catch (err) {
      console.error('Subscription error:', err);
      setError(err instanceof Error ? err.message : 'Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-md px-6 py-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
    >
      <div className="text-center mb-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4"
        >
          {success ? (
            <FiCheck className="text-green-600 dark:text-green-400 text-2xl" />
          ) : (
            <FiMail className="text-blue-600 dark:text-blue-400 text-2xl" />
          )}
        </motion.div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {success ? 'Subscribed!' : 'Stay Updated'}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {success 
            ? "You've been successfully subscribed to our newsletter."
            : "Get the latest news, articles, and resources sent straight to your inbox"}
        </p>
      </div>

      {!success && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMail className="text-gray-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
              required
              disabled={isSubmitting}
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm"
            >
              <FiX />
              <span>{error}</span>
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              'Subscribing...'
            ) : (
              <>
                <FiSend className="mr-2" />
                Subscribe Now
              </>
            )}
          </motion.button>
        </form>
      )}

      {success && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <button
            onClick={() => setSuccess(false)}
            className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Subscribe another email
          </button>
        </motion.div>
      )}

      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </motion.div>
  );
}