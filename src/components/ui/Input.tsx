import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full mb-5">
      <label className="block text-sm font-normal text-white mb-2">
        {label}
      </label>
      <input
        className={`
          w-full px-4 py-3 rounded-lg
          bg-gradient-to-r from-[#5f7c8a] to-[#192125] border-0
          text-white placeholder:text-[#9CA3AF]
          text-base
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0
          transition-all
          ${error ? 'bg-red-900/30 border border-red-500' : ''}
          ${className}
        `}
        style={error ? {} : { background: 'linear-gradient(to right, #5f7c8a 0%, #192125 100%)' }}
        {...props}
      />
      {error && (
        <p className="mt-1.5 text-sm text-red-400">{error}</p>
      )}
    </div>
  );
}

