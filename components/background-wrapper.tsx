import React from 'react';

interface BackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const BackgroundWrapper = ({ children, className = '' }: BackgroundWrapperProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Background Image with Overlay */}
      <div 
        className="fixed inset-0 z-0" 
        style={{ 
          backgroundImage: 'url(/hero-bg.jpg)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundWrapper; 