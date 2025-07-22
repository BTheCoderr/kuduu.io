'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

interface EmailFormProps {
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

export default function EmailForm({ 
  placeholder = "Email", 
  buttonText = "Submit",
  className = ""
}: EmailFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }

    if (!email.includes('@')) {
      setMessage('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      // For now, just simulate a submission
      // In production, this would send to your backend or email service
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage('Thank you! We\'ll be in touch soon.');
      setEmail('');
    } catch {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <div className="relative min-w-[300px] group">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full px-6 py-4 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 shadow-lg shadow-black/20"
            disabled={isSubmitting}
          />
          <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-400 transition-colors duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
        </div>
        <button 
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-blue-800 disabled:to-blue-900 disabled:cursor-not-allowed rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:scale-105 disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <span>{buttonText}</span>
          )}
        </button>
      </form>
      
      {message && (
        <div className={`mt-4 text-center text-sm ${message.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
          {message}
        </div>
      )}
    </div>
  );
} 