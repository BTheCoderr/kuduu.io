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
      <div className={`relative ${sizeClasses[size]} group`}>
        {/* Outer blue gradient circle */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-lg shadow-blue-500/25"></div>
        
        {/* Inner red heart background with gradient */}
        <div className="absolute inset-1 bg-gradient-to-br from-red-500 via-red-600 to-red-700 rounded-full flex items-center justify-center shadow-inner">
          <Heart className={`${size === 'sm' ? 'w-2 h-2' : size === 'md' ? 'w-3 h-3' : 'w-4 h-4'} text-white drop-shadow-sm`} />
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-md group-hover:bg-blue-400/50 transition-all duration-300"></div>
        
        {/* Shine effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-full"></div>
      </div>
      
      {showText && (
        <span className={`ml-3 font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent ${textSizes[size]}`}>
          Kuduu
        </span>
      )}
    </div>
  );
} 