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
        <div className="relative min-w-[300px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            className="w-full px-6 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            disabled={isSubmitting}
          />
          <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
        <button 
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors flex items-center space-x-2"
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