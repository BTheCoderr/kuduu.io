import { Heart } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl'
  };

  return (
    <div className="flex items-center">
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer blue circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"></div>
        
        {/* Inner red heart background */}
        <div className="absolute inset-1 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center">
          <Heart className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'} text-white`} />
        </div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-sm"></div>
      </div>
      
      {showText && (
        <span className={`ml-2 font-bold ${textSizes[size]}`}>Kuduu</span>
      )}
    </div>
  );
} 