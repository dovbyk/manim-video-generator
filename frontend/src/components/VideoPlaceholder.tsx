
import React from 'react';
import { Play } from 'lucide-react';

interface VideoPlaceholderProps {
  title: string;
  description: string;
  className?: string;
}

const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ 
  title, 
  description, 
  className = "" 
}) => {
  return (
    <div className={`relative group cursor-pointer ${className}`}>
      <div className="relative glass-effect rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:bg-white/10">
        {/* Video placeholder */}
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-pulse-slow"></div>
          </div>
          
          {/* Play button */}
          <div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110">
            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="font-light text-xl mb-2 gradient-text-heading">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed" style={{ fontFamily: 'Space Grotesk, FK Grotesk, sans-serif' }}>
            {description}
          </p>
        </div>
      </div>
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
    </div>
  );
};

export default VideoPlaceholder;
