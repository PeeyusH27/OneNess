
import React from 'react';
import logoImage from '../assets/IMG_5393.png';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'red';
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", variant = 'dark' }) => {
  // Using the logo image from the assets folder

  const getFilter = () => {
    switch (variant) {
      case 'red':
        // A filter that transforms black to the specific red theme color (#ef4444)
        return 'brightness(0) saturate(100%) invert(27%) sepia(91%) saturate(2352%) hue-rotate(346deg) brightness(104%) contrast(89%)';
      case 'light':
        // A filter that transforms black to white
        return 'brightness(0) invert(1)';
      default:
        // Default is the original black as provided in the image
        return 'none';
    }
  };

  return (
    <div className={`flex items-center justify-center transition-all duration-300 overflow-hidden ${className}`}>
      <img 
        src={logoImage} 
        alt="Oneness Games"
        className="h-full w-auto object-contain transition-all duration-300"
        style={{ 
          filter: getFilter(),
          transform: 'scale(1)',
          transformOrigin: 'center center'
        }}
        loading="eager"
      />
    </div>
  );
};

export default Logo;
