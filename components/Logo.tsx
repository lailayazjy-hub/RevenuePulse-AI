
import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  opacity?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 40, opacity = 1 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={className}
      style={{ opacity }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle (Light Gray) */}
      <circle cx="50" cy="50" r="48" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" />
      
      {/* Tree Trunk (Abstract Watercolor style) */}
      <path 
        d="M60 100 L65 50 L60 10 L80 10 L85 50 L80 100 Z" 
        fill="#A89F91" 
        opacity="0.8"
      />
      <path 
        d="M62 100 L64 60 L82 100 Z" 
        fill="#8D8274" 
        opacity="0.6"
      />

      {/* Woodpecker */}
      <g transform="translate(10, 0)">
        {/* Tail/Dark Wings */}
        <path d="M55 45 Q 45 60 55 80 L 62 65 Z" fill="#2D2D2D" />
        
        {/* Body/White Chest */}
        <path d="M58 35 Q 40 45 55 70 Q 62 50 58 35" fill="#FFFFFF" />
        
        {/* Head Black */}
        <circle cx="58" cy="32" r="7" fill="#1F1F1F" />
        
        {/* Head White markings */}
        <path d="M58 32 L 62 35 L 58 38 Z" fill="white" />
        
        {/* Red Spot behind eye */}
        <circle cx="53" cy="30" r="2.5" fill="#D63031" />
        
        {/* Beak */}
        <path d="M51 32 L 40 34 L 51 36 Z" fill="#4B4B4B" />
        
        {/* Legs */}
        <path d="M55 70 L 60 75" stroke="#4B4B4B" strokeWidth="2" />
        <path d="M55 72 L 60 77" stroke="#4B4B4B" strokeWidth="2" />
      </g>
    </svg>
  );
};
