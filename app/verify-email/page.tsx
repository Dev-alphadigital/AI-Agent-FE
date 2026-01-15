'use client';

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VerifyEmailPage() {
  const [code, setCode] = useState(['', '', '', '']);
  const inputRef0 = useRef<HTMLInputElement>(null);
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const inputRef3 = useRef<HTMLInputElement>(null);
  const inputRefs = [inputRef0, inputRef1, inputRef2, inputRef3];

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 4);
    const newCode = [...code];
    for (let i = 0; i < 4; i++) {
      newCode[i] = pastedData[i] || '';
    }
    setCode(newCode);
    if (pastedData.length === 4) {
      inputRefs[3].current?.focus();
    } else if (pastedData.length > 0) {
      inputRefs[pastedData.length - 1].current?.focus();
    }
  };

  return (
    <div 
      className="min-h-screen w-full relative overflow-hidden"
      style={{
        backgroundImage: 'url(/plainbg.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Robot Image Overlay - Right Side */}
      <div className="absolute right-0 bottom-0 w-[50%] h-[80%] pointer-events-none z-0">
        <Image
          src="/Robot.png"
          alt="AI Robot"
          fill
          className="object-contain object-right-bottom"
          priority
          quality={100}
        />
      </div>

      {/* Form Container - Left Side */}
      <div className="relative z-10 min-h-screen flex items-center justify-start pl-12 lg:pl-20">
        <div className="w-full max-w-md">
          {/* Glassmorphism Container */}
          <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Back Arrow */}
            <Link href="/login" className="inline-flex items-center text-white hover:text-gray-300 transition-colors mb-6">
              <ArrowLeft size={24} />
            </Link>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-4 text-white text-left">
              Verify your mail
            </h1>

            {/* Instructions */}
            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              We sent a reset code to alpha...@gmail.com enter 4 digit code that is mentioned in the email.
            </p>

            {/* 4-Digit Code Input */}
            <div className="flex gap-3 mb-8 justify-center">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={inputRefs[index]}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={index === 0 ? handlePaste : undefined}
                  className="w-16 h-16 text-center text-2xl font-semibold bg-transparent border border-white/40 rounded-lg text-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/30 transition-all"
                />
              ))}
            </div>

            {/* Confirm Button */}
            <div className="flex justify-center mb-6">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#266660] hover:bg-[#2d7a73] text-white font-semibold text-lg rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#266660]/50"
              >
                Confirm
              </button>
            </div>

            {/* Resend Code Link */}
            <div className="text-center mb-6">
              <Link href="#" className="text-sm text-[#266660] hover:text-[#2d7a73] transition-colors">
                Resend code
              </Link>
            </div>

            {/* Re-enter Email Link */}
            <div className="text-center text-gray-400 text-sm">
              Didn't get a code?{" "}
              <Link href="/login" className="text-[#266660] hover:text-[#2d7a73] underline transition-colors">
                Re-enter email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

