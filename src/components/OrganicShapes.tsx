import React from 'react';

// Decorative organic shapes for nature-inspired design
export const LeafDecoration = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 100 120" 
    className={className}
    style={style}
    fill="currentColor"
  >
    <path d="M50 0 C20 30 0 60 20 90 C35 110 65 110 80 90 C100 60 80 30 50 0 Z" />
    <path d="M50 20 L50 100" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
  </svg>
);

export const MonsteraLeaf = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 120 150" 
    className={className}
    style={style}
    fill="currentColor"
  >
    <path d="M60 0 C30 20 10 50 15 90 C20 120 45 145 60 150 C75 145 100 120 105 90 C110 50 90 20 60 0 Z M40 50 Q50 60 50 80 M80 50 Q70 60 70 80 M60 30 L60 140" 
      fill="currentColor" 
    />
    <ellipse cx="35" cy="70" rx="12" ry="20" fill="hsl(var(--hero-bg))" />
    <ellipse cx="85" cy="70" rx="12" ry="20" fill="hsl(var(--hero-bg))" />
  </svg>
);

export const BlobShape = ({ className = "" }: { className?: string }) => (
  <div className={`blob-shape ${className}`} />
);

export const OrganicBlob = ({ className = "", variant = "primary" }: { className?: string; variant?: "primary" | "secondary" | "tertiary" }) => {
  const colors = {
    primary: "bg-blob-primary",
    secondary: "bg-blob-secondary", 
    tertiary: "bg-blob-tertiary",
  };
  
  return (
    <div className={`blob-shape animate-blob ${colors[variant]} ${className}`} />
  );
};

export const FloatingBlob = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => (
  <div 
    className={`animate-float ${className}`}
    style={{ animationDelay: `${delay}s` }}
  />
);
