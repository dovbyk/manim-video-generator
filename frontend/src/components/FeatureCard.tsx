
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className="glass-effect rounded-xl p-8 h-full transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105">
        {/* Icon */}
        <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
          {icon}
        </div>
        
        {/* Content */}
        <h3 className="font-light text-2xl mb-4 gradient-text-heading">
          {title}
        </h3>
        <p className="text-gray-400 text-lg leading-relaxed" style={{ fontFamily: 'Space Grotesk, FK Grotesk, sans-serif' }}>
          {description}
        </p>
      </div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
    </div>
  );
};

export default FeatureCard;
