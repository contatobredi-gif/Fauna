import React from 'react';

interface Props {
  children: React.ReactNode;
  tone?: 'sand' | 'forest';
  className?: string;
}

export const SectionEyebrow: React.FC<Props> = ({ children, tone = 'sand', className = '' }) => {
  return (
    <p
      className={`text-[11px] tracking-[0.22em] uppercase mb-3 ${
        tone === 'forest' ? 'text-[#C9A44C]' : 'text-[#8A6D3B]'
      } ${className}`}
    >
      {children}
    </p>
  );
};
