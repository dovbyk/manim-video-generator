
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="relative w-20 h-20">
      {/* Main rotating circle with sprinkler effect */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-white animate-spin"></div>
      
      {/* Multiple rotating layers for sprinkler effect */}
      <div className="absolute inset-1 rounded-full border border-transparent border-t-white/70 animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
      <div className="absolute inset-2 rounded-full border border-transparent border-t-white/50 animate-spin" style={{ animationDuration: '2s' }}></div>
      <div className="absolute inset-3 rounded-full border border-transparent border-t-white/30 animate-spin" style={{ animationDuration: '2.5s', animationDirection: 'reverse' }}></div>
      
      {/* Pulsing center core */}
      <div className="absolute inset-6 rounded-full bg-white animate-pulse"></div>
      
      {/* Sprinkler dots around the circle */}
      <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-35px)`,
              animationDelay: `${i * 0.2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse blur-sm"></div>
    </div>
  );
};

export default LoadingSpinner;
