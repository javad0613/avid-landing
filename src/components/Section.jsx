import React from 'react';
import { clsx } from 'clsx';

export const Section = ({ children, className, id, background = 'white' }) => {
  return (
    <section 
      id={id}
      className={clsx(
        "py-16 md:py-24 px-4 md:px-8 relative overflow-hidden",
        background === 'gray' ? 'bg-slate-50' : 'bg-white',
        background === 'dark' ? 'bg-secondary text-white' : '',
        className
      )}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {children}
      </div>
    </section>
  );
};
