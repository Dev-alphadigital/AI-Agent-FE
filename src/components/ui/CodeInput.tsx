'use client';

import React, { useRef, useState, KeyboardEvent, ChangeEvent } from 'react';

interface CodeInputProps {
  length?: number;
  onComplete: (code: string) => void;
  error?: string;
}

export default function CodeInput({ length = 4, onComplete, error }: CodeInputProps) {
  const [code, setCode] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single character
    
    const newCode = [...code];
    newCode[index] = value.replace(/\D/g, ''); // Only numbers
    setCode(newCode);

    // Auto-focus next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all fields are filled
    if (newCode.every(digit => digit !== '') && newCode.join('').length === length) {
      onComplete(newCode.join(''));
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    const newCode = Array(length).fill('').map((_, i) => pastedData[i] || '');
    setCode(newCode);
    
    if (pastedData.length === length) {
      onComplete(pastedData);
    }
    
    // Focus the last filled input or the first empty one
    const focusIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  return (
    <div className="w-full">
      <div className="flex justify-center gap-3 mb-4">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => { inputRefs.current[index] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={code[index]}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            className={`
              w-14 h-14 rounded-lg
              bg-gradient-to-r from-[#5c5b57] to-[#353533] border-0
              text-center text-2xl font-semibold
              text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0
              transition-all
              ${error ? 'bg-red-900/30 border border-red-500' : ''}
            `}
            style={error ? {} : { background: 'linear-gradient(to right, #5c5b57 0%, #353533 100%)' }}
          />
        ))}
      </div>
      {error && (
        <p className="text-sm text-red-400 text-center">{error}</p>
      )}
    </div>
  );
}